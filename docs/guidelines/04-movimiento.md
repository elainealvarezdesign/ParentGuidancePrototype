# 4. Movimiento

El prototipo anima con **`motion`** (Framer Motion, `motion/react`). Esta guía fija los valores que ya usa y
les añade el principio de Scalar: movimiento **seguro y sin prisa**, nunca rebotón, y siempre respetando
reduced‑motion.

## 4.1 Tokens

```ts
// src/app/motion.ts
export const ease = {
  out: [0.25, 0.46, 0.45, 0.94],   // curva de marca: entradas y reveals (la que ya usa el prototipo)
  inOut: [0.65, 0, 0.35, 1],       // abrir/cerrar, acordeones, tabs
} as const;

export const duration = {
  micro: 0.15,     // press, cambio de color
  fast: 0.22,      // hover, tooltips, iconos
  base: 0.35,      // acordeones, menús, modales
  reveal: 0.55,    // entrada de contenido al hacer scroll
} as const;

export const stagger = 0.06;         // entre cards de un grid (máx. 6 animadas)
```

| Banda | Duración | Valores actuales que se consolidan |
|-------|----------|------------------------------------|
| Micro | 0.15s | `0.15`, `duration-200` en colores |
| Rápida | 0.22s | `0.2`, `0.22` |
| Base | 0.35s | `0.3`, `0.35`, `duration-300` |
| Reveal | 0.55s | `0.45`, `0.5`, `0.55`, `0.6`, `0.65`, `0.7` |

## 4.2 Patrones

### Reveal al hacer scroll

Sí se usa (es una web de contenidos, no una herramienta), pero con suavidad y **una sola vez**:

```tsx
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: duration.reveal, ease: ease.out }}
/>
```

- Desplazamiento **16px** (hoy conviven 6, 8, 12, 16, 20, 24 y 30px).
- Siempre `once: true`: el contenido no vuelve a esconderse al subir.
- Grids: `delay: index * stagger`, y solo para los primeros 6 elementos.
- El hero y el primer bloque visible se muestran **sin animación de entrada**, para que la página no parezca
  vacía al cargar (hoy el hero aparece desvanecido unos instantes).

### Feedback de interacción

| Elemento | Animación |
|----------|-----------|
| Botones | `whileTap={{ scale: 0.97 }}` + color con `transition-colors` |
| Cards clicables | Hover: sombra `card-hover` y `y: -2`, `duration.fast` |
| Iconos sociales/pequeños | Hover: `scale: 1.1` como máximo (hoy 1.15) |
| Acordeón / FAQ | Altura `auto` + opacidad, `duration.base`, `ease.inOut`; icono `+` rota 45° |
| Modales | Fondo con fade; panel `opacity 0 → 1`, `y: 16 → 0`, `duration.base` |

### Qué evitar

- `type: "spring"` con rebote en elementos de contenido (hoy hay 2 usos): usar `ease.out`.
- `whileHover` que cambia `backgroundColor` en motion: usar la clase `hover:` de Tailwind, que es más
  simple y no hace falta JS.
- Animaciones infinitas o decorativas. La única excepción es el punto "en vivo" (pulso suave), y solo
  mientras el estado esté activo.
- Cualquier animación en la página **Get Help**: el contenido de crisis debe estar visible de inmediato.

## 4.3 Contrato de reduced‑motion (obligatorio)

Implementado. La app está envuelta en `MotionConfig`:

```tsx
// src/app/App.tsx
import { MotionConfig } from "motion/react";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* …app… */}
    </MotionConfig>
  );
}
```

Con `reducedMotion="user"`, `motion` desactiva los desplazamientos y escalas para quien tenga activada la
opción del sistema, y mantiene los cambios de opacidad. Para las transiciones CSS, `tokens.css` ya incluye
la regla global de `@media (prefers-reduced-motion: reduce)`, y el prototipo la aplica en
`src/styles/accessibility.css`. Los `window.scrollTo` usan `scrollBehavior()` de `src/app/utils/motion.ts`,
que devuelve `"auto"` en lugar de `"smooth"` cuando el usuario pide reducir movimiento.

Regla: **ningún contenido puede quedar oculto** (`opacity: 0`) si la animación no se ejecuta.
