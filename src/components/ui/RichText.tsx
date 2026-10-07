import { Fragment } from "react";

/* Inline rich text for content strings (docs/system/content.md). Content files stay plain data so they can
 * come from a CMS; the only markup allowed is **bold** for one key fact and _italic_ for one stressed word. Anything richer is a new field. */

export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|_[^_]+_)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : part.length > 2 && part.startsWith("_") && part.endsWith("_") ? (
          <em key={i}>{part.slice(1, -1)}</em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
