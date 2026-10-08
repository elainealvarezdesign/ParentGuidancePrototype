/* Shared content types. Every section receives typed content; these are the building blocks.
 * Field rules (lengths, image sizes) are documented per section in docs/system/sections/. */

/** An image with its text alternative. Use alt: "" only when the image is purely decorative. */
export type Media = { src: string; alt: string };

/** A call to action with exactly one destination: `to` = in-app route, `href` = URL (http(s) opens in a
 * new tab; #anchor, tel: and mailto: stay in the page). Render it with <CtaButton>. */
export type Cta = { label: string } & ({ to: string; href?: never } | { href: string; to?: never });

/** Rich title: plain text plus an optional highlighted part rendered in italic bold. */
export type Title = { text: string; highlight?: string; after?: string };

/** Plain text that may contain **bold** (one key fact) and _italic_ (one stressed word). Rendered with <RichText>. */
export type RichText = string;
