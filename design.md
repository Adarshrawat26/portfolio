# Design — Adarsh Rawat Portfolio

A locked design system for this site. Every page redesign reads this file before
emitting code. Extend or amend this file when the system needs to grow — don't
regenerate per page.

## Genre
playful

## Theme
Hum (catalog) — cream paper, three-accent palette (pear-yellow primary, sky-cyan
secondary, coral pop), rounded sans throughout, soft lifting shadows, one small
reacting character mark. See tokens below for exact values.

## Macrostructure family
- **Marketing / home page** (`/`) — Bento Grid. Stats, skills, inventions, and the
  testimonial are tiles of varying size (Hum's natural shape); Projects is the
  largest tile, built as a product-card grid (F6). Hero is a fixed-height header
  above the grid, not full-viewport.
- **Content pages** (`/workshop`, `/workshop/:slug`) — Hum's own spec rejects the
  Long Document macrostructure (not an essay theme), so content pages keep the
  same tokens but switch card-physics lever to **quiet**: hairline borders, no
  shadow, generous reading column (65ch), restrained motion. Structure is a
  simple heading + numbered step sequence (F4), not a numbered-eyebrow editorial
  layout.

## Theme tokens
- `--color-paper`      oklch(97% 0.012 95)   — cream
- `--color-paper-2`    oklch(94% 0.016 95)   — tinted band
- `--color-paper-3`    oklch(91% 0.020 95)   — deeper hover
- `--color-ink`        oklch(20% 0.012 250)  — near-black, cool tilt
- `--color-ink-2`      oklch(42% 0.014 250)  — secondary text
- `--color-accent`     oklch(86% 0.18 95)    — pear-yellow (primary actions)
- `--color-accent-deep` oklch(72% 0.16 95)   — pear edge (button shadow)
- `--color-accent-2`   oklch(62% 0.17 235)   — sky-cyan (links / hover-tint)
- `--color-accent-3`   oklch(64% 0.22 18)    — coral (one high-energy moment)
- `--color-mint`       oklch(78% 0.15 150)   — sparing (success)
- `--color-rule`       oklch(87% 0.014 95)   — hairline rule, cream-tinted
- `--color-focus`      oklch(55% 0.19 235)   — cyan focus ring

## Typography
- Display/headings: Plus Jakarta Sans, weight **700**, tracking -0.02em to -0.025em.
  (Was 600 — bumped to give headings a real ≥300-unit weight gap over body's 400,
  per the type-contrast rule. 600-next-to-500 read as a default, not a decision.)
- Body/prose: Plus Jakarta Sans, weight 400. UI meta/labels/tags: weight 500.
  Three steps total — 400 body / 500 meta / 700 heading — no other weights.
- Mono/outlier: JetBrains Mono — eyebrows, tags, stat numerals only (≤ 2 slots).
- No serif anywhere. No italic headings (emphasis = weight or accent colour).
- One scale, twelve named steps, used everywhere via Tailwind's `text-*`
  utilities (mapped to the CSS vars in `tailwind.config.js` — never
  `text-[Npx]` arbitrary values in components):
  `text-3xs`(11) `text-2xs`(12) `text-xs`(13) `text-sm`(14) `text-base`(16)
  `text-md`(18) `text-lg`(20) `text-xl`(24) `text-2xl`(28) `text-3xl`(36)
  `text-4xl`(44) `text-display-s`(clamp 30–48, page/hero h1)
  `text-display`(clamp 40–72, reserved for a future full-bleed hero).

## Spacing
4-point named scale (`--space-3xs` … `--space-4xl`) in tokens.css. Pages use
named tokens, never raw px.

## Motion
- Easings: `--ease-out`, `--ease-in`, `--ease-in-out` (standard) plus
  `--ease-spring` (bouncy, buttons/character only) and `--ease-snap` (reveals).
- Reveal pattern: one orchestrated fade+rise on load/first-view per section,
  60ms stagger, capped ~500ms total. No scroll-triggered fade on every element.
- Reduced-motion: opacity-only, ≤150ms, character mark stops pulsing.

## Microinteractions stance
- Primary buttons: push system (colour-edge shadow, press down on active) —
  see `.btn` in tokens.css. One push button per moment.
- Silent success on the contact form (checkmark label swap, no toast).
- Hover delay 800ms / focus delay 0ms on any tooltip.
- Cards: home = soft single-layer lift; content pages = no hover motion.

## CTA voice
- Primary: `.btn--pear` push button, pill radius, weight 600.
- Secondary: `.btn--outline` hairline, accent fill sweeps up on hover.
- Tertiary / inline: typographic link, cyan on hover, no box.

## Nav / footer
- Nav: N3 Side-rail — fixed left edge, rotated wordmark, dot indicators
  (replaces the old right-side dot nav).
- Footer: Ft5 Statement — one closing line + wordmark + minimal meta, with the
  existing contact form + dog photo kept as the page's one character moment.

## Per-page allowances
- Home MAY use the full multi-accent bento treatment + character pulse mark.
- Content pages MUST stay quiet — one accent (cyan) only, no bento tiles.

## What pages MUST share
- Plus Jakarta Sans + JetBrains Mono, pear/cyan/coral accent trio.
- The `.btn` push system and its two modifiers.
- Rounded-everything: 20px cards, 999px pills, 12px inputs. No square corners.
- The side-rail nav concept (content pages use a simpler back-link variant).

## What pages MAY differ on
- Card physics (home = soft lift, content = hairline-flat).
- Accent distribution (home = multi-accent bands, content = cyan-only).
- Macrostructure within family (home = Bento; content = step sequence).

## Exports
`tokens.css` at project root — imported by `src/index.css`. Single-page-app
scope; no additional export formats needed.
