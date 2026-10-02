# Sincronización Figma ↔ prototipo — pendientes

Archivo de Figma: [Design system - PG](https://www.figma.com/design/mWOJYdAxkKGj0bWSO2ptGj/Design-system---PG)
Última sesión: 1–2 de octubre de 2026. Detalle técnico (IDs de nodos, variables y propiedades) en [`LEDGER.md`](./LEDGER.md).

## Hecho

**Pantallas existentes (24 frames, editados en el mismo lugar):** Home, Mental Health Series, Parent Coaching,
On-Demand Courses, Ask a Therapist, Ask a Therapist Detail, Get Help y Lesson (antes llamado "Course Detail",
que en realidad era la página de lección) — en Desktop, Tablet y Mobile.

**Pantallas nuevas en Desktop (fila nueva en Layouts – Desktop, y = 4200):**
Course Detail · Free Yourself, Course Detail · Milestones, Lesson · Milestones, MHS · State Select,
MHS · Events, MHS · Events (pop-up abierto), MHS · Topic, Contact Us.

**Librería:**
- Button: radio 8px, alturas 36/44/52 y tipos nuevos Inverse e Inverse Secondary (855 variantes).
- Componentes actualizados: FAQ Item, Newsletter Banner, Feature Teaser Card, Footer (+Terms of Use, +Vimeo),
  Filter Chip, Section Eyebrow (opción sin barra), Testimonial Card, Hero Media (Portrait/Landscape),
  Course Card, Avatar, Resource Card, Lesson Navigation Bar, Mark Complete, Lesson Label, Multi-action Banner,
  Promo Banner, Related Questions Card, Calendar (fluido + opción sin encabezado), Text Input.
- Componentes nuevos: Filter Bar, Search Field, Sort Menu, Section Header, Photo CTA Banner, Split CTA Banner,
  Outline Step, Course Mini Card, Instructor Line, Event List Item, Takeaway Card, Session Card, Video Card,
  Action Card, Topic Resource Card, Icon/vimeo, Partner Logo/Staff Guidance (placeholder).
- Variable nueva: Accent Colors/Live (#52BD95).

## Pendiente para mañana

1. **Legales en Desktop:** Terms of Use, Cookies Policy y Consent Documents (plantilla: encabezado LEGAL,
   título, intro, Download/Print y tarjeta con el documento; Consent con documentos desplegables).
2. **Tablet (768) y Mobile (375) de todas las pantallas nuevas:** Course Detail ×2, Lesson · Milestones,
   State Select, Events (+ pop-up en móvil), Topic, Contact Us y los 3 legales.
3. **Ajustes pequeños:**
   - Lesson · Milestones: el tiempo del reproductor debe decir "0:00 / 4:12".
   - Course Detail · Milestones: ocultar la flecha final del breadcrumb.
4. **Limpieza de la librería:** ordenar los component sets cuyas variantes crecieron y quedaron encimadas;
   revisar colores enlazados a variables que puedan verse negros en miniaturas.
5. **Logo de Staff Guidance:** subir `src/imports/StaffGuidance.png` al componente
   Partner Logo/Staff Guidance (desde aquí no se pudo: la red bloquea `mcp.figma.com`; se puede arrastrar a mano
   en Figma o permitir ese dominio en la configuración del entorno).
6. **Prototipo (código):** en móvil, la página de contenido de Mental Health Series mide 437px de ancho en una
   pantalla de 375px (scroll horizontal). Corregir.
7. **Guías:** documentar en `docs/guidelines` los componentes nuevos (Filter Bar, Section Header, botones Inverse,
   etc.) y regenerar los PDF.
