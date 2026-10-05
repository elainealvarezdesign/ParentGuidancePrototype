# Design System — cómo usar la librería

**Archivo de Figma:** https://www.figma.com/design/mWOJYdAxkKGj0bWSO2ptGj/Design-system---PG

## Qué incluye

- **Fundamentos:** marca, logos de partners, colores (primitivos y roles semánticos), tipografía (Poppins),
  espaciado, radios y elevación, todo como variables y estilos.
- **Componentes:** iconos (Material Icons Outlined), botones (5 tipos × 3 tamaños), calendario y eventos,
  tags, cards, inputs y navegación, bloques de contenido, cursos y media.
- **Layouts:** todas las pantallas del prototipo en Desktop (1280), Tablet (768) y Mobile (375).

El archivo refleja el prototipo: cada token tiene su variable y cada patrón su componente.

## Usar la librería en otro archivo

1. Abrir el archivo de Figma donde se va a diseñar.
2. Ir a **Assets → Libraries** (ícono de libro).
3. Buscar **"Design system - PG"** y activarla.

## Publicar cambios

Cuando se cambia algo en la librería, los demás archivos no lo reciben hasta que se publica:
**Assets → Libraries → Publish**, escribir una descripción y confirmar.

Si al publicar aparece *Invalid assets*, normalmente es un componente con una propiedad que no está conectada
a ninguna capa: se borra la propiedad y se vuelve a publicar.

## Regla principal

Ningún color, tamaño de fuente, radio o sombra se pone "a mano": todo sale de las variables y estilos.
Si falta algo, primero se agrega como variable (en Figma y en `tokens.css` del código) y después se usa.
