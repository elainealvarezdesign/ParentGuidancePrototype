# CourseAbout

`src/sections/CourseAbout.tsx` · Used on: Course overview

White card: "About this course" heading, paragraphs (`RichText`, **bold** allowed), then the instructors that
have a bio (avatar, name, credential, one sentence) in up to three columns.

| Field | Type | Rules |
|---|---|---|
| `title` | string | |
| `paragraphs` | `RichText[]` | 1–4 paragraphs. |
| `instructors` | `Instructor[]` | Only those with `bio` are listed. |
