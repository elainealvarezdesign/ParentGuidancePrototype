/* Shared content types. Every section receives typed content; these are the building blocks.
 * Field rules (lengths, image sizes) are documented per section in docs/system/sections/. */

/** An image with its text alternative. Use alt: "" only when the image is purely decorative. */
export type Media = { src: string; alt: string };

/** A call to action. `to` = in-app route, `href` = external URL (opens in a new tab). */
export type Cta = { label: string; to?: string; href?: string };

/** Rich title: plain text plus an optional highlighted part rendered in italic bold. */
export type Title = { text: string; highlight?: string; after?: string };
