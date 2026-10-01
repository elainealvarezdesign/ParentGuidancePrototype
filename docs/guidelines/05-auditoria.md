# 5. Auditoría del prototipo

Registro de la revisión de `src/app` (sin contar `components/ui`, componentes base de shadcn) frente a estas guías:
qué se encontró, cómo se resolvió y qué queda pendiente (sección 5.7).

## 5.1 Accesibilidad (prioridad alta)

| Problema | Dónde | Solución |
|----------|-------|----------|
| ✅ ~~No hay estilos de foco visibles~~ | Todos los botones y enlaces | **Resuelto** con una regla global en `src/styles/accessibility.css` |
| ✅ ~~No se respeta reduced‑motion~~ | Toda la app | **Resuelto**: `MotionConfig` en `App.tsx`, regla CSS en `accessibility.css` y scroll sin animación en `utils/motion.ts` |
| ✅ ~~Cards de la home no alcanzables con teclado~~ | Home, V1 y V2 | **Resuelto**: las cards son enlaces y las FAQ son botones con `aria-expanded` |
| ✅ ~~Texto en sage `#90b3b6` sobre fondos claros~~ | 41 usos | **Resuelto**: pasa a teal dark `#406064`. Se mantiene sage sobre navy, donde sí cumple (5.9:1) |
| ✅ ~~Texto en mist `#acbcbe`~~ | 36 textos y 11 placeholders | **Resuelto**: texto → slate `#435766`; todos los placeholders → teal `#59797d` |
| ✅ ~~Texto de 9–11px~~ | 75 usos | **Resuelto**: todo a 12px, salvo los eyebrows en mayúsculas, que quedan en 11px |
| ✅ ~~Texto `#9aa4ac` (2.5:1)~~ | Footer de `UnifiedCard` | **Resuelto**: slate |
| ✅ ~~Teal `#59797d` pequeño sobre crema o tintes (3.9–4.3:1)~~ | 39 textos (eyebrows, chips, breadcrumbs, links) | **Resuelto**: teal dark `#406064` |
| ✅ ~~Texto blanco sobre sage (2.3:1)~~ | Números de pasos, avatares | **Resuelto**: navy sobre sage (5.9:1) |
| ✅ ~~"Learn More" sage sobre sage (1:1, invisible)~~ | Cards de la home | **Resuelto**: navy |
| ✅ ~~Botón "Next Lesson" blanco sobre ámbar (3.0:1)~~ | Lecciones | **Resuelto**: pasa a Primary teal |
| ✅ ~~Separadores "•" de bajo contraste~~ | Detalle de curso | **Resuelto**: decorativos en `pg-mist` con `aria-hidden` |
| ✅ ~~Testimonios en 3 columnas en móvil~~ | Parent Coaching | **Resuelto**: 1 columna hasta 1024px, 3 columnas en desktop |
| ✅ ~~La navegación no cabe en móvil~~ | Header | **Resuelto**: menú con botón ☰ por debajo de 1024px (se cierra con Esc, al tocar fuera o al navegar) |
| ✅ ~~Footer desborda en móvil~~ | Todas las páginas | **Resuelto**: columnas apiladas en móvil |
| ✅ ~~Home desborda en móvil~~ | Home | **Resuelto**: título que ajusta línea, cards en 2×2, filas imagen+texto y FAQ apiladas |
| ✅ ~~Scroll horizontal y layouts rotos en móvil y tablet~~ | Todas las páginas | **Resuelto**: sin scroll lateral en 390/768/1024/1280px (anchos fijos solo desde `lg`) |

## 5.2 Colores fuera de paleta ✅

**Resuelto.** Las ~1.140 clases de color con hex (90 valores distintos) usan ahora los tokens `pg-*`. Los tonos
fuera de paleta se consolidaron así:

| Antes | Ahora |
|-------|-------|
| `#1b1139`, `#2c3e50`, `#0d1b2a`, `#363049`, `#293a41`, `#1a2838`, `#172c3a` | `pg-navy` |
| `#58595b`, `#333`, `#6c777f`, `#737373` | `pg-slate` |
| `#6f9296`, `#76979a`, `#7da3a6`, `#7a9ea0`, `#6d8c94` / `#4a6b6f` | `pg-teal` / `pg-teal-dark` |
| `#97b4b5`, `#a1bfb9` | `pg-sage` |
| `#e8f1f1`, `#dceced`, `#edf5f5` | `pg-tint` |
| Grises neutros (`#f5f5f5`, `#f0f0f0`, `#fafafa`…) y `#eef3f3` | `pg-tint-soft` |
| Bordes grises (`#e8ebed`, `#dde0e0`, `#e0e0e0`…) | `pg-line` |
| Divisores cálidos (`#ebe8e5`, `#f1eeee`…) | `pg-cream-dark` |
| `#c8893a` / `#52bd95` | nuevos tokens `pg-amber` / `pg-live` (solo decorativos) |
| `#6b5c8d` / `#f0edf7` (badge "Guide") | icono `pg-success` sobre `pg-success-soft`, texto `pg-navy` |

Se dejan como hex, a propósito: los colores de los logos SVG (arte de marca), las paletas de categorías de cursos y
temas (colores de datos) y los valores dentro de props de animación (`whileHover`), que ya usan valores de la paleta.

