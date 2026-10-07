# MediaPlayer

`src/components/ui/MediaPlayer.tsx` · Figma: **Video Player**

**Simulated:** there is no video file yet; play advances a fake position so states can be reviewed. The
controls are real and accessible (audit H06): the poster is one large play/pause button, the seek bar is a
native range input (arrow keys, Home/End) with `aria-valuetext` ("01:12 of 04:05").

| Prop | Type | Notes |
|---|---|---|
| `poster` | URL | 16:9 image. |
| `duration` | "m:ss" | |
| `title` | string | Used in control names: "Play video: Building Secure Attachments". |
| `accent` | `teal`, `amber` | Amber for course lessons. |

**Give it `key={item.id}`** so playback resets when the route moves to another item (audit M03).
For production, replace the internals with the real provider (e.g. Vimeo Player API) and keep this API.
Real embeds that already exist (Series welcome, topic videos) use a Vimeo `<iframe title=…>`.
