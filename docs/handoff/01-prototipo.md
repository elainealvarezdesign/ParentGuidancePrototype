# Prototipo — links y publicación

## Links

- **En vivo:** https://parent-guidance-prototype.netlify.app/
- **Código:** https://github.com/elainealvarezdesign/ParentGuidancePrototype (branch `main`)

## Tecnología

React + Vite + Tailwind CSS, a partir de una exportación de Figma Make. Los tokens de diseño (colores,
tipografía, radios, sombras) están en `src/styles/tokens.css`.

## Publicación

- Está publicado en **Netlify**, conectado al branch `main` del repo.
- **Cada cambio que se sube a `main` se publica solo** en el mismo link, en uno o dos minutos.
- La configuración del build está en `netlify.toml` (comando `pnpm build`, carpeta `dist`, y una regla
  para que las páginas internas no den 404 al recargar).

## Correrlo en local

```
pnpm install
pnpm dev
```

## Páginas principales

Home · Mental Health Series (eventos y temas) · Parent Coaching · On-Demand Courses (curso y lección) ·
Ask a Therapist (listado y detalle) · Get Help · Contact Us · Terms of Use · Cookies Policy · Consent Documents.
También existen dos homes alternativas: `/home-v1` y `/home-v2`.

Todas las páginas funcionan en 390, 768, 1024 y 1280px.
