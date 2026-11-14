# ASH — Brand Guidelines

Brand: **ASH** (Ashley Ma). Version 4, November 2026.
Use: reference for building Ashley's portfolio website.
Design source: Figma file "Ash", frame "ASH — Visual Identity v4"
https://www.figma.com/design/SWm0HNjwfSYC04z9eui5I1/Ash?node-id=9-28

If this file and the Figma file disagree, ask Ashley before you choose.

---

## 1. Principles

1. **Clear.** One idea per section. A visitor knows who Ashley is and what she does in five seconds.
2. **Simple.** Empty space is the main material. Contrast is soft, not loud. One main font, two colors. No decoration without a job.
3. **A little handmade.** The rough ASH logo leads. Rough edges, a slight tilt with tape, and a short handwritten note add warmth. Use them once or twice per page, not everywhere.

When two rules conflict, **Clear** wins, then **Simple**, then **Handmade**.

Not wanted: stiff template layouts, crowded pages with many fonts and stickers, illustration, gradients, shadows, red.

---

## 2. Color

| Token | Name | HEX | Pantone | Use |
|---|---|---|---|---|
| `--color-lavender` | Lavender Oil | `#C3A6CD` | 15-3615 TCX | Main color. Blocks, project covers, large surfaces |
| `--color-green` | Daiquiri Green | `#C9D77E` | 12-0435 TCX | Accent only. Tags, tape, highlights |
| `--color-ink` | Ink | `#1A1A1A` | — | All text, logo, primary button |
| `--color-bg` | Fog | `#F5F5F5` | — | Page background |
| `--color-mist` | Mist | `#E8E8E8` | — | Neutral placeholder blocks |
| `--color-white` | White | `#FFFFFF` | — | Only for text and the logo on Ink |
| `--color-line` | Line | `rgba(26, 26, 26, 0.2)` | — | 1 px dividers and outlines |

```css
:root {
  --color-lavender: #C3A6CD;
  --color-green: #C9D77E;
  --color-ink: #1A1A1A;
  --color-bg: #F5F5F5;
  --color-mist: #E8E8E8;
  --color-white: #FFFFFF;
  --color-line: rgba(26, 26, 26, 0.2);
  --color-text-secondary: #444444;
  --color-text-muted: #6B6B6B;
}
```

Rules:

- Page ratio is about 75% Fog, 15% Lavender, 8% Ink, 2% Green.
- The page background is Fog, a very light gray. Do not use a pure white page.
- **Text is always Ink** (or the two gray text tokens). Never set text in Lavender or Green.
- Ink text is safe on Fog, Mist, Lavender and Green.
- White text is allowed only on Ink.
- Do not add other colors. Do not use tints, gradients or shadows.

---

## 3. Typography

| Role | Font | Source |
|---|---|---|
| Main font (headings and body) | **Nunito Sans** | Google Fonts |
| Accent (handwritten notes only) | **Gaegu** Bold | Google Fonts |

```html
<link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@700&family=Nunito+Sans:ital,opsz,wght@0,6..12,300;0,6..12,400;0,6..12,600;1,6..12,300&display=swap" rel="stylesheet">
```

Type scale (desktop):

| Style | Size / line height | Weight | Letter spacing | Use |
|---|---|---|---|---|
| Display | 72 px / 105% | 300 italic | -2% | Home hero sentence |
| H1 | 48 px / 110% | 300 | -1.5% | Page and section titles |
| H2 | 32 px / 120% | 300 | -1% | Project titles |
| H3 | 22 px / 130% | 600 | 0 | Small headings |
| Body L | 20 px / 150% | 400 | 0 | Intro paragraphs |
| Body | 16 px / 150% | 400 | 0 | Default text |
| Caption | 13 px / 140% | 600, uppercase | 8% | Labels, meta |
| Note | 24 px / 120% | Gaegu 700 | 0 | Handwritten notes |

Rules:

- Headings are **light (300), not bold**. The difference between headings and body comes from **size**, not from heavy weight.
- Only the Display style (the hero sentence) is italic.
- Do not use weights above 600 anywhere. The logo is the only heavy element on the page.
- Text is left-aligned. One text column is at most 640 px wide.
- On mobile, scale Display to about 40 px and H1 to about 32 px.
- Gaegu rules are in section 7.

---

## 4. Logo

File: `assets/brand_assets/ASHlogo.svg` (original vector, 1263 × 515).

- **One color only:** Ink or White. No gradients, outlines or shadows.
- On Fog, Mist, Lavender and Green, use the Ink logo.
- On Ink and on dark or grainy photos, use the White logo.
- **Clear space:** ¼ of the logo height on every side.
- **Minimum size:** 64 px wide on screen. Below that, use the letter "A" from the logo as the favicon.
- Do not stretch, rotate, redraw or recreate the logo with a font. Always use the SVG file.
- To color it in code, set the SVG paths to `fill="currentColor"` and control it with CSS `color`.

