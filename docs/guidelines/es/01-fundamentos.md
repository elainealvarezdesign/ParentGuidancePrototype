# 1. Fundamentos

Todos los valores están en [`tokens.css`](../../../src/styles/tokens.css) como variables CSS (`--pg-navy`) y como
clases de Tailwind (`bg-pg-navy`, `text-pg-slate`…). En estilos inline o en props de `motion` se usa la
variable: `style={{ boxShadow: "var(--pg-shadow-card)" }}`, `animate={{ backgroundColor: "var(--pg-teal)" }}`.

## 1.1 Paleta

### Marca

| Token | Hex | Tailwind | Uso |
|-------|-----|----------|-----|
| Navy | `#1c3243` | `pg-navy` | Títulos, texto principal, navegación, fondos oscuros, chip activo |
| Navy hover | `#284054` | `pg-navy-hover` | Hover de elementos navy |
| Slate | `#435766` | `pg-slate` | Cuerpo de texto, descripciones, iconos de interfaz |
| Teal | `#59797d` | `pg-teal` | **Color de acción**: botones Primary, links, iconos activos, ring de selección |
| Teal dark | `#406064` | `pg-teal-dark` | Hover/pressed de acciones teal; texto de acento pequeño (eyebrows, links, metadatos) |
| Sage | `#90b3b6` | `pg-sage` | Acento decorativo: bloques de color, barra lateral de títulos de sección, iconos grandes, lupas |
| Mist | `#acbcbe` | `pg-mist` | Solo elementos decorativos (separadores "•" con `aria-hidden`, puntos inactivos). **Nunca texto** |
| Amber | `#c8893a` | `pg-amber` | Acento de lecciones; solo relleno decorativo |
| Live | `#52bd95` | `pg-live` | Punto "en vivo"; solo decorativo |

### Superficies y bordes

| Token | Hex | Tailwind | Uso |
|-------|-----|----------|-----|
| Cream | `#f9f4f1` | `pg-cream` | Fondo de página por defecto; campos de búsqueda en barras blancas |
| Cream dark | `#f0edeb` | `pg-cream-dark` | Chips inactivos, botón "Featured", divisores sobre crema |
| White | `#ffffff` | `white` | Cards, paneles, barras de filtros, inputs |
| Tint | `#eaf1f1` | `pg-tint` | Superficies suaves: badges, bloques de fecha, estado seleccionado |
| Tint soft | `#f0f6f6` | `pg-tint-soft` | Fondo de secciones de listado; hover de filas |
| Line | `#dee8e9` | `pg-line` | Bordes de cards, inputs y divisores |

En Figma, estos tokens tienen su variable en *Semantic: Color Roles*: `pg-cream-dark` → **Background/Chip**,
`pg-tint` → **Background/Tint**, `pg-tint-soft` → **Background/Tint Soft**, `pg-navy-hover` → **Background/Inverse
Hover** y `pg-amber` → **Accent Colors/Amber** (cada una apunta a su primitiva en *Primitive Colors*).

### Estados

En uso en badges, avisos y validaciones. Cumplen AA sobre blanco y crema.

| Estado | Texto / icono | Fondo suave | Dónde se usa |
|--------|---------------|-------------|--------------|
| Éxito | `#117a3a` `pg-success` | `#d3f7df` `pg-success-soft` | Badge "Guide" (con texto navy) |
| Aviso | `#a84b02` `pg-warning` | `#feeab1` `pg-warning-soft` | Badge "Worksheet", aviso legal de Ask a Therapist |
| Error | `#932f2f` `pg-error` | `#fdcfcf` `pg-error-soft` | Badge "Tool", errores de formulario |

Son los mismos valores que las variables de Figma *Success / Warning / Error Colors → Contrast* (texto) y *→ Soft*
(fondo). Cada color de texto sobre su fondo suave cumple AA (4.69:1 éxito, 4.8:1 aviso, 5.58:1 error); en el badge
"Guide" se mantiene el texto navy y el verde para el icono.

