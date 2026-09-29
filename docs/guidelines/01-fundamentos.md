# 1. Fundamentos

Todos los valores están en [`tokens.css`](./tokens.css) como variables CSS y como clases de Tailwind
(`bg-pg-navy`, `text-pg-slate`, etc.). Entre paréntesis, el número de veces que aparece hoy cada valor en el
prototipo.

## 1.1 Paleta

### Marca

| Token | Hex | Tailwind | Uso |
|-------|-----|----------|-----|
| Navy | `#1c3243` | `pg-navy` | Títulos, texto principal, barra de navegación, fondos oscuros, badges (240) |
| Navy hover | `#284054` | `pg-navy-hover` | Hover de elementos navy |
| Slate | `#435766` | `pg-slate` | Cuerpo de texto, descripciones (91) |
| Teal | `#59797d` | `pg-teal` | **Color de acción**: botones Primary, links, iconos activos, ring de selección (201) |
| Teal dark | `#406064` | `pg-teal-dark` | Hover/pressed de acciones teal; texto de acento pequeño sobre crema (33) |
| Sage | `#90b3b6` | `pg-sage` | Acento decorativo: bloques de color en cards, iconos grandes, bordes en hover (138) |
| Mist | `#acbcbe` | `pg-mist` | Solo elementos decorativos (separadores de puntos, iconos inactivos grandes). **No para texto** (52) |

### Superficies y bordes

| Token | Hex | Tailwind | Uso |
|-------|-----|----------|-----|
| Cream | `#f9f4f1` | `pg-cream` | Fondo de página por defecto (95) |
| Cream dark | `#f0edeb` | `pg-cream-dark` | Divisores y bloques alternos sobre crema |
| White | `#ffffff` | `white` | Cards, paneles, inputs |
| Tint | `#eaf1f1` | `pg-tint` | Superficies suaves: chips, bloques destacados, estado seleccionado |
| Tint soft | `#f0f6f6` | `pg-tint-soft` | Hover de filas y cards sobre blanco |
| Line | `#dee8e9` | `pg-line` | Bordes de cards, inputs y divisores (88) |

### Estados (propuesta)

El prototipo aún no tiene colores de estado definidos. Estos valores **son una propuesta** que cumple WCAG AA
sobre blanco y crema; conviene validarlos en Figma antes de usarlos de forma general.

| Estado | Texto / icono | Fondo suave | Contraste del texto |
|--------|---------------|-------------|---------------------|
| Éxito | `#2f7a5f` `pg-success` | `#e6f2ec` `pg-success-soft` | 5.2:1 blanco · 4.7:1 crema |
| Aviso | `#8a5a1c` `pg-warning` | `#f7eddc` `pg-warning-soft` | 5.9:1 blanco · 5.4:1 crema |
| Error | `#b42318` `pg-error` | `#fdecea` `pg-error-soft` | 6.6:1 blanco · 6.0:1 crema |

El verde `#52bd95` (punto "en vivo") y el ámbar `#c8893a` (lecciones) que ya existen pueden quedarse como
**rellenos decorativos**, pero no como texto: 2.3:1 y 3.0:1.

### Combinaciones de contraste aprobadas

| Texto | Fondo | Ratio | Permitido para |
|-------|-------|-------|----------------|
| Navy | White / Cream / Tint / Line | 10.6–13.2 | Todo |
| Slate | White / Cream / Tint | 6.6–7.5 | Todo |
| Teal | White | 4.7 | Todo |
| Teal | Cream / Tint | 4.1–4.3 | **Solo texto ≥ 18px o ≥ 14px bold**; para texto pequeño usar Teal dark |
| Teal dark | White / Cream / Tint | 6.0–6.8 | Todo |
| White | Teal | 4.7 | Botones y badges |
| White | Teal dark / Navy | 6.8 / 13.2 | Todo |
| Navy | Sage | 5.9 | Texto sobre bloques salvia |
| Sage | Navy | 5.9 | Acentos sobre fondos oscuros |
| ~~Sage / Mist~~ | ~~White / Cream~~ | 2.0–2.3 | **Nunca como texto** |
| ~~White~~ | ~~Sage~~ | 2.3 | **Nunca** |

## 1.2 Tipografía

