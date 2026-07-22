import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  NgZone,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const AVATAR_URL = './assets/glb/lucas.glb';
const LERP_FACTOR = 0.35;
const HEAD_YAW_LIMIT = Math.PI / 3; // ~60 grados horizontal
const HEAD_PITCH_LIMIT = Math.PI / 4; // 45 grados vertical

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements AfterViewInit {
  @ViewChild('rendererCanvas', { static: true })
  private rendererCanvas!: ElementRef<HTMLCanvasElement>;

  // Estado y Propiedades de Three.js (ahora propiedades de clase estándar)
  statusText: string = 'Inicializando...'; // Propiedad estándar en lugar de Signal
  mouse: THREE.Vector2 = new THREE.Vector2(0, 0); // Propiedad estándar en lugar de Signal

  private clock = new THREE.Clock();
  private mixer: THREE.AnimationMixer | null = null;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private avatarHeadPivot: THREE.Object3D | null = null;
  private targetQuaternion = new THREE.Quaternion();

  // Cuaternio de corrección (180 grados en Y para Mixamo)
  private CORRECTION_QUATERNION = new THREE.Quaternion().setFromAxisAngle(
    new THREE.Vector3(0, 1, 0),
    Math.PI
  );

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    // Three.js corre su propio bucle con requestAnimationFrame. Si se ejecuta
    // dentro de la zona de Angular, CADA frame dispara una detección de cambios
    // global (~60 veces/seg), saturando el hilo principal hasta congelar la
    // página ("La página no responde"). Lo aislamos fuera de la zona.
    this.ngZone.runOutsideAngular(() => {
      this.initThree();
      this.loadModel();
      this.animate();
      this.onResize(); // Configuración inicial de tamaño
    });
  }

  /**
   * Inicializa la escena, la cámara y el renderizador de Three.js.
   */
  private initThree(): void {
    this.scene = new THREE.Scene();
    this.scene.background = null; // Establece el fondo de la escena como transparente

    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    this.camera.position.set(0, 1.5, 2);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.rendererCanvas.nativeElement,
      antialias: true,
      alpha: true, // Permite la transparencia del fondo del renderizador
    });
    // Cap del pixel ratio: en pantallas HiDPI, devicePixelRatio (2-3) multiplica
    // el buffer de render a millones de píxeles extra por frame sin beneficio
    // visual real para este avatar. Lo limitamos a 2.
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // REMOVIDO: this.renderer.outputEncoding = THREE.sRGBEncoding;

    // Iluminación
    const ambientLight = new THREE.HemisphereLight(0xffffff, 0x444444, 5.0);
    ambientLight.position.set(0, 20, 0);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight.position.set(3, 10, 10);
    dirLight.castShadow = true;
    this.scene.add(dirLight);
  }

  /**
   * Carga el modelo GLB, configura la animación y el pivote de la cabeza.
   */
  private loadModel(): void {
    const loader = new GLTFLoader();

    // Añadir cache buster para asegurar la recarga
    const urlWithCacheBuster = `${AVATAR_URL}?v=${new Date().getTime()}`;

    loader.load(
      urlWithCacheBuster,
      (gltf) => {
        const model = gltf.scene;
        this.statusText = 'Modelo cargado correctamente.'; // Asignación directa
        // Forzar detección de cambios ya que la actualización ocurre en un callback asíncrono
        // Pero en este entorno, confiamos en que Angular lo maneje por el onSnapshot.
        // Si fuera necesario en un entorno real con OnPush, usaríamos:
        // this.cdr.detectChanges();

        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        model.scale.set(1, 1, 1);
        model.position.set(0, 0, 0);
        this.scene.add(model);

        // Configurar Animación
        this.mixer = new THREE.AnimationMixer(model);
        if (gltf.animations.length > 0) {
          const action = this.mixer.clipAction(gltf.animations[0]);
          action.loop = THREE.LoopPingPong;
          action.repetitions = Infinity;
          action.play();
        }

        // Configurar Seguimiento de Cabeza
        const headBone =
          model.getObjectByName('Head') ||
          model.getObjectByName('mixamorig:Head');

        if (headBone) {
          const pivot = new THREE.Object3D();
          const parentBone = headBone.parent;

          if (parentBone) {
            pivot.position.copy(headBone.position);
            pivot.rotation.copy(headBone.rotation);
            pivot.scale.copy(headBone.scale);

            parentBone.add(pivot);
            parentBone.remove(headBone);
            pivot.add(headBone);
            pivot.position.y -= 0.1;

            headBone.position.set(0, 0, 0);
            headBone.rotation.set(0, 0, 0);

            this.avatarHeadPivot = pivot;
          }
        } else {
          console.warn("No se encontró el hueso 'Head' para el seguimiento.");
        }
      },
      (xhr) => {
        const percent = Math.round((xhr.loaded / xhr.total) * 100);
        this.statusText = `Cargando... ${percent}%`; // Asignación directa
      },
      (error) => {
        console.error('Error al cargar el modelo:', error);
        this.statusText = 'Error al cargar el modelo.'; // Asignación directa
      }
    );
  }

  /**
   * Bucle de animación principal.
   */
  private animate = () => {
    requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();

    if (this.mixer) this.mixer.update(delta);

    this.updateHeadTracking();

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  };

  /**
   * Calcula y aplica la rotación de la cabeza mediante SLERP.
   */
  private updateHeadTracking(): void {
    if (!this.avatarHeadPivot) return;

    const currentMouse = this.mouse; // Acceso directo (sin paréntesis)

    // 1. Calcular rotaciones límite
    const targetYaw = currentMouse.x * HEAD_YAW_LIMIT;
    const targetPitch = currentMouse.y * HEAD_PITCH_LIMIT;

    // 2. Construir el Cuaternio objetivo (Pitch en X, Yaw en Y)
    const targetEuler = new THREE.Euler(
      targetPitch,
      targetYaw + Math.PI,
      0,
      'YXZ'
    );

    this.targetQuaternion.setFromEuler(targetEuler);

    // 3. Aplicar la CORRECCIÓN base (180° en Y)
    this.targetQuaternion.multiply(this.CORRECTION_QUATERNION);

    // 4. Aplicar suavizado (SLERP)
    this.avatarHeadPivot.quaternion.slerp(this.targetQuaternion, LERP_FACTOR);
  }

  // --- Manejo de Eventos (Angular Host Listeners) ---

  /**
   * Captura el movimiento del ratón y actualiza las coordenadas normalizadas.
   */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    // En un componente OnPush, un evento del DOM inyectado por Angular (como HostListener)
    // dispararía una detección de cambios, por lo que la actualización de la propiedad
    // debería reflejarse en el siguiente ciclo.
  }

  /**
   * Captura el evento cuando el ratón sale del área del documento (iframe).
   * Esto funciona para restablecer la mirada al frente (coordenadas 0,0).
   */
  @HostListener('document:mouseleave')
  onMouseLeave(): void {
    // Forzar al mouse a la posición central (0, 0)
    this.mouse.x = 0;
    this.mouse.y = 0;
  }

  /**
   * Captura el evento de redimensionamiento de la ventana para ajustar la cámara y el renderizador.
   */
  @HostListener('window:resize')
  onResize(): void {
    if (this.camera && this.renderer) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }
}
