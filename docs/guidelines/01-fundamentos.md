# 1. Fundamentos

Tipografía, color, espaciado, radios y elevación. Todos los valores existen como variables en
[`tokens.css`](./tokens.css); en código se usa siempre la variable, nunca el valor literal.

## 1.1 Tipografía

**Inter** es la única familia. Fallback: `system-ui, -apple-system, sans-serif`.

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,600;0,14..32,700;1,14..32,400&display=swap');
font-family: var(--font-sans);
```

### Escala (tokens de Figma)

Todo texto de Parent Guidance se ajusta a una fila de esta tabla. No hay tamaños *display* ni `clamp()`
de marketing.

| Token | Tamaño | Line‑height | Uso sugerido en producto |
|-------|--------|-------------|--------------------------|
| XS  | 10px | 14px | Micro‑labels en mayúsculas, metadatos |
| S   | 12px | 16px | Captions, ayudas de campo, texto de tablas densas, botón S |
| M   | 14px | 20px | Texto de interfaz por defecto, labels de formulario |
| L   | 16px | 24px | Cuerpo de lectura, botón M |
| XL  | 18px | 26px | Subtítulos, títulos de card |
| 2XL | 20px | 28px | Títulos de panel / modal, botón L |
| 3XL | 24px | 32px | Título de sección dentro de una página |
| 4XL | 28px | 36px | Título de página |
| 5XL | 32px | 40px | Título principal / pantallas de bienvenida (máximo permitido) |

### Pesos

| Token | Valor | Uso |
|-------|-------|-----|
| Light | 300 | Números grandes decorativos (con moderación) |
| Regular | 400 | Cuerpo de texto |
| Semi Bold | 600 | Labels, botones, micro‑labels |
| Bold | 700 | Títulos |

No se usan 800/900: son exclusivos de los titulares de marketing de Scalar.

### Tracking

El token de letter‑spacing es `0`. La única excepción son los **micro‑labels en mayúsculas**
(XS, Semi Bold, `letter-spacing: 0.1em`–`0.18em`). Para cifras en tablas o KPIs usar
`font-variant-numeric: tabular-nums`.

## 1.2 Color

Todos los colores vienen de la colección de variables de Figma. **Nunca se inventa un hex nuevo.**

### Neutrales (texto, superficies, bordes)

| Token | Hex | Variable | Uso |
|-------|-----|----------|-----|
| Neutral/900 | `#0f172a` | `--neutral-900` / `--text-primary` | Texto principal, fondos oscuros |
| Neutral/800 | `#1e293b` | `--neutral-800` / `--text-secondary` | Texto secundario, divisor fuerte |
| Neutral/700 | `#334155` | `--neutral-700` | Captions tenues sobre fondo oscuro |
| Neutral/600 | `#475569` | `--neutral-600` / `--text-tertiary` | Cuerpo de texto, label de botón deshabilitado |
| Neutral/500 | `#64748b` | `--neutral-500` | Labels atenuados |
| Neutral/400 | `#94a3b8` | `--neutral-400` / `--text-muted` | Placeholder, baja énfasis |
| Neutral/300 | `#cbd5e1` | `--neutral-300` | Fondo deshabilitado, base de bordes hairline |
| Neutral/200 | `#e3e8f0` | `--neutral-200` | Divisores de sección |
| Neutral/100 | `#f1f5f9` | `--neutral-100` | Superficie de hover |
| Neutral/50  | `#f8fafc` | `--neutral-50`  | Fondo de card/panel sobre blanco |
| Neutral/White | `#ffffff` | `--neutral-white` | Fondo base, relleno de card |
| Neutral/Black | `#000000` | — | Reservado. **No usar para texto**; usar Neutral/900 |

### Brand (acción principal y acento)

| Token | Hex | Variable | Uso |
|-------|-----|----------|-----|
| Brand/200 | `#9acbf6` | `--brand-200` | Tintes suaves |
| Brand/300 | `#68b1f1` | `--brand-300` | Acento suave sobre fondo oscuro |
| Brand/400 | `#3597ed` | `--brand-400` | Anillo de foco, acento de estado Selected |
| Brand/500 | `#037de8` | `--brand-500` / `--brand` | CTA principal, links, elementos interactivos |
| Brand/600 | `#0268c1` | `--brand-600` | Hover de botón |
| Brand/700 | `#02539a` | `--brand-700` | Pressed / Selected de botón |
| Brand/800 | `#013e73` | `--brand-800` | Reservado |
| Brand/900 | `#01294c` | `--brand-900` | Reservado |
| Text/Link | `#2a3ef4` | `--text-link` | Solo si se necesita un link distinto del color brand |

