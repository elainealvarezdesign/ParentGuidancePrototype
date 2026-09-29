# 5. Auditoría del prototipo

Revisión de `src/app` (sin contar `components/ui`, que son componentes base de shadcn) frente a estas guías.
Está ordenada por impacto.

## 5.1 Accesibilidad (prioridad alta)

| Problema | Dónde | Solución |
|----------|-------|----------|
| ✅ ~~No hay estilos de foco visibles~~ | Todos los botones y enlaces | **Resuelto** con una regla global en `src/styles/accessibility.css` |
| ✅ ~~No se respeta reduced‑motion~~ | Toda la app | **Resuelto**: `MotionConfig` en `App.tsx`, regla CSS en `accessibility.css` y scroll sin animación en `utils/motion.ts` |
| Cards de la home no alcanzables con teclado | Home (`App.tsx`) | Las cards usan `onClick` en elementos que no son enlaces ni botones: convertirlas en `<a>`/`<Link>` |
| ✅ ~~Texto en sage `#90b3b6` sobre fondos claros~~ | 41 usos | **Resuelto**: pasa a teal dark `#406064`. Se mantiene sage sobre navy, donde sí cumple (5.9:1) |
| ✅ ~~Texto en mist `#acbcbe`~~ | 36 textos y 11 placeholders | **Resuelto**: texto → slate `#435766`; todos los placeholders → teal `#59797d` |
| ✅ ~~Texto de 9–11px~~ | 75 usos | **Resuelto**: todo a 12px, salvo los eyebrows en mayúsculas, que quedan en 11px |
| ✅ ~~Texto `#9aa4ac` (2.5:1)~~ | Footer de `UnifiedCard` | **Resuelto**: slate |
| ✅ ~~Teal `#59797d` pequeño sobre crema o tintes (3.9–4.3:1)~~ | 39 textos (eyebrows, chips, breadcrumbs, links) | **Resuelto**: teal dark `#406064` |
| ✅ ~~Texto blanco sobre sage (2.3:1)~~ | Números de pasos, avatares | **Resuelto**: navy sobre sage (5.9:1) |
| ✅ ~~"Learn More" sage sobre sage (1:1, invisible)~~ | Cards de la home | **Resuelto**: navy |
| ✅ ~~Botón "Next Lesson" blanco sobre ámbar (3.0:1)~~ | Lecciones | **Resuelto**: pasa a Primary teal |
| Separadores "•" en `#d0cbca` (1.6:1) | Detalle de curso | Son decorativos, se dejan así (conviene añadir `aria-hidden`) |
| Testimonios en 3 columnas en móvil | Parent Coaching (390px) | El texto queda en columnas de ~80px. Pasar a 1 columna o carrusel en móvil |

## 5.2 Colores fuera de paleta

| Hex actual | Usos | Dónde | Reemplazar por |
|------------|------|-------|----------------|
| `#1b1139` (morado muy oscuro) | 17 | App, HomePageV2, AskATherapist | `pg-navy` `#1c3243` |
| `#2c3e50` | 7 | App, Home V1/V2 | `pg-navy` |
| `#0d1b2a` | 3 | Lesson, MilestonesLesson, QuestionDetail | `pg-navy` |
| `#363049`, `#293a41` | 6 | Varios | `pg-navy` |
| `#58595b`, `#333`, `#333333` | 9 | App | `pg-slate` `#435766` |
| `#6f9296`, `#76979a`, `#7da3a6`, `#4a6b6f` | 9 | Hovers varios | `pg-teal` o `pg-teal-dark` |
| `#97b4b5`, `#a1bfb9` | 5 | Decoración | `pg-sage` `#90b3b6` |
| `#e8f1f1`, `#dceced`, `#edf5f5` | 22 | Fondos suaves | `pg-tint` `#eaf1f1` |
| `#f5f5f5`, `#f7f7f7`, `#f0f0f0`, `#fafafa`, `#f9f9f9` | 22 | Fondos grises | `pg-tint-soft` o `white` (el gris neutro no pertenece a la marca) |
| `#e8ebed`, `#dde0e0`, `#e0e0e0`, `#dedcdc` | 16 | Bordes | `pg-line` `#dee8e9` |
| `#ebe8e5`, `#f1eeee`, `#ebe8eb` | 9 | Divisores sobre crema | `pg-cream-dark` `#f0edeb` |
| `#c8893a`, `#b5782f`, `#8d6b3a` | 9 | Lecciones (acento ámbar) | Relleno: dejar `#c8893a`; texto: `pg-warning` `#8a5a1c` |
| `#52bd95` | 3 | Punto "en vivo" | Se mantiene como relleno decorativo |
| `#6b5c8d`, `#e8a497` | 4 | MentalHealthSeries, HomeV2 | Revisar si son intencionales; si no, `pg-teal` / `pg-sage` |

## 5.3 Consistencia

| Tema | Situación actual | Estándar |
|------|------------------|----------|
| Botones | Teal/navy/blanco, radios 8/12/16px y píldora, alturas variadas | [Botones](./02-botones.md): teal, 8px, 36/44/52px |
| Radios | 15 valores distintos | 6 tokens: 4 / 8 / 12 / 16 / 28 / full |
| Sombras | 11 recetas, algunas con negro | 3 tokens teñidos de navy |
| Contenedores | 1000 / 1024 / 1100 / 1180 / 1280px | 3 tokens: 680 / 1100 / 1280 |
| Tema shadcn (`theme.css`) | Colores por defecto de shadcn (`--primary: #030213`) | Mapear `--primary`, `--ring`, `--border`, etc. a la paleta PG para que los componentes `ui/` hereden la marca |
| Fuente | `font-['Poppins',sans-serif]` repetido 487 veces | Definirla una vez en `body` con `tokens.css` |
| Duraciones de animación | 12 valores | 4 bandas (ver [Movimiento](./04-movimiento.md)) |

## 5.4 Otros

- `src/imports` incluye capturas completas de parentguidance.org (unos 19 MB) y otras imágenes que el código no usa (`QB_united.png`, `ADDO.png`, `image.png`, `pasted_text`…). Se
  pueden mover fuera del repositorio.
- El `<title>` y la descripción de `index.html` son los genéricos de Figma Make ("Enables designers to
  create interactive prototypes…").
- Hay dos versiones de la home (`HomePageV1`, `HomePageV2`). Conviene decidir cuál es la vigente.

## 5.5 Orden de migración sugerido

1. Importar `tokens.css`. Las páginas no cambian (usan hex sueltos), pero los componentes `ui/` de shadcn y el fondo base pasan a los colores PG. Revisar visualmente.
2. ✅ `MotionConfig reducedMotion="user"` y estilos de foco (hecho).
3. ✅ Arreglar el contraste: sage, mist y los tamaños de 9–11px (hecho).
4. Unificar los botones en un componente.
5. Reemplazar los hex sueltos por clases `pg-*`, página por página.
