# Parent Guidance — Guías de diseño

Guías para construir el prototipo de **Parent Guidance** tomando como base el sistema de diseño de Scalar
(`Scalar_Design_System-v1.0` y `Scalar_Design_System-Components` en Figma).

Los documentos de Scalar que usamos como fuente están escritos para el **sitio de marketing** (scalar.com).
Parent Guidance es una **interfaz de producto**, así que aquí solo se conserva lo que aplica a una app:
tokens, componentes, accesibilidad y micro‑interacciones. Todo lo que existe únicamente para una landing page
(heros gigantes, storytelling con scroll, marquees, bentos con spotlight, etc.) se ha dejado fuera a propósito.

## Índice

| # | Guía | Contenido |
|---|------|-----------|
| 1 | [Fundamentos](./01-fundamentos.md) | Tipografía, color, espaciado, radios y elevación |
| 2 | [Botones](./02-botones.md) | `Button` y `Button_Icon`: estilos, tipos, tamaños, estados, accesibilidad |
| 3 | [Layout y grid](./03-layout.md) | Contenedor, breakpoints, ritmo vertical, patrones de grid y divisores |
| 4 | [Movimiento](./04-movimiento.md) | Easing, duraciones, feedback de interacción y reduced‑motion |
| — | [`tokens.css`](./tokens.css) | Bloque `:root` listo para importar en el prototipo |

## Criterio de selección

### Lo que sí adoptamos

- **Tokens de color de Figma** como única fuente de color (neutrales, brand, semánticos).
- **Escala tipográfica XS → 5XL** de Figma y la fuente Inter.
- **Escala de espaciado** de Figma y sus alias semánticos (XXS, S, M, L, XL).
- **Radios y sombras** estructurales, más el halo de foco.
- **Componente Button / Button_Icon** completo: jerarquía de estilos, tipos semánticos, tamaños, estados
  (incluidos Focus y Loading) y reglas de accesibilidad.
- **Sistema de contenedor**, breakpoints con degradación escalonada y la técnica de **divisores hairline**.
- **Tokens de movimiento** (easing, duraciones, stagger) para feedback y transiciones de estado.
- **Contrato de reduced‑motion** sin excepciones.

### Lo que no adoptamos (y por qué)

| Descartado | Motivo |
|------------|--------|
| Tamaños *display* (hero 72–148px, títulos de sección de 52px, testimonial, stat de 52px) | Escala de marketing; en producto rompen la densidad y la jerarquía. Usamos la escala XS–5XL. |
| Paddings de sección de 96–150px | Pensados para "capítulos" de una landing; en una app desperdician espacio útil. |
| Hero, status bar sticky, testimonial, marketplace, trust section | Secciones específicas de scalar.com, sin equivalente en Parent Guidance. |
| Marquee / logo ticker y demás animación decorativa infinita | Distrae en una interfaz de trabajo y no aporta información. |
| Bento shell con spotlight que sigue al cursor y lift de 5px | Efecto de escaparate; en producto los cards no deben "saltar". |
| Storytelling con GSAP + ScrollTrigger (reveal on scroll, parallax, scrub) | La información de una app debe estar visible de inmediato, no aparecer al hacer scroll. |
| Diagrama "Living Model" (morph de nodos) | Pieza de marca de la home de Scalar, ligada a su narrativa de valuación. |
| Eyebrow + section title de marketing | Patrón editorial; en producto usamos encabezados de la escala tipográfica. |
| Colores de acento de gráficos para UI | Solo se permiten en visualización de datos, nunca en chrome de interfaz. |
| Tabla de auditoría de hex legacy | Sirve para migrar `index.html` de Scalar; Parent Guidance arranca limpio con tokens. |

## Regla #1

> Ningún color, tamaño de fuente, espaciado, radio o sombra se escribe "a mano".
> Todo sale de [`tokens.css`](./tokens.css). Si algo no existe, se registra primero como token en Figma
> y luego se añade aquí — nunca como valor suelto en un componente.

## Inconsistencias detectadas en las fuentes

Al cruzar los documentos de Scalar aparecen contradicciones. Estas guías toman la decisión indicada;
conviene confirmarlas con el equipo de diseño de Scalar:

1. **Estados Hover / Pressed del botón.** La guía del sistema llama `Background/Hover` a `#68b1f1` (Brand/300)
   y `Background/Pressed` a `#9acbf6` (Brand/200), pero la documentación del componente Button (auditada
   directamente en Figma) usa `#0268c1` para hover y `#02539a` para pressed.
   **Decisión:** seguimos la documentación del componente (más oscuro al interactuar), porque es la fuente
   verificada contra el archivo de componentes.
2. **Brand/400 `#3597ed`.** Lo usa el componente Button (Focus y Selected) pero no aparece en la tabla de
   tokens de la guía del sistema. **Decisión:** lo incluimos en `tokens.css` como `--brand-400`.
3. **Altura del botón.** El marketing usa `min-height: 44px`; el componente Figma define 20 / 40 / 60px.
   **Decisión:** usamos los tamaños del componente (S/M/L) y garantizamos el área táctil de 44px por
   separado (ver [Botones](./02-botones.md#área-táctil)).
