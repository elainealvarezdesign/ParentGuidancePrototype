# 3. Layout y grid

Estructura, breakpoints y ritmo vertical. Colores, radios y tipografía vienen de [Fundamentos](./01-fundamentos.md);
el movimiento, de [Movimiento](./04-movimiento.md).

## 3.1 Contenedor

Dos variables controlan todo el layout horizontal. No hay framework de 12 columnas.

```css
:root {
  --wrap: 1160px;                                        /* ancho máximo de contenido */
  --px: max(24px, calc((100vw - var(--wrap)) / 2));      /* margen lateral fluido, mínimo 24px */
}
```

- Fondos que deben llegar de borde a borde (barra de navegación, cabeceras con fondo): aplicar
  `padding-inline: var(--px)` directamente.
- Contenido: `max-width: var(--wrap); margin-inline: auto;`.
- En móvil, el margen lateral mínimo es **16px** (`--px-mobile`), por debajo de 480px.
- Nunca usar márgenes en px fijos para centrar contenido.

## 3.2 Breakpoints

| Breakpoint | Dirección | Qué cambia |
|------------|-----------|-----------|
| 1200px | max‑width | Grids anchos de 3–4 columnas pasan a 2 |
| 1024px | max‑width | Layouts de dos paneles (sidebar + contenido, 5fr/7fr) se apilan; KPIs de 4 pasan a 2 |
| 768px | max‑width | Grids restantes a 1 columna; formularios en 2 columnas pasan a 1 |
| 480px | max‑width | Todo apilado; KPIs a 1 columna; margen lateral 16px |

> **Degradación escalonada:** los grids multicolumna bajan primero a 2 columnas y luego a 1, nunca de N a 1
> de golpe.

## 3.3 Ritmo vertical

Los paddings de sección de marketing (96–150px) **no se usan**. En producto el espacio vertical se toma de
la escala de espaciado:

| Contexto | Espaciado | Token |
|----------|-----------|-------|
| Entre elementos de un grupo (label → campo, título → texto) | 8px | `--space-s` |
| Entre campos o filas de un bloque | 16px | `--space-m` |
| Padding interior de card / panel | 24px | `--space-l` |
| Entre bloques de una página | 32px | `--space-xl` |
| Entre secciones grandes / cabecera de página → contenido | 48px | `--space-48` |
| Padding superior/inferior de la página | 48–64px | `--space-48` / `--space-64` |

## 3.4 Patrones de grid

Elegir el patrón más cercano en lugar de inventar una proporción nueva.

| Patrón | `grid-template-columns` | Uso en Parent Guidance |
|--------|-------------------------|------------------------|
| Cabecera con acción | `1fr auto` | Título + botón(es) a la derecha; el texto ocupa el resto |
| Título + descripción | `auto 1fr` | Título que abraza su contenido y descripción que llena |
| Fila de KPIs | `repeat(4, 1fr)` | Cuatro métricas iguales |
| Cards de contenido | `repeat(3, 1fr)` | Tres cards equivalentes (guías, recursos, perfiles) |
| Dos columnas equilibradas | `1fr 1fr` | Formularios, comparaciones |
| Lista + detalle | `5fr 7fr` | Panel estrecho junto a uno más ancho |
| Contenido + lateral | `3fr 2fr` | Contenido principal con columna de apoyo |
| Riel fijo + contenido | `260px 1fr` | Navegación lateral o filtros junto al contenido |
| Contenido que puede desbordar | `minmax(0, 1.35fr) minmax(0, 1fr)` | Tablas o gráficos anchos; `minmax(0, …)` evita el overflow |

**Regla:** si ningún patrón encaja, preferir una proporción asimétrica (5fr/7fr, 3fr/2fr) antes que una
división exacta. Las divisiones iguales se reservan para KPIs y cards equivalentes.

Gaps de grid: `--space-m` (16px) en UI densa, `--space-l` (24px) por defecto, `--space-xl` (32px) entre
paneles grandes.

## 3.5 Divisores hairline

Seña de identidad del sistema: en lugar de cards con sombra y gutters, el grid se dibuja con bordes de
1–2px compartidos. Es el patrón de card por defecto.

```css
/* Grid de cards sin doble borde: cada celda dibuja derecha + abajo; la primera columna añade izquierda */
.card-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--rule); }
.card-grid > * { border-right: 1px solid var(--rule); border-bottom: 1px solid var(--rule); padding: var(--space-l); }
.card-grid > :nth-child(3n + 1) { border-left: 1px solid var(--rule); }

/* Fila de KPIs: regla fuerte arriba y abajo, hairlines entre columnas */
.kpis { display: grid; grid-template-columns: repeat(4, 1fr);
        border-block: 2px solid var(--rule-heavy); }
.kpi { padding: var(--space-l); border-right: 1px solid var(--rule); }
.kpi:last-child { border-right: none; }

/* Técnica del gap de 1px: más simple que bordes por celda */
.cells { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule); }
.cells > * { background: var(--neutral-white); }
```

Hover en cards interactivos: solo cambio de fondo a `--neutral-100` (sin lift ni sombra, sin spotlight).

> La técnica del gap de 1px es la más robusta cuando el número de columnas cambia por breakpoint, porque no
> depende de selectores `nth-child`.

## 3.6 Checklist para una pantalla nueva

1. Centrar el contenido con `max-width: var(--wrap)` y `padding-inline: var(--px)`.
2. Encabezado de página con un tamaño de la escala (4XL o 3XL) y, si hay acción principal, patrón `1fr auto`.
3. Elegir el grid en la tabla 3.4.
4. Separar contenido con divisores hairline antes de recurrir a sombras.
5. Espaciado vertical desde la tabla 3.3.
6. Añadir la degradación escalonada: 1024 → 2 columnas o apilar, 768 → apilar, 480 → una columna.
