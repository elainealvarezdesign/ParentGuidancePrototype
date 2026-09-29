# 2. Botones — `Button` y `Button_Icon`

Basado en la documentación del componente de Figma (`Scalar_Design_System-Components`,
`Button` 59:21923 y `Button_Icon` 205:709). Es la parte de las fuentes que se adopta casi íntegra,
porque ya está pensada para interfaz de producto.

`Button_Icon` es la variante solo‑icono del mismo componente: comparte estilos, tipos, tamaños y estados.

## 2.1 Anatomía

| Elemento | Descripción |
|----------|-------------|
| Contenedor | Lleva relleno, borde y radio (`--radius-sm`, 4px), todos ligados a variables |
| Label | Inter Semi Bold, centrado; el tamaño cambia con Size |
| Icono(s) | Slot opcional al inicio o al final; `Button_Icon` usa solo este slot |
| Padding interno | Escala con Size para mantener el equilibrio óptico con el label |

## 2.2 Cuatro ejes

### Style — jerarquía visual

| Style | Aspecto | Cuándo |
|-------|---------|--------|
| **Primary** | Relleno Brand/500, texto blanco | La acción principal de la pantalla o sección ("Guardar", "Continuar") |
| **Secondary** | Borde + texto Brand/500, sin relleno | Acción de apoyo junto a una Primary ("Cancelar"), o acción de énfasis medio |
| **Tertiary** | Solo texto Brand/500 | Acciones de baja prioridad: "Ver más", acciones opcionales o de descarte |

> **Máximo un Primary por vista o sección.** Las acciones extra se degradan a Secondary/Tertiary.

### Type — intención semántica

Independiente del Style: un Primary/Negative y un Tertiary/Negative significan lo mismo con distinto peso.

| Type | Color | Cuándo |
|------|-------|--------|
| **Main** | `#037de8` | Acción neutra — la gran mayoría de los botones |
| **Positive** | `#00b04f` | Confirma o completa algo favorable ("Aprobar", "Publicar") |
| **Warning** | `#cc8800` | Acción reversible pero con consecuencias ("Sobrescribir borrador") |
| **Negative** | `#cb0000` | Acción destructiva o irreversible ("Eliminar"). **Siempre con paso de confirmación** |

### Size

| Size | Alto | Tipografía | Cuándo |
|------|------|-----------|--------|
| **S** | 20px | S — 12/16, Semi Bold | UI densa en escritorio: acciones de fila de tabla, toolbars compactas |
| **M** | 40px | L — 16/24, Semi Bold | **Por defecto**: formularios, modales, cards |
| **L** | 60px | 2XL — 20/28, Semi Bold | CTA de alto énfasis, pantallas táctiles, onboarding |

Padding y tamaño de label escalan juntos. Nunca sobrescribir uno de ellos en una instancia.

### State

| State | Disparador | Cambio visual (Primary/Main) |
|-------|-----------|------------------------------|
| Default | Reposo | Relleno `--brand-500` |
| Hover | Puntero encima | Relleno `--brand-600` (un paso más oscuro) |
| Pressed | Click / toque | Relleno `--brand-700` (dos pasos más oscuro) |
| Selected | Toggle activo persistente | `--brand-700` + acento `--brand-400`, distinto del Pressed momentáneo |
| Focus | Foco de teclado | Anillo exterior de 2px en `--brand-400` |
| Loading | Acción asíncrona en curso | 70 % de opacidad, label "Cargando…" (idealmente con spinner) |
| Disabled | Acción no disponible | Relleno `--neutral-300`, label `--neutral-600`; mismo aspecto para todos los Types |

En Figma, Focus y Loading solo existen para `Type=Main` (y Loading solo en Size M). En código los aplicamos
a todos los Types y Sizes con el mismo patrón, que es la recomendación de la propia auditoría.

## 2.3 Button_Icon

- **Usar** cuando la acción se reconoce universalmente por su icono (cerrar, editar, eliminar, más/kebab,
  expandir/colapsar) y falta espacio horizontal.
- **Evitar** cuando la acción es ambigua: usar label visible o, como mínimo, un tooltip.
- Mide lo mismo de alto que `Button` en cada Size (20/40/60px) y es cuadrado.
- **Siempre** lleva nombre accesible (`aria-label`).

## 2.4 Implementación de referencia

