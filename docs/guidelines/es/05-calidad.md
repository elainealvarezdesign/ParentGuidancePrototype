# 5. Estándares de calidad

Lo que cumple cada pantalla del prototipo y las reglas que debe mantener cualquier pantalla nueva. Para revisar
una pantalla paso a paso, usar la lista de la [Introducción](./README.md#cómo-comprobar-una-pantalla). Los temas
abiertos están en la sección 5.4.

## 5.1 Accesibilidad

| Estándar | Cómo se cumple |
|----------|----------------|
| Foco visible | Contorno de 2px `pg-teal-dark` con 2px de separación en todo enlace, botón y campo, con una regla global en `src/styles/accessibility.css` |
| Movimiento reducido | `MotionConfig reducedMotion="user"` en `App.tsx`, regla CSS en `accessibility.css` y scroll sin animación en `utils/motion.ts` ([sección 4.4](./04-movimiento.md)) |
| Teclado | Las cards son enlaces y las FAQ son botones con `aria-expanded`; el menú ☰ (por debajo de 1024px) se cierra con Esc, al tocar fuera o al navegar, y devuelve el foco |
| Contraste | Texto solo en las combinaciones aprobadas ([sección 1.1](./01-fundamentos.md)): sage y mist nunca son texto sobre fondos claros, el texto pequeño de acento va en teal dark y el texto sobre sage va en navy |
| Tamaño de texto | Mínimo 12px; 11px solo para etiquetas en mayúsculas |
| Nombres y etiquetas | Los botones de solo icono llevan `aria-label`; los iconos decorativos y los separadores "•" llevan `aria-hidden`; toda imagen tiene `alt` |
| Estructura | Un solo `h1` por página |
| Responsive | Sin scroll lateral en 390, 768, 1024 y 1280px; los anchos fijos grandes solo desde `lg` |

## 5.2 Consistencia visual

| Tema | Regla |
|------|-------|
| Colores | Solo tokens `pg-*`, en clases o como `var(--pg-*)`. Los overlays sobre video y fotos usan navy, nunca negro |
| Tipografía | Tamaños de la escala ([sección 1.2](./01-fundamentos.md)); Poppins se aplica una sola vez en el `body`; tracking de mayúsculas con `tracking-pg-caps` / `tracking-pg-eyebrow` |
| Radios | `rounded-pg-sm/md/lg/xl/2xl` (4/8/12/16/28px) y `rounded-full` |
| Sombras | `shadow-pg-card`, `shadow-pg-card-hover`, `shadow-pg-overlay` |
| Contenedores | `max-w-pg-page` (1280), `max-w-pg-content` (1100), `max-w-pg-reading` (680) |
| Duraciones | 0.15 / 0.22 / 0.35 / 0.55 s ([sección 4.1](./04-movimiento.md)) |
| Botones | Toda acción usa `<Button>`, `<ButtonLink>` o `<ButtonAnchor>` ([capítulo 2](./02-botones.md)) |
| Iconos | Material Icons Outlined, siempre desde `components/icons.tsx` |

Excepciones aceptadas: los colores de los logos SVG (arte de marca), las paletas de categorías de cursos y temas
(colores de datos) y los anchos de lectura de los textos de hero (`max-w-[480px]`…).

## 5.3 Figma

La librería de Figma refleja el prototipo: cada token tiene su variable, cada patrón su componente ([sección
3.7](./03-layout.md)) y cada pantalla su frame en 1280, 768 y 375px. Cuando una pantalla cambia en el prototipo,
se actualizan también sus tres frames.

## 5.4 Temas abiertos

| Tema | Detalle | Quién |
|------|---------|-------|
| Botones sin función | "Help me choose" (Get Help), "Take the Quiz" y "Learn more" (Home V1), "Featured" (Ask a Therapist) | Diseño/desarrollo |
| Redes sociales | Faltan las URLs de Facebook, Instagram, YouTube y LinkedIn (Vimeo ya está enlazado) | Contenido |
| Contenido de ejemplo | Eventos y enlaces de registro de muestra; cursos y recursos sin página propia abren plantillas de ejemplo | Contenido |
| Textos repetidos | Tres cards de la home repiten "Dive into a wealth of knowledge tailored for parents" | Contenido |
| Homes | Decidir entre la home principal, V1 y V2 | Producto |
| Acento de Home V2 | Usa un tono durazno (`#e8a497`) que no está en la paleta | Diseño |
| Cookies Policy | Los nombres de las cookies se muestran en una fuente monoespaciada | Diseño |
| Interlineado | Mental Health Series, Parent Coaching y las homes alternativas aún usan algunos interlineados sueltos (`leading-[…]`) en lugar de la escala tipográfica (el espaciado ya está en la escala) | Desarrollo |