## 5.3 Consistencia

| Tema | Estado |
|------|--------|
| ✅ Radios | 27 variantes → tokens `rounded-pg-sm/md/lg/xl/2xl` (4/8/12/16/28px) y `rounded-full` |
| ✅ Sombras | 30 recetas (clases e inline) → `shadow-pg-card`, `shadow-pg-card-hover`, `shadow-pg-overlay` |
| ✅ Contenedores | 1280/1180 → `max-w-pg-page`; 1100/1024/1000 → `max-w-pg-content`; 680 → `max-w-pg-reading` |
| ✅ Duraciones | 16 valores → 4 bandas (0.15 / 0.22 / 0.35 / 0.55 s); clases `duration-(--pg-dur-*)` en CSS |
| ✅ Tema shadcn | `tokens.css` mapea `--primary`, `--ring`, `--border`… a la paleta PG |
| ✅ Botones | ~45 botones de acción en 17 archivos → `<Button>`, `<ButtonLink>` y `<ButtonAnchor>` ([Botones](./02-botones.md)): 8px, alturas 36/44/52, sin navy ni sage, sin píldoras |
| ✅ Fuente | Se quitaron las 428 clases `font-['Poppins',sans-serif]`: Poppins se aplica una sola vez en `body` (`tokens.css`) |

## 5.4 Otros

- ✅ Se borraron de `src/imports` las capturas de parentguidance.org, las imágenes sin uso (`QB_united.png`, `ADDO.png`,
  `image.png`…), el componente de Figma Make sin usar `CreateLivePrototypeWithTransitions/index.tsx` y `pasted_text`:
  la carpeta pasó de 38 MB a 8,8 MB.
- ✅ El `<title>` y la descripción de `index.html` ya hablan de Parent Guidance.
- Hay dos versiones de la home (`HomePageV1`, `HomePageV2`) además de la principal. Pendiente decidir cuál queda (5.7).

## 5.5 Migración (completada)

1. ✅ Importar `tokens.css` (hecho, en `src/styles/`).
2. ✅ `MotionConfig reducedMotion="user"` y estilos de foco (hecho).
3. ✅ Arreglar el contraste: sage, mist y los tamaños de 9–11px (hecho).
4. ✅ Unificar los botones en un componente (hecho).
5. ✅ Reemplazar los hex sueltos por clases `pg-*` y consolidar radios, sombras, anchos y duraciones (hecho).

## 5.6 Auditoría final ✅

Revisión del código de `src/app` y de las 21 pantallas en el navegador (390, 768, 1024 y 1280px).

| Tema | Resultado |
|------|-----------|
| Colores | Sin hex en clases. Las sombras y bordes inline usan `var(--pg-shadow-*)` y `var(--pg-line)`; las sombras negras pasaron a las navy del sistema y el degradado `rgb(34,49,67)` a `pg-navy` |
| Tipografía | Todos los tamaños en la escala: 13→14, 15→16, 18→20 (títulos) o 16 (párrafos), 22→24; títulos de página y de sección destacada en h1 28/40; `display` 38/50 solo en las homes. `font-black` → `font-bold`. El texto de 11px es solo de eyebrows en mayúsculas |
| Radios y sombras | Solo tokens `rounded-pg-*` / `shadow-pg-*` (las clases de Tailwind que quedan son de `components/ui`, que no usa ninguna página) |
| Botones | Todos los de acción usan `<Button>`, `<ButtonLink>` o `<ButtonAnchor>` |
| Movimiento | Sin hovers con escala mayor de 1.02 ni springs con rebote; Get Help sin animaciones de entrada (`initial={false}`) |
| Contraste | 1.685 textos revisados; las únicas alertas son textos sobre fotos (que el análisis no puede medir) y los separadores "•", ahora `aria-hidden` |
| Responsive | Sin scroll lateral en 390/768/1024/1280. Footer y "Join Us!" pasan a filas desde 1024px |

Después se quitaron también los grises genéricos de Tailwind (`text-gray-700/400` → `pg-navy`/`pg-slate`) y los colores sueltos de iconos (`#333`, `#acbcbe`, `#C0CDD4`, `#8D6B3A`) en favor de `currentColor` o tokens.

Quedan como valores sueltos, a propósito: anchos de lectura (`max-w-[480px]`…) en textos de heros y los colores de logos SVG y de las paletas de categorías.

## 5.7 Pendientes

| Tema | Detalle | Quién |
|------|---------|-------|
| Botones sin función | "Help me choose" (Get Help), "Take the Quiz" y "Learn more" (Home V1), "Featured" (Ask a Therapist) | Diseño/desarrollo |
| Redes sociales | Faltan las URLs de Facebook, Instagram, YouTube y LinkedIn (Vimeo ya está enlazado) | Contenido |
| Contenido de ejemplo | Eventos y enlaces de registro de muestra; cursos y recursos sin página propia abren plantillas de ejemplo | Contenido |
| Textos repetidos | Tres cards de la home repiten "Dive into a wealth of knowledge tailored for parents" | Contenido |
| Homes | Decidir entre la home principal, V1 y V2 | Producto |
| Estados de color | Validar en Figma `pg-success`, `pg-warning` y `pg-error` (ya se usan en badges y avisos) | Diseño |