```css
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: var(--space-s);
  font: 600 var(--text-l)/var(--leading-l) var(--font-sans);
  height: 40px; padding: 0 var(--space-m);
  border-radius: var(--radius-sm); border: 1px solid transparent;
  white-space: nowrap; cursor: pointer;
  transition: transform var(--dur-micro-fast) var(--ease-expo),
              background-color var(--dur-micro) var(--ease-standard),
              border-color var(--dur-micro) var(--ease-standard),
              color var(--dur-micro) var(--ease-standard),
              box-shadow var(--dur-micro) var(--ease-standard);
}
.btn--s { height: 20px; padding: 0 var(--space-s); font-size: var(--text-s); line-height: var(--leading-s); }
.btn--l { height: 60px; padding: 0 var(--space-l); font-size: var(--text-2xl); line-height: var(--leading-2xl); }

.btn:active { transform: translateY(1px) scale(0.985); }
.btn:focus-visible { outline: 2px solid var(--brand-400); outline-offset: 2px; }

/* Primary */
.btn--primary         { background: var(--btn-color); color: var(--neutral-white); }
.btn--primary:hover   { background: var(--btn-color-hover); }
.btn--primary:active  { background: var(--btn-color-pressed); }

/* Secondary */
.btn--secondary        { background: transparent; color: var(--btn-color); border-color: var(--btn-color); }
.btn--secondary:hover  { background: rgba(3, 125, 232, 0.07); } /* Brand/500 al 7 % */

/* Tertiary */
.btn--tertiary         { background: transparent; color: var(--btn-color); padding-inline: var(--space-xxs); }
.btn--tertiary:hover   { text-decoration: underline; }

/* Type: define el color base que consumen los Styles */
.btn               { --btn-color: var(--brand-500); --btn-color-hover: var(--brand-600); --btn-color-pressed: var(--brand-700); }
.btn--positive     { --btn-color: var(--text-positive); }
.btn--warning      { --btn-color: var(--text-warning); }
.btn--negative     { --btn-color: var(--text-negative); }
.btn--positive, .btn--warning, .btn--negative {
  --btn-color-hover: var(--btn-color); --btn-color-pressed: var(--btn-color);
}
.btn--positive:hover, .btn--warning:hover, .btn--negative:hover { filter: brightness(0.92); }

/* Loading */
.btn[aria-busy="true"] { opacity: 0.7; pointer-events: none; }

/* Disabled — igual para todos los Types */
.btn:disabled {
  background: var(--neutral-300); border-color: var(--neutral-300);
  color: var(--neutral-600); cursor: not-allowed; transform: none;
}
.btn--tertiary:disabled { background: transparent; border-color: transparent; }

/* Button_Icon */
.btn--icon       { width: 40px; padding: 0; }
.btn--icon.btn--s { width: 20px; }
.btn--icon.btn--l { width: 60px; }
```

```html
<button class="btn btn--primary">Guardar cambios</button>
<button class="btn btn--secondary">Cancelar</button>
<button class="btn btn--primary btn--negative">Eliminar perfil</button>
<button class="btn btn--primary" aria-busy="true">Cargando…</button>
<button class="btn btn--tertiary btn--icon" aria-label="Cerrar"><svg aria-hidden="true">…</svg></button>
```

> Para los Types semánticos, los estados Hover/Pressed no tienen tokens propios en Figma. Hasta que existan,
> usar el mismo color base y marcar el hover con `filter: brightness(0.92)` en lugar de inventar un hex.

## 2.5 Accesibilidad

- **Contraste**: Primary (`#037de8` sobre blanco) y los rellenos semánticos cumplen WCAG AA con texto blanco.
  Re‑verificar si cambia algún token.
- **Teclado**: alcanzable con Tab y activable con Enter/Espacio. Foco siempre visible (`:focus-visible`).
- **Lector de pantalla**: usar `<button>` nativo (o `role="button"`). `Button_Icon` con `aria-label`.
- **Loading**: marcar con `aria-busy="true"` y evitar doble envío.
- **Deshabilitado**: usar el atributo `disabled` (sale del orden de tabulación) y explicar el motivo con
  texto de ayuda cercano si no es obvio.

### Área táctil

El tamaño S (20px) está por debajo del mínimo recomendado de 44×44px. Reglas:

- En pantallas táctiles o móviles usar **M o L**.
- Si S es inevitable, ampliar el área de toque sin cambiar el aspecto:

```css
.btn--s { position: relative; }
.btn--s::after { content: ''; position: absolute; inset: -12px; }
```

## 2.6 Do / Don't

**Do**
- Un solo Primary por pantalla o sección lógica.
- Type acorde a la consecuencia real; Negative siempre con confirmación.
- Labels cortos que empiecen con verbo: "Guardar cambios", no "Haz clic aquí para guardar tus cambios".
- Un solo Size por superficie (no mezclar S y L en la misma fila).

**Don't**
- Varios Primary en la misma sección.
- Warning o Negative para acciones neutras "para llamar la atención".
- Confiar solo en el estado Disabled para explicar por qué algo no está disponible.
- Sobrescribir padding, radio o tamaño de fuente en una instancia: si ningún Size encaja, es un hueco del
  sistema y se reporta.
- Usar Tertiary para la acción principal de la página.