### Semánticos

Separar siempre el color de **relleno** del color de **texto/icono**: los rellenos son más claros y no
alcanzan contraste suficiente como texto sobre blanco.

| Estado | Relleno | Texto / icono |
|--------|---------|---------------|
| Positivo | `--bg-positive` `#00b04f` | `--text-positive` `#00b04f` |
| Advertencia | `--bg-warning` `#ffbb33` | `--text-warning` `#cc8800` |
| Negativo | `--bg-negative` `#ff2f3d` | `--text-negative` `#cb0000` |

El color nunca es el único portador del significado: acompáñalo de icono y/o texto.

### Acentos de datos (solo visualización)

`#08c581` teal · `#6e2fff` púrpura · `#2a3ef4` índigo · `#009c1c` verde · `#ffaa00` ámbar ·
`#ff7700` naranja · `#fb0000` rojo.

Úsalos **solo** en gráficos, series o etiquetas de categoría. Nunca en botones, navegación, fondos o bordes
de la interfaz.

### Bordes

```css
--rule:       rgba(203, 213, 225, 0.6); /* Neutral/300 al 60 % — divisor hairline */
--rule-heavy: #1e293b;                   /* Neutral/800 — divisor fuerte */
```

Las transparencias se construyen siempre como `token + opacidad`, nunca como un `rgb()` inventado.

## 1.3 Espaciado

### Escala numérica (px)

`2 · 4 · 8 · 10 · 12 · 14 · 16 · 18 · 20 · 24 · 26 · 28 · 32 · 36 · 40 · 48 · 56 · 64 · 72 · 80`

(La escala de Figma continúa hasta 120, pero los valores de 88 en adelante son para paddings de marketing;
en Parent Guidance no deberían hacer falta.)

### Alias semánticos

| Token | Valor | Uso típico |
|-------|-------|-----------|
| XXS | 2px | Ajustes ópticos, separación icono‑badge |
| S | 8px | Gap entre icono y texto, entre elementos inline |
| M | 16px | Padding de componentes, gap entre campos |
| L | 24px | Padding de card/panel, gap entre grupos |
| XL | 32px | Separación entre bloques de una página |

Prefiere los alias; recurre a la escala numérica solo cuando ningún alias encaja.

## 1.4 Radios

Figma aún no tiene tokens de radio para esto; estas son las convenciones de facto.

| Radio | Variable | Uso |
|-------|----------|-----|
| 2px | `--radius-xs` | Esquinas del outline de foco |
| 4px | `--radius-sm` | Botones |
| 8px | `--radius-md` | Chips, inputs |
| 12px | `--radius-lg` | Cards, paneles, modales |
| 999px | `--radius-pill` | Badges tipo píldora, avatares, puntos |

Los radios de 21px/28px del bento de marketing no se usan.

## 1.5 Elevación

Por defecto, **los cards no llevan sombra**: se definen con borde hairline (ver [Layout](./03-layout.md#divisores-hairline)).
La sombra se reserva para elementos que realmente flotan sobre la página.

| Variable | Valor | Uso |
|----------|-------|-----|
| `--shadow-sm` | `0 4px 12px rgba(15,23,42,0.07)` | Dropdowns, popovers, tooltips |
| `--shadow-md` | `0 8px 32px -8px rgba(0,0,0,0.3)` | Modales, drawers |
| `--glow-md` | `0 6px 18px rgba(3,125,232,0.32)` | Hover del botón Primary (opcional, sutil) |
| `--glow-focus` | `0 0 0 3px rgba(3,125,232,0.18)` | Halo de foco en inputs |

Las sombras solo se construyen con Neutral/900, negro o Brand/500 a baja opacidad. Nunca con otros colores.

## 1.6 Do / Don't

**Do**
- Usar las variables de `tokens.css` para todo color, tamaño y espaciado.
- Ajustar cualquier texto nuevo a la fila más cercana de la escala XS–5XL.
- Preferir bordes hairline a sombras para separar contenido.

**Don't**
- Escribir un hex nuevo, aunque "se parezca" al azul de marca.
- Introducir una segunda tipografía o pesos 800/900.
- Usar acentos de datos o colores semánticos como decoración.
- Usar negro puro (`#000`) para texto.