**Poppins** es la única familia (400, 500, 600 y 700). Hoy se repite `font-['Poppins',sans-serif]` en cada
elemento (487 veces). Con `tokens.css` se define una vez en el `body` y basta con la clase `font-sans`.

### Escala

| Token | Móvil → desktop | Peso | Line‑height | Uso |
|-------|-----------------|------|-------------|-----|
| `display` | 38 → 50px | 700 | 1.08 · tracking −0.02em | Titular principal de la home (uno por página) |
| `h1` | 28 → 40px | 500 | 1.15 | Título de página, heros de sección con fondo de color |
| `h2` | 24px | 700 | 1.25 | Título de sección |
| `h3` | 20px | 700 | 1.3 | Subsección, título de panel o modal |
| `h4` | 16px | 700 | 1.4 | Título de card |
| `body-lg` | 16px | 400 | 1.625 | Introducciones, párrafos destacados |
| `body` | 14px | 400 | 1.6 | **Texto por defecto** de la interfaz |
| `small` | 12px | 400/500 | 1.5 | Metadatos, captions, ayudas de campo |
| `eyebrow` | 11px | 600 | 1.4 · MAYÚSCULAS · tracking 0.12em | Kicker sobre títulos de sección |

Reglas:
- **Mínimo 12px** para cualquier texto, con la única excepción de `eyebrow` (11px en mayúsculas). Hoy hay
  51 usos de 9–10px que conviene subir a 12px.
- Énfasis de marca en titulares: una palabra en *itálica* (como "Discover *Resources* That Can Help"), sin
  cambiar de color.
- Máximo ~70 caracteres por línea en párrafos largos (`max-w-[680px]`).

## 1.3 Espaciado

Se usa la escala de 4px de Tailwind. Pasos permitidos:

| Tailwind | px | Uso típico |
|----------|----|-----------|
| `1` / `1.5` | 4 / 6 | Icono ↔ texto pequeño |
| `2` | 8 | Gap entre elementos inline, icono ↔ label |
| `3` | 12 | Gap en listas compactas |
| `4` | 16 | Padding de card, gap entre campos |
| `5` / `6` | 20 / 24 | Padding de panel, gap de grids |
| `8` | 32 | Separación entre bloques |
| `10` / `14` | 40 / 56 | Gutter lateral de página (md / lg) |
| `14` / `16` / `20` | 56 / 64 / 80 | Padding vertical de sección |

Evitar valores intermedios sueltos (`py-3.5`, `px-2.5`) salvo en ajustes ópticos de componentes.

## 1.4 Radios

| Token | Valor | Tailwind | Uso |
|-------|-------|----------|-----|
| `sm` | 4px | `rounded-pg-sm` | Checkboxes, elementos mínimos |
| `md` | 8px | `rounded-pg-md` | **Botones**, inputs, selects (el más usado en botones) |
| `lg` | 12px | `rounded-pg-lg` | Paneles pequeños, dropdowns, tooltips |
| `xl` | 16px | `rounded-pg-xl` | **Cards** (UnifiedCard), modales |
| `2xl` | 28px | `rounded-pg-2xl` | Bloques hero y secciones destacadas con fondo |
| `full` | 9999px | `rounded-full` | Chips, badges, avatares, puntos, buscador |

Nota: en el tema shadcn actual `rounded-lg` son 10px y `rounded-xl` 14px, así que la misma clase no da el
mismo radio que en Tailwind estándar. Usa los tokens `rounded-pg-*` para evitar ambigüedad.

## 1.5 Sombras

Todas las sombras están **teñidas de navy** (`rgba(28,50,67,…)`), nunca en negro puro.

| Token | Valor | Uso |
|-------|-------|-----|
| `card` | `0 8px 24px rgba(28,50,67,0.06)` | Cards en reposo |
| `card-hover` | `0 8px 24px rgba(28,50,67,0.14)` | Cards interactivas en hover |
| `overlay` | `0 24px 60px rgba(28,50,67,0.28)` | Modales, drawers, menús flotantes |

Las cards llevan **borde `pg-line` + sombra `card`**. No se apilan sombras más fuertes para "destacar"; para
eso se usa el color de fondo (tint, sage o navy).
