# 3. Layout

## 3.1 Contenedores

| Token | Ancho | Tailwind | Uso |
|-------|-------|----------|-----|
| `page` | 1280px | `max-w-pg-page` | Contenedor por defecto: navegación, secciones, barras de filtros, grids de cards, Mental Health Series |
| `content` | 1100px | `max-w-pg-content` | Páginas de tema y de evento, banners centrados |
| `reading` | 680px | `max-w-pg-reading` | Texto largo: legales, artículos, formularios de una columna |

Los textos de hero pueden limitar su ancho de lectura con `max-w-[480px]` o similar; no son contenedores.

### Márgenes laterales (gutter)

```tsx
<section className="px-6 md:px-10 lg:px-14">
  <div className="max-w-pg-page mx-auto">…</div>
</section>
```

- Móvil: 24px · Tablet (≥ 768): 40px · Desktop (≥ 1024): 56px.
- El fondo de la sección llega de borde a borde; el contenido se centra dentro.
- Si una sección tiene pocos elementos (p. ej. imagen + newsletter), el grupo se **centra** dentro del
  contenedor (`lg:justify-center`), no se queda pegado a la izquierda.

## 3.2 Breakpoints

Se usan los de Tailwind. La regla práctica: **móvil y tablet apilan; desde `lg` se ponen en columnas**.

| Prefijo | Desde | Qué cambia |
|---------|-------|-----------|
| (base) | 0 | Una columna, gutter 24px, títulos en tamaño móvil, menú ☰ |
| `sm` | 640px | Grids de cards a 2 columnas; botones de fila junto al contenido |
| `md` | 768px | Títulos en tamaño desktop, gutter 40px, barras de filtros en una sola fila |
| `lg` | 1024px | **Navegación completa**, heros de 2 columnas, columna lateral en detalle y lecciones, footer en filas, grids de 3–4 columnas |
| `xl` | 1280px | Ajustes finos (3 columnas de preguntas en Ask a Therapist); el contenedor ya está en su máximo |

**Degradación por etapas**: 4 → 2 → 1 o 3 → 2 → 1 columnas, nunca de 4 a 1 de golpe.

Todo lo que tenga un ancho fijo grande (barras laterales de 248–300px, imágenes de 420–480px) se aplica solo
desde `lg` (`w-full lg:w-[300px]`). Así no aparece scroll lateral en tablet.

## 3.3 Ritmo vertical

| Contexto | Móvil → desktop | Tailwind |
|----------|-----------------|----------|
| Sección estándar | 56 → 80px | `py-14 md:py-20` |
| Sección compacta (listados, filtros) | 40 → 56px | `py-10 md:py-14` |
| Hero de página | 96px arriba (navbar fija de 56px) | `pt-24 pb-14` |
| Título de sección → contenido | 24–32px | `mb-6` / `mb-8` |
| Entre cards de un grid | 16–20px | `gap-4` / `gap-5` |
| Dentro de una card | 16–20px | `p-4` / `p-5` |

