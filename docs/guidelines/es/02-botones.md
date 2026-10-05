# 2. Botones

Todos los botones de acción del prototipo salen de un solo sistema (teal, 8px, Poppins semibold 14px, hover
teal dark), implementado en el componente [`Button.tsx`](../../../src/app/components/Button.tsx) (sección 2.4).

## 2.1 Estilos

| Estilo | Aspecto | Cuándo |
|--------|---------|--------|
| **Primary** | Fondo `pg-teal`, texto blanco; hover `pg-teal-dark` | La acción principal de la sección: "Ver curso", "Reservar sesión", "Enviar pregunta" |
| **Secondary** | Fondo blanco, borde 1px `pg-teal`, texto `pg-teal-dark`; hover fondo `pg-tint` | Acción de apoyo junto a un Primary ("Cancelar", "Ver detalles") |
| **Tertiary** | Solo texto `pg-teal-dark`, subrayado en hover | Acciones de baja prioridad: "Ver más", "Saltar" |
| **Inverse** | Fondo blanco, texto `pg-navy`; hover `pg-cream` | Acción principal **sobre fondos navy, teal o sage** |
| **Inverse secondary** | Fondo `white/5`, borde `white/20`, texto blanco; hover `white/10` | Acción de apoyo sobre fondos oscuros |

> **Un solo Primary por sección.** Si hay más acciones, pasan a Secondary o Tertiary.

No hay botones navy ni sage: el navy es el color del texto y de la navegación, no de la acción. Así el usuario
aprende que el teal significa "puedo hacer clic".

Sobre fondo **sage** (banners como "Not sure which resource is right for you?") la acción principal es
**Inverse**: el teal sobre sage casi no se distingue.

## 2.2 Tamaños

| Tamaño | Alto | Padding | Texto | Cuándo |
|--------|------|---------|-------|--------|
| **S** | 36px | `px-4` | 14px / 600 | UI densa: barras de herramientas, paginación, "Register" en filas de eventos. En móvil, solo si el botón ocupa el ancho completo |
| **M** | 44px | `px-5` | 14px / 600 | **Por defecto** |
| **L** | 52px | `px-7` | 16px / 600 | CTA de hero y pantallas clave en móvil |

- Radio `rounded-pg-md` (8px) en todos los tamaños.
- La forma **píldora** (`rounded-full`) se reserva para chips, badges, filtros y el buscador. No para botones
  de acción.
- Icono opcional a la derecha (flecha `→` o icono Material Outlined de 16px) con `gap-2`. Si el icono es decorativo,
  lleva `aria-hidden="true"`.
- `w-full` solo dentro de cards o en móvil.

## 2.3 Estados

| Estado | Primary | Secondary |
|--------|---------|-----------|
| Default | `bg-pg-teal text-white` | `bg-white border-pg-teal text-pg-teal-dark` |
| Hover | `bg-pg-teal-dark` | `bg-pg-tint` |
| Pressed | `scale 0.97` (motion `whileTap`) | igual |
| Focus | Anillo 2px `pg-teal-dark` con 2px de separación | igual |
| Loading | Spinner de 16px + "Enviando…", `aria-busy="true"`, sin clics | igual |
| Disabled | `bg-pg-line text-pg-slate`, cursor `not-allowed` | `border-pg-line text-pg-slate` |

El foco visible está aplicado de forma global en `src/styles/accessibility.css`: todo enlace, botón o campo
muestra un anillo teal dark de 2px con halo blanco al navegar con teclado, sobre fondos claros y oscuros.
Los componentes nuevos no necesitan añadir clases de foco.

## 2.4 Componente

Los botones del prototipo usan [`src/app/components/Button.tsx`](../../../src/app/components/Button.tsx):

| Componente | Para qué | Ejemplo |
|------------|----------|---------|
| `<Button>` | Acciones (enviar, abrir, descargar) | `<Button variant="secondary" size="s" onClick={…}>Today</Button>` |
| `<ButtonLink>` | Navegación dentro de la app (`react-router`) | `<ButtonLink to="/ask-a-therapist">View Answer</ButtonLink>` |
| `<ButtonAnchor>` | Enlaces externos, `mailto:`, `tel:`, `sms:` y anclas `#` | `<ButtonAnchor href="tel:988" variant="inverse" size="l">Call 988</ButtonAnchor>` |
| `buttonClass()` | Solo las clases, para elementos que no pueden usar los componentes | `className={buttonClass({ variant: "secondary" })}` |

- Props: `variant` (`primary` por defecto, `secondary`, `tertiary`, `inverse`, `inverse-secondary`) y `size`
  (`s`, `m` por defecto, `l`). `<Button>` acepta también `loading`.
- Todos llevan `whileTap={{ scale: 0.97 }}` y ningún `whileHover` con escala; el hover es solo de color.
- `className` sirve para el layout (`w-full`, `mt-4`, `shrink-0`), no para cambiar colores, radios ni tamaños.
- Excepción: el botón "Search" dentro de una barra de búsqueda en píldora puede llevar `rounded-full`, porque
  forma parte de la barra.
- En newsletters, el botón va **dentro** de la caja del input (con `p-1.5` y `gap-2`), no pegado al borde.

### Controles que no son botones de acción

Estos elementos tienen su propio estilo y **no** usan `<Button>`:

| Control | Estilo |
|---------|--------|
| Chips de filtro | `rounded-full text-xs font-medium px-4 py-2`; activo `bg-pg-navy text-white`, inactivo `bg-pg-cream-dark text-pg-slate`, con `aria-pressed` |
| Menú "Featured" (ordenar) | `rounded-pg-md bg-pg-cream-dark text-xs font-medium px-4 py-2.5`, iconos `ListFilter` (filter_list) + `ChevronDown` (expand_more) de 14px, centrados con el texto |
| Selector segmentado (Month/List, Day/Week/Month) | Contenedor `bg-pg-tint-soft`; opción activa blanca con `shadow-pg-card` y `aria-pressed` |
| Paginación numérica | Cuadrados de 36–44px; página actual navy o teal; Prev/Next como `<Button variant="secondary" size="s">` |
| Botones de solo icono | 36–44px, `rounded-pg-md`, `aria-label` obligatorio (flechas del calendario, cerrar, menú) |

## 2.5 Accesibilidad

- Usar `<button>` para acciones y `<a>` para navegación. No usar `<div onClick>`.
- Área táctil mínima de **44×44px** en móvil (tamaño M o L).
- Los enlaces externos (`target="_blank"`) deben avisar: icono de enlace externo + texto oculto
  "(se abre en una pestaña nueva)".
- Los botones de solo icono llevan `aria-label` ("Cerrar", "Menú").
- Disabled: explicar el motivo con un texto de ayuda cercano si no es evidente.
- En la página **Get Help** (líneas de crisis), los botones de llamada/texto usan `<a href="tel:…">` y
  `<a href="sms:…">` y el tamaño L, para que se puedan tocar sin esfuerzo en un momento de estrés.

## 2.6 Do / Don't

**Do**
- Un Primary por sección, en teal.
- Labels cortos que empiezan con verbo: "Ver curso", "Reservar sesión".
- El mismo tamaño en todos los botones de una misma fila.

**Don't**
- Botones en navy, sage o mist.
- Mezclar botones píldora y rectangulares en la misma pantalla.
- `whileHover` con escala mayor de 1.02 en botones: se siente inestable.
- Texto de botón en 10–11px.