### Combinaciones de contraste aprobadas

| Texto | Fondo | Ratio | Permitido para |
|-------|-------|-------|----------------|
| Navy | White / Cream / Tint / Line / Sage | 5.9–13.2 | Todo |
| Slate | White / Cream / Tint | 6.6–7.5 | Todo |
| Teal | White | 4.7 | Todo |
| Teal | Cream / Tint | 4.1–4.3 | **Solo texto ≥ 18px o ≥ 14px bold**; para texto pequeño usar Teal dark |
| Teal dark | White / Cream / Tint | 6.0–6.8 | Todo |
| White | Teal / Teal dark / Navy | 4.7 / 6.8 / 13.2 | Todo (botones, badges, bloques oscuros) |
| Sage | Navy | 5.9 | Texto secundario y acentos sobre fondos oscuros |
| ~~Sage / Mist~~ | ~~White / Cream~~ | 2.0–2.3 | **Nunca como texto** |
| ~~White~~ | ~~Sage~~ | 2.3 | **Nunca**: sobre sage, el texto y los badges van en navy |

### Bloques destacados

Un banner o CTA **dentro** de una sección tiene que distinguirse de su fondo: `pg-sage` (texto navy, botón
Inverse), `pg-navy` (texto blanco o sage, botón Inverse) o card blanca con borde `pg-line` y sombra `card`.
Nunca `pg-tint` sobre `pg-tint-soft` ni `pg-cream-dark` sobre `pg-cream` (1.04:1, el bloque desaparece).

## 1.2 Tipografía

**Poppins** es la única familia (400, 500, 600 y 700). Se aplica una sola vez en el `body` (`tokens.css`) y la
heredan todos los elementos, incluidos botones e inputs: **no se añaden clases de fuente**. Tampoco
`font-black` ni `font-light`: Poppins solo se carga en 400–700.

### Escala

| Token | Móvil → desktop | Tailwind | Peso | Uso |
|-------|-----------------|----------|------|-----|
| `display` | 38 → 50px | `text-[38px] md:text-[50px]` | 700 | Titular principal de **las homes** (uno por página) |
| `h1` | 28 → 40px | `text-[28px] md:text-[40px]` | 700 (500 en V2) | Título de página; títulos de secciones destacadas con fondo de color ("Need Help Now?", "Join Us!") |
| `h2` | 24px | `text-2xl` | 700 | Título de sección, banners |
| `h3` | 20px | `text-xl` | 600–700 | Títulos de bloque y de panel, etiquetas de sección con barra sage ("Resource Library"), preguntas de FAQ |
| `h4` | 16px | `text-base` | 700 | Título de card |
| `body-lg` | 16px | `text-base` | 400 | Introducciones y párrafos destacados |
| `body` | 14px | `text-sm` | 400 | **Texto por defecto**, botones, inputs |
| `small` | 12px | `text-xs` | 400–600 | Metadatos, captions, chips, ayudas de campo |
| `eyebrow` | 11px | `text-[11px] uppercase` | 600 | Kicker sobre títulos, etiquetas de fecha ("JUL") |

Reglas:
- **Mínimo 12px**; los 11px solo para texto en MAYÚSCULAS (eyebrows, meses de los bloques de fecha).
- En Figma, los textos en mayúsculas usan **Label/XSmall - Bold Caps** (11px, 15% de tracking) o **Label/Small -
  SemiBold Caps** (12px, 10%), y las citas **Body/Medium - Italic**. Ningún texto de componente queda sin estilo.
- En código, el tracking de las mayúsculas sale de dos tokens: `tracking-pg-caps` (0.15em, textos de 11px) y
  `tracking-pg-eyebrow` (0.1em, 12px o más). No se usan valores sueltos (`tracking-[1.2px]`, `tracking-wider`…).
