# Sincronización Figma ↔ prototipo — pendientes

Archivo de Figma: [Design system - PG](https://www.figma.com/design/mWOJYdAxkKGj0bWSO2ptGj/Design-system---PG)
Última sesión: 2 de octubre de 2026. Detalle técnico (IDs de nodos, variables y propiedades) en [`LEDGER.md`](./LEDGER.md).

## Hecho

**Pantallas existentes (24 frames, editados en el mismo lugar):** Home, Mental Health Series, Parent Coaching,
On-Demand Courses, Ask a Therapist, Ask a Therapist Detail, Get Help y Lesson (antes llamado "Course Detail",
que en realidad era la página de lección) — en Desktop, Tablet y Mobile.

**Pantallas nuevas en Desktop (fila nueva en Layouts – Desktop, y = 4200):**
Course Detail · Free Yourself, Course Detail · Milestones, Lesson · Milestones, MHS · State Select,
MHS · Events, MHS · Events (pop-up abierto), MHS · Topic, Contact Us, y en una segunda fila (y = 6800)
Terms of Use, Cookies Policy y Consent Documents.

**Pantallas nuevas en Tablet y Mobile (2 de octubre):** las 11 pantallas nuevas en Layouts – Tablet (fila y = 4600)
y Layouts – Mobile (fila y = 7000), en el mismo orden que en Desktop. En móvil, el pop-up de Events es un
bottom sheet con fondo oscurecido; en Tablet es el popover de escritorio junto al día 10.

**Prototipo:** se corrigió el scroll horizontal en móvil de la página de contenido de Mental Health Series (el
campo de búsqueda no podía encogerse). Ninguna ruta desborda ya a 375px ni a 768px.

**Ajustes pequeños:** el reproductor de Lesson · Milestones dice "0:00 / 4:12" y se ocultó la flecha final del
breadcrumb en Course Detail · Milestones.

**Librería:**
- Button: radio 8px, alturas 36/44/52 y tipos nuevos Inverse e Inverse Secondary (855 variantes).
- Componentes actualizados: FAQ Item, Newsletter Banner, Feature Teaser Card, Footer (+Terms of Use, +Vimeo),
  Filter Chip, Section Eyebrow (opción sin barra), Testimonial Card, Hero Media (Portrait/Landscape),
  Course Card, Avatar, Resource Card, Lesson Navigation Bar, Mark Complete, Lesson Label, Multi-action Banner,
  Promo Banner, Related Questions Card, Calendar (fluido + opción sin encabezado), Text Input.
- Componentes nuevos: Filter Bar, Search Field, Sort Menu, Section Header, Photo CTA Banner, Split CTA Banner,
  Outline Step, Course Mini Card, Instructor Line, Event List Item, Takeaway Card, Session Card, Video Card,
  Action Card, Topic Resource Card, Icon/vimeo, Partner Logo/Staff Guidance (placeholder).
- Componentes nuevos (2 de octubre): Icon/download, Icon/print.
- Action Card: el título ahora hace salto de línea (antes se salía de la tarjeta en móvil).
- Variable nueva: Accent Colors/Live (#52BD95).

## Pendiente

1. **Limpieza de la librería:** ordenar los component sets cuyas variantes crecieron y quedaron encimadas;
   revisar colores enlazados a variables que puedan verse negros en miniaturas.
2. **Logo de Staff Guidance:** subir `src/imports/StaffGuidance.png` al componente
   Partner Logo/Staff Guidance (desde aquí no se pudo: la red bloquea `mcp.figma.com`; se puede arrastrar a mano
   en Figma o permitir ese dominio en la configuración del entorno).
3. **Guías:** documentar en `docs/guidelines` los componentes nuevos (Filter Bar, Section Header, botones Inverse,
   etc.) y regenerar los PDF.
