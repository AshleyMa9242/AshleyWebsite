# Ashley portfolio

A buildless HTML/CSS portfolio based on the ASH brand guidelines and the Figma portfolio mockup. The Markdown guidelines take precedence, as confirmed by Ashley.

## Preview

From this folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. No installation or build is needed. Google Fonts requires an internet connection; system fallbacks remain available.

## Content needed

- Approve or replace the visibly marked draft hero sentence.
- Supply the Sheridan Ride role, process, outcomes, and confirmed project year if those details should be added.
- Confirm LinkedIn and GitHub profile links.

Content is sourced from `assets/Ashley_Ma_Resume.docx`, the supplied Figma files, and the two supplied Notion project pages. Sheridan Ride and Case Study Workspace have full project pages. roopy includes fragrance campaigns, WeChat editorial layouts, Skin Tea Break, and weekend playlist content. Super Plant has been removed. Employment date ranges are not presented as project dates. The draft hero still needs approval.

## Design decisions

120px desktop margins, 24px mobile margins, a 1200px maximum page width, a 640px text measure, and 160px section spacing follow the Markdown guidelines. The two featured cards and one handwritten note keep the handmade treatment limited; the lower artwork galleries stay unrotated so the work is legible. The original ASH logo asset is unchanged; CSS renders it in Ink. Project-cover displacement affects only the background, never its text. Mobile navigation wraps without a JavaScript menu. The layout includes visible focus, a skip link, and reduced-motion handling.

## Verification

- Impeccable mechanical detector: no findings.
- Git whitespace check: passed.
- HTML anchor destinations and local assets: checked.
- Original logo: unchanged.
- JavaScript syntax, local assets, project routes, and Git whitespace: checked.
- Rendered mobile and keyboard interaction still need browser verification.

See WORK_LOG.md for the implementation record.

## Project sections

Desktop navigation sits in a sticky left column, with the logo above the vertical links. At 1000px and below, or on short viewports, navigation remains in the page flow at the top. The browser title is “Ashley Ma — Design × Front-end × AI”.

- Selected work: Sheridan Ride, then Case Study Workspace.
- Earlier visual work: roopy, then Endpaper Talks. Super Plant is removed.
- Personal explorations: Standing Bar, Nobuyoshi Araki, Hokusai, Song of the Failure Cat, Christmas graphics, Disco Ball, Candy, Drink Packaging, and Cat Climbing Frame in a responsive multi-column layout. Kandinsky, Fender Editorial, and Tea Drink Packaging remain excluded.

Every project card links to a project route in `project.html`. Project summaries follow the supplied Figma, Notion, and resume content without adding dates, roles, or outcomes. Original files remain in `assets/images/oldPortfolioAssets`; optimized derivatives are in `assets/images/portfolio`.
