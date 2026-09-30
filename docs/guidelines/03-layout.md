# 3. Layout

## 3.1 Contenedores

El prototipo usa varios anchos máximos (1280, 1180, 1100, 1024, 1000px…). Se consolidan en tres:

| Token | Ancho | Tailwind | Uso |
|-------|-------|----------|-----|
| `page` | 1280px | `max-w-pg-page` | Contenedor por defecto: navegación, secciones, grids de cards (36 usos) |
| `content` | 1100px | `max-w-pg-content` | Páginas de detalle con columna lateral (curso, lección, pregunta) |
| `reading` | 680px | `max-w-pg-reading` | Texto largo: legales, artículos, formularios de una columna |

### Márgenes laterales (gutter)

El patrón que más se repite es:

```tsx
<section className="px-6 md:px-10 lg:px-14">
  <div className="max-w-pg-page mx-auto">…</div>
</section>
```

- Móvil: 24px · Tablet (≥ 768): 40px · Desktop (≥ 1024): 56px.
- El fondo de la sección llega de borde a borde; el contenido se centra dentro.

## 3.2 Breakpoints

Se usan los de Tailwind. El prototipo trabaja sobre todo con `md`:

| Prefijo | Desde | Qué cambia |
|---------|-------|-----------|
| (base) | 0 | Todo en una columna, gutter 24px, títulos en tamaño móvil |
| `sm` | 640px | Grids de cards pasan a 2 columnas |
| `md` | 768px | Títulos en tamaño desktop, navegación completa, layouts de 2 columnas |
| `lg` | 1024px | Grids de 3–4 columnas, columna lateral en páginas de detalle, gutter 56px |
| `xl` | 1280px | Solo ajustes finos; el contenedor ya está en su ancho máximo |

**Degradación por etapas** (principio de Scalar): 4 → 2 → 1 o 3 → 2 → 1 columnas, nunca de 4 a 1 de golpe.

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
```

## 3.3 Ritmo vertical

| Contexto | Móvil → desktop | Tailwind |
|----------|-----------------|----------|
| Sección estándar | 56 → 80px | `py-14 md:py-20` |
| Sección compacta (listados, filtros) | 40 → 56px | `py-10 md:py-14` |
| Hero de página | 64 → 96px | `py-16 md:py-24` |
| Título de sección → contenido | 32px | `mb-8` |
| Entre cards de un grid | 20px | `gap-5` |
| Dentro de una card | 16px | `p-4`, `mt-2` entre textos |

Las secciones se alternan por **color de fondo** (cream → white → tint → navy) en lugar de líneas divisorias.

Un bloque destacado **dentro** de una sección (banner, CTA) debe distinguirse del fondo de la sección: usar
`pg-sage` (texto navy, botón Inverse), `pg-navy` (texto blanco, botón Inverse) o una card blanca con borde
`pg-line` y sombra `card`. **No** poner `pg-tint` sobre `pg-tint-soft` ni `pg-cream-dark` sobre `pg-cream`:
son casi el mismo color (1.04:1) y el bloque desaparece.

## 3.4 Patrones de grid

| Patrón | Clases | Uso |
|--------|--------|-----|
| Cards de recursos | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5` | Home, listados de series y cursos |
| Cards destacadas | `grid-cols-1 md:grid-cols-3 gap-6` | Coaching, planes, profesionales |
| Detalle + lateral | `grid-cols-1 lg:grid-cols-[1fr_320px] gap-10` | Curso, lección, pregunta |
| Texto + imagen | `grid-cols-1 md:grid-cols-2 gap-10 items-center` | Heros y secciones explicativas |
| Recursos de ayuda | `grid-cols-2 md:grid-cols-3 gap-4` | Logos de líneas de crisis en Get Help |

## 3.5 Card estándar (`UnifiedCard`)

`UnifiedCard` es el patrón de card de referencia y conviene usarlo en todas las páginas:

- Fondo blanco, `rounded-pg-xl` (16px), borde `pg-line`, sombra `card`.
- Imagen de 150px de alto arriba (`object-cover`, o `object-contain` con padding para logos).
- Contenido con `p-4`: título `h4` navy, descripción `small` slate, metadatos `small` teal dark.
- Botón Primary `w-full` anclado abajo (`mt-auto`), así todas las cards de una fila alinean su botón.
- Badge opcional: píldora navy con texto blanco en la esquina superior izquierda.

Variante de color (home): bloque inferior en `pg-sage` con texto `pg-navy` (contraste 5.9:1). El texto blanco
sobre sage no se permite.

Hover de cards clicables: sombra `card-hover` y, como mucho, `y: -2px`. Sin escalar la card.

## 3.6 Checklist para una pantalla nueva

1. Fondo de página `pg-cream`, contenedor `max-w-pg-page` con gutter `px-6 md:px-10 lg:px-14`.
2. Un solo `display` o `h1` por página.
3. Secciones con `py-14 md:py-20`, alternando el color de fondo.
4. Grid tomado de la tabla 3.4, con degradación por etapas.
5. Cards con `UnifiedCard`.
6. Un Primary teal por sección.
7. Revisar en 375px, 768px y 1280px.
