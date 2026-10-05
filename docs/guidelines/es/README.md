# Parent Guidance — Guías de diseño

Guías del prototipo **PG-Live** (parentguidance.org), escritas a partir del **código real del prototipo**
(`src/app`).

- **La identidad visual** (colores, tipografía, radios, sombras, botones y animación) se define con tokens y
  escalas cerradas.
- **El método:** todo sale de tokens, escalas cerradas, jerarquía de botones, accesibilidad y
  contrato de reduced‑motion.

> **Estado:** el prototipo cumple estas guías ([capítulo 5](./05-calidad.md)).
> Cada pantalla o componente nuevo debe seguirlas desde el principio.

## Índice

| # | Guía | Contenido |
|---|------|-----------|
| 1 | [Fundamentos](./01-fundamentos.md) | Paleta, contraste, tipografía Poppins, espaciado, radios y sombras |
| 2 | [Botones](./02-botones.md) | Estilos, tamaños, estados, el componente `<Button>` y accesibilidad |
| 3 | [Layout](./03-layout.md) | Contenedores, breakpoints, ritmo vertical, grids y patrones (cards, barra de filtros, banners, pop-ups, legales, video) y componentes de Figma |
| 4 | [Movimiento](./04-movimiento.md) | Animaciones con `motion`, duraciones, easing y reduced‑motion |
| 5 | [Estándares de calidad](./05-calidad.md) | Accesibilidad, consistencia visual, Figma y temas abiertos |

**Versión PDF:** en [`docs/guidelines/pdf/es/`](../pdf/es/) hay un PDF por guía y uno con todas juntas
(`Parent-Guidance-Guias-de-diseno-completas.pdf`). Se generan a partir de estos archivos `.md`; si una guía
cambia, hay que volver a generarlos.

**Versión en inglés (principal):** las mismas guías en inglés están en [`docs/guidelines/`](../README.md), con
sus PDF en `docs/guidelines/pdf/`.

## Dónde vive cada cosa

| Archivo | Qué es |
|---------|--------|
| [`src/styles/tokens.css`](../../../src/styles/tokens.css) | Variables CSS (`--pg-*`) y su mapeo a Tailwind v4 (`bg-pg-navy`, `rounded-pg-md`, `shadow-pg-card`, `max-w-pg-page`…) |
| [`src/styles/accessibility.css`](../../../src/styles/accessibility.css) | Foco visible global y regla de reduced‑motion |
| [`src/app/components/Button.tsx`](../../../src/app/components/Button.tsx) | `<Button>`, `<ButtonLink>`, `<ButtonAnchor>` y `buttonClass()` |
| [`src/app/components/UnifiedCard.tsx`](../../../src/app/components/UnifiedCard.tsx) | Card estándar (recursos, cursos, líneas de ayuda) |
| [`src/app/mhs/EventModal.tsx`](../../../src/app/mhs/EventModal.tsx) | Pop-up de evento (patrón de diálogo accesible) |
| [`guidelines/Guidelines.md`](../../../guidelines/Guidelines.md) | Resumen en inglés para **Figma Make** (el archivo que lee su IA al generar pantallas) |

## Personalidad visual

Parent Guidance acompaña a familias en temas delicados (salud mental, crisis, crianza). La interfaz debe
sentirse **cálida, calmada y confiable**:

- Fondo crema cálido, texto azul marino profundo y acentos verde azulado (teal/salvia).
- Formas suaves: esquinas redondeadas, sombras tenues teñidas de marino, nunca negras y duras.
- Movimiento sereno: entradas suaves y cortas, nada que rebote ni parpadee.
- Legibilidad ante todo: la audiencia son padres, a menudo en el móvil y bajo estrés.

## Principios

- Regla de tokens: ningún hex, tamaño o sombra "a mano"; todo sale de `tokens.css`.
- Escalas cerradas de tipo y espaciado; a cualquier valor nuevo se le asigna el paso más cercano.
- Jerarquía de botones: un solo Primary por sección, labels que empiezan con verbo, estados completos
  (Focus, Loading, Disabled), mínimo 44px de área táctil.
- Grids que degradan por etapas (3 → 2 → 1 columnas).
- Movimiento seguro y sin prisa, con duraciones por bandas y un contrato de reduced‑motion obligatorio.

## Regla #1

> Ningún color, tamaño de fuente, radio o sombra se escribe como valor suelto (`text-[#1c3243]`,
> `text-[13px]`, `shadow-[…]`, `text-gray-700`). Se usan los tokens de [`tokens.css`](../../../src/styles/tokens.css).
> Si falta algo, primero se añade como token aquí (y en Figma) y después se usa.

Excepciones aceptadas: los colores de los logos SVG (arte de marca), las paletas de categorías de cursos
(colores de datos) y los anchos de lectura de textos de hero (`max-w-[480px]`…).

## Cómo comprobar una pantalla

1. Revisarla en **390, 768, 1024 y 1280px**: sin scroll lateral y sin texto apretado.
2. Recorrerla con el teclado (Tab, Enter, Esc): todo lo clicable se alcanza y muestra el foco.
3. Contraste AA en todo el texto (tabla de la [sección 1.1](./01-fundamentos.md#combinaciones-de-contraste-aprobadas)).
4. Botones con el componente, títulos en la escala, sin animaciones que reboten.
