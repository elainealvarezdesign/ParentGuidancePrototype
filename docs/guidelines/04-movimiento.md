# 4. Movimiento

De la guía de animación de Scalar conservamos los **tokens** y la **filosofía** — movimiento seguro y sin
prisa, nunca rebotón — y descartamos todo el storytelling de scroll de marketing.

En Parent Guidance el movimiento solo tiene tres funciones:

1. **Feedback**: confirmar que una interacción se registró (hover, press, foco).
2. **Transición de estado**: abrir/cerrar, cambiar de pestaña, mostrar/ocultar contenido.
3. **Orientación**: indicar de dónde viene o a dónde va un elemento (modal, drawer, toast).

Nada se anima "porque sí". El contenido se muestra de inmediato; no aparece al hacer scroll.

## 4.1 Easing

```css
--ease-expo:     cubic-bezier(0.16, 1, 0.3, 1);  /* parada decidida — press, entradas, underline */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);   /* estándar — color, fondo, borde */
--ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1); /* ida y vuelta — tabs, segmented control, acordeón */
--ease-in:       cubic-bezier(0.55, 0, 1, 0.45); /* salidas — cerrar modal/toast */
```

| Easing | Equivalente GSAP | Cuándo |
|--------|------------------|--------|
| `--ease-expo` | `expo.out` / `power3.out` | Entradas y feedback de press |
| `--ease-standard` | `power2.out` | Cambios de color, fondo o borde |
| `--ease-in-out` | `power3.inOut` | Transiciones de estado en dos direcciones |
| `--ease-in` | `power2.in` | Elementos que salen |

## 4.2 Duraciones

| Banda | Rango | Variable | Uso |
|-------|-------|----------|-----|
| Micro | 150–180ms | `--dur-micro-fast` / `--dur-micro` | Hover, press, cambio de color, foco |
| Corta | 200–300ms | `--dur-short` | Tooltips, dropdowns, toasts, acordeones |
| Estándar | 300–450ms | `--dur-standard` | Modales, drawers, cambio de vista |

Las bandas "lenta/cinemática" (0.8–1.2s) y "extra lenta" (1.5–2s) de Scalar son de marketing y **no se usan**.
Las salidas duran ~70 % de lo que dura la entrada.

## 4.3 Stagger

Solo para listas que aparecen como resultado de una acción del usuario (p. ej. resultados de búsqueda,
pasos de una guía), nunca al cargar la página ni al hacer scroll.

| Banda | Valor | Uso |
|-------|-------|-----|
| Ajustado | 30–50ms | Elementos de una lista corta |
| Estándar | 60–90ms | Cards de un grid (máximo ~6 elementos animados; el resto aparece sin retraso) |

## 4.4 Patrones

### Feedback de botón

```css
.btn { transition: transform var(--dur-micro-fast) var(--ease-expo),
                   background-color var(--dur-micro) var(--ease-standard); }
.btn:active { transform: translateY(1px) scale(0.985); }
```

### Entrada de elemento (modal, popover, toast)

Deriva corta hacia arriba con fade — la misma receta de reveal de Scalar, pero disparada por la acción,
no por el scroll.

```css
@keyframes enter {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: none; }
}
.popover[data-open] { animation: enter var(--dur-short) var(--ease-expo); }
.modal[data-open]   { animation: enter var(--dur-standard) var(--ease-expo); }
```

Desplazamiento: 4–8px para elementos pequeños, 16–24px como máximo para paneles grandes.

### Card interactivo

```css
.card { transition: background-color var(--dur-micro) var(--ease-standard); }
.card:hover { background: var(--neutral-100); }
```

Sin lift, sin sombra en hover, sin spotlight que sigue al cursor.

### Indicador "en vivo" (opcional)

Si alguna pantalla necesita señalar un estado en tiempo real (p. ej. sincronizando), se puede reutilizar el
pulso de Scalar: un anillo que escala de 1 a 2.6 y se desvanece, 2s `ease-out`, infinito. Es la **única**
animación continua permitida y solo mientras el estado esté activo.

## 4.5 Lo que no se usa

- GSAP + ScrollTrigger para revelar contenido al hacer scroll.
- Parallax y animaciones ligadas al scroll (`scrub`).
- Scale‑in de secciones completas.
- Marquee / ticker de logos y la línea de "scroll‑cue".
- Lift de 5px con spotlight radial en cards.
- Diagrama "Living Model" con morph de nodos.

Si en el futuro Parent Guidance necesita una visualización de "sistema vivo", se revisa la técnica del
Living Model (interpolación con `requestAnimationFrame`, arranque con `IntersectionObserver` al 35 %) como
caso aparte.

## 4.6 Contrato de reduced‑motion (obligatorio)

Cuando el usuario tiene `prefers-reduced-motion: reduce`, toda la interfaz se muestra en su estado final,
sin animación. Ningún contenido puede quedar oculto (`opacity: 0`) esperando una animación.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

```js
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced) {
  // animaciones en JS
}
```

Los cambios de color y opacidad siguen siendo aceptables como feedback; lo que se elimina es el
desplazamiento y la escala.
