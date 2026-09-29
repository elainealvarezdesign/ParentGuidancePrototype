# 2. Botones

Hoy el prototipo tiene botones con distintos colores (teal, navy, blanco), radios (8px, 12px, píldora) y
alturas. Esta guía los reduce a un solo sistema, partiendo del botón más repetido: el de `UnifiedCard`
(teal, 8px, Poppins semibold 14px, hover teal dark).

## 2.1 Estilos

| Estilo | Aspecto | Cuándo |
|--------|---------|--------|
| **Primary** | Fondo `pg-teal`, texto blanco; hover `pg-teal-dark` | La acción principal de la sección: "Ver curso", "Reservar sesión", "Enviar pregunta" |
| **Secondary** | Fondo blanco, borde 1px `pg-teal`, texto `pg-teal-dark`; hover fondo `pg-tint` | Acción de apoyo junto a un Primary ("Cancelar", "Ver detalles") |
| **Tertiary** | Solo texto `pg-teal-dark`, subrayado en hover | Acciones de baja prioridad: "Ver más", "Saltar" |
| **Inverse** | Fondo blanco, texto `pg-navy`; hover `pg-cream` | Acción principal **sobre fondos navy o teal** |
| **Inverse secondary** | Fondo `white/5`, borde `white/20`, texto blanco; hover `white/10` | Acción de apoyo sobre fondos oscuros |

> **Un solo Primary por sección.** Si hay más acciones, pasan a Secondary o Tertiary.

El botón navy (`#1c3243`) del buscador pasa a Primary teal, porque el navy es el color del texto y de la
navegación, no de la acción. Así el usuario aprende que el teal significa "puedo hacer clic".

## 2.2 Tamaños

| Tamaño | Alto | Padding | Texto | Cuándo |
|--------|------|---------|-------|--------|
| **S** | 36px | `px-4` | 14px / 600 | Solo desktop, en UI densa (filtros, acciones de fila) |
| **M** | 44px | `px-5` | 14px / 600 | **Por defecto** |
| **L** | 52px | `px-7` | 16px / 600 | CTA de hero y pantallas clave en móvil |

- Radio `rounded-pg-md` (8px) en todos los tamaños.
- La forma **píldora** (`rounded-full`) se reserva para chips, badges, filtros y el buscador. No para botones
  de acción.
- Icono opcional a la derecha (flecha `→` o icono lucide de 16px) con `gap-2`. Si el icono es decorativo,
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

## 2.4 Implementación de referencia

```tsx
// src/app/components/Button.tsx
import { motion } from "motion/react";
import { cn } from "./ui/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pg-md font-semibold transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pg-teal-dark focus-visible:ring-offset-2 " +
  "disabled:cursor-not-allowed";

const styles = {
  primary:   "bg-pg-teal text-white hover:bg-pg-teal-dark disabled:bg-pg-line disabled:text-pg-slate",
  secondary: "bg-white border border-pg-teal text-pg-teal-dark hover:bg-pg-tint disabled:border-pg-line disabled:text-pg-slate",
  tertiary:  "text-pg-teal-dark hover:underline underline-offset-4 disabled:text-pg-slate",
  inverse:   "bg-white text-pg-navy hover:bg-pg-cream focus-visible:ring-white focus-visible:ring-offset-pg-navy",
  "inverse-secondary": "bg-white/5 border border-white/20 text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-pg-navy",
};

const sizes = {
  s: "min-h-9 px-4 text-sm",
  m: "min-h-11 px-5 text-sm",
  l: "min-h-13 px-7 text-base",
};

export function Button({ variant = "primary", size = "m", loading, className, children, ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      aria-busy={loading || undefined}
      disabled={props.disabled || loading}
      className={cn(base, styles[variant], sizes[size], tertiaryPadding(variant), className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

const tertiaryPadding = (v) => (v === "tertiary" ? "px-1 min-h-0" : "");
```

El proyecto ya incluye `src/app/components/ui/button.tsx` (shadcn), pero con los colores por defecto de
shadcn. Se puede adaptar ese archivo con estas variantes en lugar de crear uno nuevo.

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
