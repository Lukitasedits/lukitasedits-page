import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { SiteContextService } from '../service/site-context.service';

/**
 * Middleware de rutas para el dominio pragmify.it.
 *
 * Implementa la interfaz CanActivate y se aplica a todas las rutas. Cuando la
 * app se sirve desde pragmify.it solo deja pasar las secciones permitidas
 * (Home, Privacidad y Términos); cualquier otra ruta se redirige al Home de
 * Pragmify. Bajo el dominio lukitasedits deja pasar todo sin cambios.
 */
@Injectable({ providedIn: 'root' })
export class PragmifyAccessGuard implements CanActivate {

  constructor(
    private siteContext: SiteContextService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean | UrlTree {
    const path = route.routeConfig?.path ?? '';

    if (this.siteContext.isPathAllowed(path)) {
      return true;
    }

    // En pragmify.it, todo lo no permitido cae en el Home de Pragmify.
    return this.router.createUrlTree(['/' + this.siteContext.pragmifyHomePath]);
  }
}
