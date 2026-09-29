# Parent Guidance — Guías de diseño

Guías del prototipo **PG-Live** (parentguidance.org), escritas a partir del **código real del prototipo**
(`src/app`) y ordenadas con el método del sistema de diseño de Scalar.

- **La identidad visual** (colores, tipografía, radios, sombras, estilo de botones y animación) sale de lo que
  ya usa el prototipo. Contamos qué valores aparecen en el código y con qué frecuencia; los más usados se
  convierten en tokens y los sueltos se consolidan.
- **El método** viene de Scalar: todo sale de tokens, escalas cerradas, jerarquía de botones, accesibilidad y
  contrato de reduced‑motion.

## Índice

| # | Guía | Contenido |
|---|------|-----------|
| 1 | [Fundamentos](./01-fundamentos.md) | Paleta, tipografía Poppins, espaciado, radios y sombras |
| 2 | [Botones](./02-botones.md) | Estilos, tamaños, estados y accesibilidad |
| 3 | [Layout](./03-layout.md) | Contenedores, márgenes, breakpoints, ritmo vertical y cards |
| 4 | [Movimiento](./04-movimiento.md) | Animaciones con `motion`, duraciones, easing y reduced‑motion |
| 5 | [Auditoría del prototipo](./05-auditoria.md) | Colores fuera de paleta, problemas de contraste y pendientes |
| — | [`tokens.css`](./tokens.css) | Variables CSS + mapeo a Tailwind v4, listo para importar |

`guidelines/Guidelines.md` (en la raíz) es la versión resumida de estas guías para **Figma Make**, que es el
archivo que su IA lee al generar pantallas.

## Personalidad visual

Parent Guidance acompaña a familias en temas delicados (salud mental, crisis, crianza). La interfaz debe
sentirse **cálida, calmada y confiable**:

- Fondo crema cálido, texto azul marino profundo y acentos verde azulado (teal/salvia).
- Formas suaves: esquinas redondeadas, sombras tenues teñidas de marino, nunca negras y duras.
- Movimiento sereno: entradas suaves y cortas, nada que rebote ni parpadee.
- Legibilidad ante todo: la audiencia son padres, a menudo en el móvil y bajo estrés.

## Qué tomamos de Scalar y qué no

**Adoptado (el método):**
- Regla de tokens: ningún hex, tamaño o sombra "a mano"; todo sale de `tokens.css`.
- Escalas cerradas de tipo y espaciado; a cualquier valor nuevo se le asigna el paso más cercano.
- Jerarquía de botones: un solo Primary por sección, labels que empiezan con verbo, estados completos
  (Focus, Loading, Disabled), mínimo 44px de área táctil.
- Grids que degradan por etapas (3 → 2 → 1 columnas).
- Movimiento seguro y sin prisa, con duraciones por bandas y un contrato de reduced‑motion obligatorio.

**Descartado:**
- La paleta azul de Scalar (`#037de8`…) y la tipografía Inter: Parent Guidance tiene su propia marca.
- El contenedor de 1160px de Scalar: el prototipo ya usa 1280px.
- GSAP/ScrollTrigger, parallax, marquee, bento con spotlight y el diagrama "Living Model": no encajan con
  una web de apoyo a familias y el prototipo ya usa `motion`.

## Regla #1

> Ningún color, tamaño de fuente, radio o sombra se escribe como valor suelto (`text-[#1c3243]`,
> `text-[10px]`, `shadow-[…]`). Se usan los tokens de [`tokens.css`](./tokens.css). Si falta algo, primero se
> añade como token aquí (y en Figma) y después se usa.

Hoy el prototipo escribe los colores como valores sueltos en cada clase: hay más de 1.200 usos de hex
repartidos en 90 valores distintos. La [auditoría](./05-auditoria.md) indica cómo migrar.
