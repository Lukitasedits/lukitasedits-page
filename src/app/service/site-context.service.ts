import { Injectable } from '@angular/core';

/**
 * Determina en qué "sitio" se está ejecutando la misma aplicación Angular.
 *
 * El mismo build se despliega en dos dominios:
 *  - lukitasedits (sitio personal completo)
 *  - pragmify.it  (sitio corporativo de la SaaS Pragmify it)
 *
 * En pragmify.it solo deben quedar disponibles las secciones Home, Privacidad
 * y Términos. El resto de este servicio expone esa información para que tanto el
 * guard (middleware de rutas) como la UI (header) tomen decisiones coherentes.
 */
@Injectable({ providedIn: 'root' })
export class SiteContextService {

  /** Rutas permitidas cuando la app corre bajo el dominio pragmify.it. */
  readonly pragmifyAllowedPaths: ReadonlyArray<string> = ['pragmify', 'privacy', 'terms'];

  /** Ruta que actúa como "home" dentro de pragmify.it. */
  readonly pragmifyHomePath = 'pragmify';

  /** True cuando la aplicación se sirve desde el dominio de Pragmify it. */
  isPragmify(): boolean {
    return typeof window !== 'undefined'
      && /(^|\.)pragmify\.it$/i.test(window.location.hostname);
  }

  /** True si `path` es accesible en el contexto actual. */
  isPathAllowed(path: string): boolean {
    if (!this.isPragmify()) {
      return true; // en lukitasedits está disponible todo el sitio
    }
    return this.pragmifyAllowedPaths.includes(path);
  }
}