Las secciones se alternan por **color de fondo** (cream → white → tint-soft → navy) en lugar de líneas
divisorias. Para los bloques destacados dentro de una sección, ver
[Bloques destacados](./01-fundamentos.md#bloques-destacados).

## 3.4 Patrones de grid

| Patrón | Clases | Uso |
|--------|--------|-----|
| Cards de recursos | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (o `lg:grid-cols-4`) `gap-4/5` | Resource Library, homes, recursos de un tema |
| Cursos | `grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4` | On-Demand Courses |
| Preguntas con lateral | `grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5` | Ask a Therapist |
| Detalle + lateral | `flex flex-col lg:flex-row gap-6`; lateral `w-full lg:w-[280px]`–`[300px]`, `lg:sticky` | Curso, lección, pregunta |
| Texto + imagen (hero) | `grid grid-cols-1 lg:grid-cols-2 gap-10 items-center` | Heros de Coaching, Courses, Get Help |
| Beneficios / pasos | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` | Franja navy y pasos de Parent Coaching |
| Líneas de ayuda | `grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5` | Get Help |
| Tema + lateral | `grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-14` | Página de tema de Mental Health Series |

## 3.5 Patrones

### Card estándar (`UnifiedCard`)

- Fondo blanco, `rounded-pg-xl`, borde `pg-line`, sombra `card`.
- Imagen de 150px de alto arriba (`object-cover`, o `object-contain` con padding para logos).
- Con logos, la zona de la imagen es blanca (`bg-white`), igual que el resto de la card; con fotos, `bg-pg-tint-soft` solo
  se ve mientras carga la imagen.
- Contenido con `p-4`: título `h4` navy, descripción `small` slate, metadatos `small` teal dark.
- Botón Primary `w-full` anclado abajo (`mt-auto`), así todas las cards de una fila alinean su botón.
- Destino: `to` (ruta interna, `<Link>`), `href` (externo, pestaña nueva) u `onClick`.
- Badge opcional: píldora navy con texto blanco en la esquina superior izquierda.

Variante de color (home): bloque inferior en `pg-sage` con texto `pg-navy`. Hover de cards clicables: sombra
`card-hover` y, como mucho, `y: -2`. Sin escalar la card.

Mientras una sección no tenga su propio detalle, sus cards enlazan a una **página de ejemplo** (los cursos
alternan las plantillas de Milestones y Free Yourself; los recursos abren "Building Your Child's Confidence").

### Barra de filtros

Mismo patrón en On-Demand Courses, Ask a Therapist y Mental Health Series:

```tsx
<div className="bg-white border-y border-pg-line sticky top-14 z-30 shadow-pg-card">
  <div className="max-w-pg-page mx-auto px-6 md:px-10 py-3 flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-4">
    {/* buscador: relative min-w-0 flex-1 md:flex-none md:w-64; input bg-pg-cream rounded-pg-md py-2, lupa text-pg-sage */}
    {/* chips: order-last basis-full md:order-none md:basis-auto flex-1 min-w-0 overflow-x-auto gap-2 */}
    {/* "Featured": menú de orden a la derecha */}
  </div>
</div>
```

- A todo el ancho, debajo del hero, y **fija bajo la navegación** mientras se recorre el listado que filtra
  (si la página sigue con otro contenido, la barra va dentro del bloque del listado para soltarse al terminar).
- Una sola barra por listado: no se repiten buscador ni chips más abajo.
- En móvil: buscador + "Featured" arriba y los chips en su propia fila deslizable.

### Título de sección con contador

Barra sage de 4×20px + título `h3` navy + contador en píldora `bg-pg-tint text-pg-teal-dark text-xs`
("Resource Library · 9 resources", "Browse All · 15 questions").

### Newsletter

El botón va dentro de la caja del input: `flex items-center gap-2 rounded-pg-xl bg-pg-tint-soft p-2` (sobre
navy, la caja es `bg-pg-navy-hover` y el botón Inverse).

### Pop-up de evento / diálogos

[`EventModal`](../../../src/app/mhs/EventModal.tsx): card de 320px con encabezado teal, `rounded-pg-xl`,
`shadow-pg-overlay`. Junto al elemento que lo abre en desktop y tablet (fondo `pg-navy/10`), centrado en móvil (fondo
`pg-navy/30`, ancho `min(320px, 100vw − 32px)`). `role="dialog"` con
`aria-modal`, foco atrapado, se cierra con Esc, la X o un clic fuera, y devuelve el foco al cerrar.

### Páginas legales

Terms of Use, Cookies Policy y Consent Documents comparten plantilla: encabezado con eyebrow **LEGAL** (sin
barra), `h1`, intro de `max-w-pg-reading` y, debajo, los botones **Download** (Primary M, icono `file_download`)
y **Print** (Secondary M, icono `print`). El texto va en una sola card blanca (`rounded-pg-xl`, `p-7 md:p-10`)
con la fecha de vigencia en teal y secciones separadas por una línea `pg-line`.

Consent Documents agrupa los documentos en cards desplegables: punto teal, título `h4`, chevron, y Download/Print
en tamaño S a la derecha (en móvil, los botones bajan a una segunda línea). Solo un documento abierto a la vez.

### Video

Los degradados y overlays sobre video o foto usan navy (`from-pg-navy/80`, `bg-pg-navy/60`), equivalente a
*Background/Scrim* en Figma; nunca negro.


Videos de Vimeo con `iframe` en `aspect-video`, `rounded-pg-2xl` (destacado) o `rounded-pg-xl` (cards), con
`title` descriptivo, `allow="autoplay; fullscreen; picture-in-picture"` y `dnt=1` en la URL. El video de
bienvenida de Mental Health Series carga el reproductor directamente; los de las páginas de tema muestran una
miniatura y cargan el reproductor al hacer clic.

## 3.6 Navegación

- Navbar navy fija de 56px (`h-14`); el logo enlaza siempre al Home.
- Desde `lg`, enlaces completos; por debajo, botón ☰ que abre el menú (se cierra con Esc, al tocar fuera o al
  navegar) y devuelve el foco.
- Cada página nueva abre arriba (`ScrollRestoration`); atrás/adelante recupera la posición.

## 3.7 Componentes en Figma

La librería de Figma ([Design system - PG](https://www.figma.com/design/mWOJYdAxkKGj0bWSO2ptGj/Design-system---PG))
refleja el prototipo. Cada patrón de esta guía tiene su componente; al diseñar una pantalla nueva, se parte de
ellos en vez de dibujar a mano.

| Componente | Página de Figma | Equivale a |
|------------|-----------------|------------|
| Button (Primary, Secondary, Tertiary, Inverse, Inverse Secondary × S/M/L) | Buttons | `<Button>` (capítulo 2) |
| Filter Bar (Desktop/Mobile), Search Field, Sort Menu, Filter Chip | Inputs & Nav | Barra de filtros (3.5) |
| Section Header (título + contador), Section Eyebrow (con o sin barra) | Content Blocks | Título de sección con contador |
| Photo CTA Banner, Split CTA Banner (Desktop/Tablet/Mobile), Promo Banner, Multi-action Banner | Content Blocks | Banners de cierre de página |
| Hero Media (Portrait/Landscape) | Content Blocks | Imagen de los heros con bloque de color |
| Outline Step, Course Mini Card, Instructor Line | Course & Media | Detalle de curso (temario, "You may also like", instructores) |
| Video Card, Session Card, Takeaway Card, Action Card, Topic Resource Card | Cards | Página de tema de Mental Health Series |
| Calendar (Desktop/Mobile), Event List Item, Event Popover | Calendar & Events | Página de eventos y pop-up |
| Icon/… (Material Outlined, incluidos `download`, `print` y `vimeo`) | Icons | `src/app/components/icons.tsx` |

Las pantallas completas están en **Layouts – Desktop / Tablet / Mobile** (1280, 768 y 375px). Si una pantalla
del prototipo cambia, se actualiza también su frame en las tres páginas.

## 3.8 Checklist para una pantalla nueva

1. Fondo `pg-cream`, contenedor `max-w-pg-page` con gutter `px-6 md:px-10 lg:px-14`.
2. Un solo `display` (solo en homes) o `h1` por página.
3. Secciones con `py-14 md:py-20`, alternando el color de fondo.
4. Grid de la tabla 3.4, con degradación por etapas; anchos fijos solo desde `lg`.
5. Cards con `UnifiedCard`; listados con la barra de filtros estándar.
6. Un Primary teal por sección; botones con `<Button>`.
7. Revisar en **390, 768, 1024 y 1280px**.