---

## 5. Layout

- Grid: 12 columns, max width 1200 px, gutter 24 px.
- Page margin: 120 px on desktop, 24 px on mobile.
- Spacing scale (px): 4, 8, 16, 24, 40, 64, 96, 160.
- Use **160 px** between page sections. Empty space is part of the design.
- No shadows. Separate areas with empty space or a 1 px `--color-line` divider.
- Buttons and tags have a full pill radius (`border-radius: 999px`).
- Color blocks and project covers use the rough edge from section 7, not rounded corners.

---

## 6. Components

**Navigation**
Logo on the left (about 96 px wide). Links on the right: Work, About, Resume, Contact. Body style, Ink.

**Buttons**
- Primary: Ink background, White text, pill, padding 16 px 28 px, weight 600.
- Secondary: transparent background, 1.5 px Ink outline, Ink text, same size.
- One primary button per view.

**Text link**
Ink text with a 1 px Ink underline and an arrow, for example "Read case study →".

**Tags**
Pill, padding 6 px 12 px, Caption style, Ink text. Background is Green (main tag), Lavender or Mist.

**Project card**
Cover image on top, then one line below: **Project name** (weight 600) / type · year (muted text). Covers sit in a 2-column grid with a 24 px gap. One column on mobile.

**Home page structure**
1. Nav
2. Hero: one Display sentence, then three short facts in a row (Currently, Previously, Focus)
3. Selected work: H1 title and the project grid
4. Footer: divider, "* Ashley" on the left, links on the right

---

## 7. Handmade details

Use these three details only. Each page should have at most two or three handmade moments in total.

### 7.1 Rough edges

Color blocks and project covers have a hand-cut edge, like the logo. Text, buttons, tags and inputs stay clean.

How to build it: apply an SVG displacement filter to the block, not to the text inside it.

```html
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <filter id="rough-edge">
    <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" result="noise"/>
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="7"/>
  </filter>
</svg>
```

```css
.rough { filter: url(#rough-edge); }
```

Keep the effect small (scale 5 to 8). Put captions and text outside the filtered element so they stay sharp. If the filter causes problems, use an SVG `clip-path` with an irregular path instead.

### 7.2 Tilt and tape

- Rotate project covers by 1 to 2 degrees. Alternate the direction (for example `1.4deg`, then `-1.1deg`).
- Add one tape strip at the top edge of the cover: about 96 × 28 px, Daiquiri Green, 92% opacity, rotated about 3 degrees, overlapping the edge by about 10 px.
- Never tilt text, navigation, buttons or the logo.
- On hover, a cover may straighten to 0 degrees. Keep any motion short (about 150 ms) and respect `prefers-reduced-motion`.

### 7.3 Gaegu notes

- Font: Gaegu Bold, 24 px, Ink.
- Short notes of 2 to 4 words, for example "hi, I'm Ashley" above the hero sentence, or "new!" beside a section title.
- At most two notes per page.
- Never use Gaegu for body text, headings, navigation or buttons.

---

## 8. Voice and content

- Language: English. Plain, short sentences. Friendly and direct.
- Sentence case for headings and buttons.
- Buttons start with a verb: "View work", "Read case study", "Download resume".
- Tagline: **Design × Front-end × AI**
- Hero sentence in the Figma mock: "Ashley Ma is a designer who builds for the web." This is a draft. Confirm the final wording with Ashley.

**Facts must come from Ashley's resume.** Do not invent experience, numbers, locations, links or project details. If something is missing, leave a clear placeholder and ask her. Web development, UX and product management are coursework, so do not present them as work experience.

Project names, years and links in the Figma mock are placeholders.

---

## 9. Accessibility

- Body text contrast is at least 4.5:1. Ink on Fog, Mist, Lavender and Green all pass. Soft contrast must not go below this.
- Do not use color alone to show meaning.
- All images need alt text. The logo's alt text is "ASH".
- Keyboard focus must be visible: use a 2 px Ink outline with a 2 px offset.
- The page must work at 320 px width.

---

## 10. Quick checklist

- [ ] Only Nunito Sans, plus Gaegu for at most two short notes
- [ ] Only Lavender, Green, Ink, Fog, Mist and White
- [ ] Page background is Fog, not white
- [ ] Headings are weight 300, and nothing is heavier than 600
- [ ] All text is Ink or a gray text token
- [ ] Logo is the SVG file, in Ink or White
- [ ] 160 px between sections, no shadows, no gradients
- [ ] Rough edges only on blocks and covers
- [ ] No tilted text
- [ ] No invented facts
