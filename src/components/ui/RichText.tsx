import { Fragment } from "react";

/* Inline rich text for content strings (docs/system/content.md). Content files stay plain data so they can
 * come from a CMS; the only markup allowed is **bold** for one key fact. Anything richer is a new field. */

export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
