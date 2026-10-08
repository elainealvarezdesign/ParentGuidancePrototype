# Avatar and PersonLine

`src/components/ui/Avatar.tsx` · Figma: **Avatar**, **Instructor Line**

`Avatar` shows a photo or the person's initials on sage (titles like "Dr." are skipped). It is decorative
(`aria-hidden` / `alt=""`) because the name is always written next to it.

| Prop | Values | Default |
|---|---|---|
| `name` | full name | required |
| `photo` | URL | initials when missing |
| `size` | `xs` 28, `s` 32, `m` 36, `l` 48, `xl` 64 | `m` |
| `ring` | white ring + shadow, for avatars on photos | — |

`PersonLine` = avatar + name + credential (`name`, `detail`, `size`, `tone: default | inverse`). Used in heroes
and cards to credit a therapist or instructor.
