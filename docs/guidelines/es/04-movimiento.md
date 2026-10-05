# 4. Movimiento

El prototipo anima con **`motion`** (Framer Motion, `motion/react`). Principio: movimiento **seguro
y sin prisa**, nunca rebotón, y siempre respetando reduced‑motion.

## 4.1 Tokens

Las duraciones y curvas están en [`tokens.css`](../../../src/styles/tokens.css):

| Banda | Duración | Variable CSS | Clase de Tailwind | Uso |
|-------|----------|--------------|-------------------|-----|
| Micro | 0.15s | `--pg-dur-micro` | `duration-(--pg-dur-micro)` | Press, cambio de color, menús de orden |
| Rápida | 0.22s | `--pg-dur-fast` | `duration-(--pg-dur-fast)` | Hover, iconos, pop-ups |
| Base | 0.35s | `--pg-dur-base` | `duration-(--pg-dur-base)` | Acordeones, menús, modales, cambios de vista |
| Reveal | 0.55s | `--pg-dur-reveal` | `duration-(--pg-dur-reveal)` | Entrada de contenido al hacer scroll |

| Curva | Valor | Uso |
|-------|-------|-----|
| `ease-pg-out` | `[0.25, 0.46, 0.45, 0.94]` | Curva de marca: entradas, reveals, pop-ups |
| `ease-pg-in-out` | `[0.65, 0, 0.35, 1]` | Abrir/cerrar, acordeones, tabs |

En props de `motion` se escriben los números (`transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}`).
Stagger entre cards de un grid: **0.06s**, solo para los primeros 6 elementos.

## 4.2 Patrones

### Reveal al hacer scroll

Se usa con suavidad y **una sola vez**:

```tsx
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
/>
```

- Desplazamiento vertical de **16–24px**. Desplazamientos laterales (`x`) solo en heros y filas de imagen + texto,
  como máximo 32–48px, y la página que los use lleva `overflow-x-clip` para no crear scroll lateral en móvil.
- Siempre `once: true`: el contenido no vuelve a esconderse al subir.
- Grids: `delay: index * 0.06`, solo para los primeros 6 elementos.

### Feedback de interacción

| Elemento | Animación |
|----------|-----------|
| Botones (`<Button>`) | `whileTap={{ scale: 0.97 }}` + color con `transition-colors`. Hover solo de color |
| Cards clicables | Hover: sombra `card-hover` y `y: -2`. Sin escala |
| Imágenes destacadas | Hover: escala máxima **1.02** (o sin animación) |
| Iconos sociales | Hover: `y: -2`, sin escala |
| Acordeón / FAQ | Altura `auto` + opacidad, 0.35s; el icono `+` rota 45° |
| Pop-ups y modales | Fondo con fade; panel `opacity 0 → 1`, `scale 0.97 → 1`, `y: -6 → 0`, 0.22s |
| Confirmaciones ("✓ Question Submitted") | `opacity 0 → 1`, `scale 0.9 → 1`, 0.35s, `ease-pg-out` |

### Qué evitar

- `type: "spring"` con rebote.
- `whileHover` con escala mayor de 1.02.
- `whileHover` que cambia colores en `motion`: usar las clases `hover:` de Tailwind.
- Animaciones infinitas o decorativas. La única excepción es el punto "en vivo" (pulso suave), y solo
  mientras el estado esté activo.
- Animaciones de entrada en la página **Get Help**: el contenido de crisis está visible desde el primer momento
  (`initial={false}`).
- Animar el hero o el primer bloque visible de forma que la página parezca vacía al cargar.

## 4.3 Scroll

- Cada navegación abre la página nueva arriba (`<ScrollRestoration />` en el layout raíz); atrás/adelante
  recupera la posición.
- Los botones "Back to top" y cambios de página usan `scrollBehavior()` de
  [`src/app/utils/motion.ts`](../../../src/app/utils/motion.ts): `"smooth"`, o `"auto"` si el usuario pide reducir
  movimiento.

## 4.4 Contrato de reduced‑motion (obligatorio)

Implementado. La app está envuelta en `MotionConfig`:

```tsx
// src/app/App.tsx
<MotionConfig reducedMotion="user">{/* …app… */}</MotionConfig>
```

Con `reducedMotion="user"`, `motion` desactiva desplazamientos y escalas para quien tenga activada la opción
del sistema, y mantiene los cambios de opacidad. Las transiciones CSS se desactivan con la regla
`@media (prefers-reduced-motion: reduce)` de [`accessibility.css`](../../../src/styles/accessibility.css).

Regla: **ningún contenido puede quedar oculto** (`opacity: 0`) si la animación no se ejecuta.