- Fuera de la escala no hay tamaños intermedios (13, 15, 18, 22, 30, 36px…): se usa el paso más cercano.
- Énfasis de marca en titulares: una palabra o frase en *itálica* teal ("Discover *Resources*…"), sin cambiar
  el tamaño.
- Máximo ~70 caracteres por línea en párrafos largos (`max-w-pg-reading`, 680px).

## 1.3 Espaciado

Se usa la escala de 4px de Tailwind. Pasos permitidos:

| Tailwind | px | Uso típico |
|----------|----|-----------|
| `1` / `1.5` | 4 / 6 | Icono ↔ texto pequeño |
| `2` | 8 | Gap entre elementos inline, icono ↔ label, entre chips |
| `3` | 12 | Gap en listas compactas y barras de filtros |
| `4` | 16 | Padding de card, gap entre campos |
| `5` / `6` | 20 / 24 | Padding de panel, gap de grids, gutter móvil |
| `8` | 32 | Separación entre bloques |
| `10` / `14` | 40 / 56 | Gutter lateral de página (md / lg) |
| `14` / `16` / `20` | 56 / 64 / 80 | Padding vertical de sección |

Usar solo valores de la Spacing Scale (2, 4, 8, 12, 16, 20, 24, 32…). Nada de medios pasos (`1.5`, `2.5`, `3.5`): no tienen token en Figma.

## 1.4 Radios

| Token | Valor | Tailwind | Uso |
|-------|-------|----------|-----|
| `sm` | 4px | `rounded-pg-sm` | Checkboxes, elementos mínimos |
| `md` | 8px | `rounded-pg-md` | **Botones**, inputs, selects, botón "Featured" |
| `lg` | 12px | `rounded-pg-lg` | Paneles pequeños, menús desplegables, bloques de fecha |
| `xl` | 16px | `rounded-pg-xl` | **Cards**, pop-ups, banners |
| `2xl` | 28px | `rounded-pg-2xl` | Heros, video destacado, bloques de sección con fondo |
| `full` | 9999px | `rounded-full` | Chips, badges, avatares, puntos, barras de búsqueda en píldora |

En el tema shadcn `rounded-lg` son 10px y `rounded-xl` 14px; por eso se usan siempre los tokens `rounded-pg-*`.

## 1.5 Sombras

Todas las sombras están **teñidas de navy** (`rgba(28,50,67,…)`), nunca en negro.

| Token | Valor | Uso |
|-------|-------|-----|
| `card` | `0 8px 24px rgba(28,50,67,0.06)` | Cards, barras de filtros, controles seleccionados |
| `card-hover` | `0 8px 24px rgba(28,50,67,0.14)` | Cards interactivas en hover; navbar al hacer scroll |
| `overlay` | `0 24px 60px rgba(28,50,67,0.28)` | Pop-ups, modales, menús flotantes |

Las cards llevan **borde `pg-line` + sombra `card`**. Para destacar algo no se apilan sombras más fuertes: se usa
el color de fondo (tint, sage o navy).

## 1.6 Iconos

- Librería: **Material Icons, estilo Outlined** (`@mui/icons-material`). No se mezclan otros estilos (Filled,
  Rounded, Sharp) ni otras librerías.
- Siempre se importan desde [`src/components/ui/icons.tsx`](../../../src/components/ui/icons.tsx), nunca directo de
  `@mui/icons-material`: `import { Search } from "./components/icons"`. Si falta un icono, se añade ahí con su
  versión `…Outlined`.
- Tamaño con `size` en px: 14–16px en controles y 18–20px en botones de solo icono
  (`<Search size={16} aria-hidden="true" />`).
- Color con `currentColor` y una clase de texto (`text-pg-slate`, `text-pg-sage`…), nunca un hex en el SVG.
- Iconos decorativos con `aria-hidden="true"`; botones de solo icono con `aria-label`.
- Excepción: los SVG de logos (Parent Guidance, partners, redes sociales) conservan sus colores de marca.
