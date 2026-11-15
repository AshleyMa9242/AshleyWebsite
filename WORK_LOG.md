# Portfolio implementation log

## Left navigation and browser title

- Moved desktop navigation into a dedicated sticky left grid column, following Ashley’s supplied reference. The main content and footer share the right column; narrower and short viewports retain the top navigation. This explicitly requested change supersedes the original top-navigation brand example.
- Kept one native navigation tree and its visible keyboard focus. The sidebar has viewport-bounded height and can scroll if text enlargement requires it.
- Updated the browser title to “Ashley Ma — Design × Front-end × AI”, retaining the A favicon.
- Consulted the navbar guidance for semantic navigation and viewport constraints. No JavaScript or dependencies were added.
- Validation: git diff --check passed and the mechanical UI detector returned no findings. Browser rendering and keyboard checks remain unverified because the browser capture facility was unavailable in this session.

1. Inspected the project tree, README, HTML, CSS, brand guidelines, and logo metadata to retain the buildless stack and existing assets.
2. Read ub-mode and the relevant Figma, web, and UI skill guidance to establish the implementation workflow.
3. Requested Figma page context; the page request required a selection. Read the brand frame linked by the guidelines instead, including its portfolio mockup and screenshot.
4. Compared the mockup with the guidelines and paused over margin, spacing, text width, and handmade-detail differences. Ashley chose the Markdown guidelines.
5. Retrieved responsive-design guidance to inform bounded fluid typography and reserved cover proportions.
6. Rebuilt index.html with semantic navigation, hero, facts, work placeholders, About/Resume placeholders, and a contact footer. Missing facts and links remain explicitly unverified.
7. Replaced assets/style.css with shared brand tokens, responsive layout, limited handmade covers, visible focus, skip-link styling, and reduced-motion support. Preserved the logo SVG without editing it.
8. Ran the mechanical design detector and Git whitespace checks. Checked local anchor destinations/assets and logo preservation. No automated UI test was added for this static presentational change; rendered verification was attempted instead.
9. Started a localhost preview server. Browser preview failed because the browser access host was unavailable, leaving rendered and keyboard QA outstanding.
10. Checked for Crapper, Dryer, and Mutator; none were available on PATH. Added no client-side logic requiring function complexity or mutation analysis.
11. Updated README with preview instructions, design decisions, content needs, and verification limits. No worktrees or user files were removed. Changes remain local and uncommitted; no push or deployment was performed.

## Resume content update

1. Located assets/Ashley_Ma_Resume.docx and extracted its paragraphs and hyperlink relationships without changing the document.
2. Read document guidance and retrieved accessibility guidance for native, keyboard-operable download and email links.
3. Replaced current/previous facts and biography placeholders with resume-supported education and experience. Kept development, UX, and product management labeled as coursework, and graduation as expected.
4. Named the two existing project cards roopy and Endpaper Talks Book Club and added source-supported descriptions. Kept cover imagery and case studies pending; did not infer project years from employment ranges.
5. Added the original DOCX download and supplied email address. Kept the unapproved draft hero and missing social profile links clearly marked.
6. Added small styles for project descriptions, the branded download link, and wrapping email text. Preserved existing assets and responsive structure.
7. Updated README content requirements. Verified local link targets, fragment targets, valid DOCX archive, and email/project/education names against the source. Mechanical design detector returned no findings and git diff --check passed. Browser QA remains unavailable as previously recorded; no rendered or keyboard-test results are claimed.

## A favicon

1. Inspected the original SVG and identified its explicit A path. Checked modern-web-guidance for favicon metadata; the catalog had no directly applicable favicon guide.
2. Created assets/brand_assets/favicon.svg using the unchanged A path and even-odd fill rule, centered in a square viewBox with Ink on Fog. Preserved the source logo.
3. Linked the SVG favicon from index.html. No dependencies or client-side logic were added.
4. The sips renderer could not decode SVG; Quick Look successfully produced a temporary thumbnail. Visually inspected the A shape and padding. Verified the exact path matches the source, the favicon link resolves locally, the original logo is unchanged, and git diff --check passes. Browser tab rendering remains unverified.

## Separate featured, commercial, and non-commercial projects

1. Read the current HTML/CSS and images inventory; used the Figma design-to-code and responsive-design guidance for this update.
2. Created a Figma session for 0Kah4E4QKn26i84m65Q9Gw. The page-level context required a selection, so inspected metadata and read individual visual-design, social-media, and exhibition pages with their screenshots. Used their content as reference while retaining the approved Markdown brand styling.
3. Asked which non-commercial work to include. Ashley confirmed poster studies only, excluding packaging and Fender.
4. Inspected a numbered contact sheet of local imagery to match each asset to the Figma examples. No matching Sheridan Ride or Super Plant cover was found; retained honest placeholders and did not infer project years from employment dates.
5. Prepared 16 JPEG derivatives (maximum 1200px, quality 82) in assets/images/portfolio, preserving all original assets and recording their source filenames.
6. Moved Sheridan Ride and a blank Coming soon card to the first section. Created an earlier commercial section in the old Figma sequence: roopy, Super Plant, Endpaper Talks. Added an independent non-commercial poster section in its Figma sequence, without packaging or Fender.
7. Added concise source-backed project summaries and visual descriptions for poster studies. Kept artwork compositions intact with contained images, semantic image links, alt text, explicit dimensions, and lazy loading. Kept the two-column desktop and single-column mobile layout and the existing focus treatment.
8. Attempted browser inspection: the browser host was unavailable; native Chrome showed the page title/URL but returned blank page captures. Returned the user's preview to http://127.0.0.1:5500/index.html#work. Visual/mobile/keyboard verification remains unconfirmed.
9. Static checks passed for unique IDs, fragment destinations, local image and link targets, alt text, and dimensions. All 16 project images total about 3.3 MB. The mechanical design detector reported no findings and git diff --check passed. No new JavaScript or runtime dependencies were added. Updated README and image provenance notes.

## Sheridan Ride Figma content

1. Continued the existing Figma session for the supplied Sheridan Ride file and inspected its six top-level mobile screens.
2. Retrieved high-fidelity context and screenshots for the route search, ride results, and booked ride details screens. Confirmed the visible product flow before writing any project copy.
3. Downloaded those three Figma node exports into `assets/images/portfolio` and verified that each is a non-empty 402 × 874 PNG.
4. Replaced the Sheridan Ride placeholder with a linked three-screen composition inside the existing Lavender handmade cover. Kept the website brand treatment while preserving the UI artwork exactly as exported.
5. Added a concise description limited to capabilities visible in the supplied Figma file and linked both the cover and caption to that design. No role, year, research, outcome, or product-launch claim was inferred.
6. Kept all three below-the-fold images lazy-loaded with explicit dimensions and empty alternative text because the enclosing link provides the accessible name and the adjacent caption explains the project.
7. Rendered the page at 1440 × 1400 in headless Chrome and visually checked the selected-work section. The three screens retain their aspect ratios, remain legible, and sit correctly beside Coming soon. A requested 320px Chrome run was not approved, so the narrow layout was checked statically against its 272px content width; rendered mobile verification is still outstanding.

## Project pages and personal-exploration layout

1. Treated the supplied PDF as visual reference only and read the two supplied Notion pages as project evidence. Reused the existing Figma-derived captions and artwork sequence.
2. Replaced Coming soon with Case Study Workspace and removed Super Plant completely.
3. Added one shared `project.html` detail template with distinct project URLs. Sheridan Ride and Case Study Workspace use the supplied Notion content; other project pages use only existing Figma text and local artwork.
4. Added every available roopy category and image: two fragrance campaign pieces, Skin Tea Break, and weekend playlist.
5. Rebuilt Personal explorations as a responsive four-, three-, two-, and one-column flow. Each card is a single native link, retains DOM reading order, and preserves the image's intrinsic ratio.
6. Removed the Fog rectangle from the A favicon so the SVG background is transparent.
7. Verified every homepage project ID has matching data, every referenced local asset is non-empty, JavaScript parses, and `git diff --check` passes. Rendered mobile and keyboard checks remain outstanding.

## Remove Kandinsky

1. Removed the Kandinsky card from Personal explorations and removed its detail-route data.
2. Kept the image files unchanged with the other preserved source assets.

## Add remaining design studies

1. Added Fender Editorial, Tea Drink Packaging, and Cat Climbing Frame to Personal explorations.
2. Added a detail route and optimized image derivatives for each project while preserving the source files.
3. Kept Kandinsky excluded as requested.

## Place all source artwork

1. Mapped every distinct visual in `oldPortfolioAssets` to its related project page.
2. Added the remaining Christmas graphic and Cat Climbing Frame pattern to their existing galleries.
3. Added four exhibition photographs and two unique long-form articles to Endpaper Talks; each duplicated article export is displayed once.
4. Converted HEIC and PSD artwork to browser-ready JPEG derivatives while preserving all original files.

## Refine Endpaper Talks and personal work

1. Removed Fender Editorial and Tea Drink Packaging from the homepage and project routes while preserving their original and optimized image files.
2. Replaced the two full-length Endpaper Talks article exports with four source-accurate 9:16 crops, without device frames.
3. Left the exhibition photograph conversion unchanged after Ashley paused the black-image repair.

## Restore Endpaper Talks exhibition photographs

1. Confirmed the renamed `.jpg` source files still contained HEIC image data.
2. Rendered the four sources through macOS Quick Look, then encoded browser-compatible JPEG derivatives.
3. Visually checked all four restored images and updated their intrinsic dimensions in the project page.

## Add packaging and roopy editorial work

1. Added four packaging graphics to a new Personal explorations project and used a responsive 2 × 2 square collage for its homepage cover.
2. Cropped two `Runse` and four `Seeing Women` sections from the original WeChat article images at 828 × 1472.
3. Added all six editorial crops to the roopy project page with responsive two-column and single-column layouts.

## Separate name and tagline

1. Split the hero heading into `<h1>Ashley Ma</h1>` and a `.tagline` paragraph so the name and tagline are not read as one heading.
2. Styled the tagline at 1.25rem in the existing secondary text colour token.

## Import embedded images in Figma portfolio order

1. Read the Figma portfolio page (0Kah4E4QKn26i84m65Q9Gw, node 1:28) and matched each file in `assets/images/embedded-images` to its page.
2. Created 1200px JPEG derivatives (quality 82) in `assets/images/portfolio`; originals are unchanged.
3. Restored Super Plants between roopy and Endpaper Talks, following the Figma commercial sequence, with seven images and the Figma project text.
4. Reordered roopy to the Figma sequence: brand content, Skin Tea Break, WeChat editorial layouts, fragrance campaign (with the MBTI graphic), and weekend playlist.
5. Did not import candidates 17 and 18 (full-length WeChat articles already shown as crops), the two `嵌入图片` files (duplicates of the existing fragrance and playlist images), or candidate 44 (a personal photo not in the Figma portfolio).
6. JavaScript parses, every referenced image exists, and `git diff --check` passes. Rendered the homepage, roopy, and Super Plants pages at 1440px in headless Chrome; mobile was not rendered.

## Add Skin Tea Break videos

1. Matched the two new videos in `assets/videos` to the Skin Tea Break plate and hand cream posts, and replaced their two screenshot images on the roopy page.
2. The originals are HEVC, which Firefox and some Windows browsers cannot play. Made 720 × 1280 H.264 copies with macOS `avconvert` (`roopy-skin-tea-invitation.mp4` 4.5 MB, `roopy-skin-tea-launch.mp4` 26 MB) and kept the originals.
3. The videos use `preload="none"`, a poster frame, native controls, `playsinline`, and an accessible label, so nothing downloads until play. The moov atom is at the start, so playback can begin while the rest downloads.
4. Removed the two now-unused screenshot derivatives.

## Update Sheridan Ride screens

1. Replaced the three earlier Figma exports with Ashley's six new screens in `assets/images/sheridanRide`, used directly because the PNGs are already small (25–95 KB).
2. The detail page shows all six screens in file order. The homepage cover uses home, search results, and booked ride details.
3. File names 05 and 06 do not match their content: 05 is the passenger's booked ride and 06 is the driver's posted ride. Alt text follows the content, and the file names are unchanged.
4. Deleted the three earlier exports and their provenance rows.
5. Several new screens have transparent backgrounds, so the cover and gallery give them a white background. Rendered both pages at 1440px in headless Chrome.

## Reconnect updated Sheridan Ride screens

1. Ashley replaced the six screens with full 804 × 1748 exports and renamed them: 03 confirm ride, 04 booked ride details, 05 post a ride, 06 posted ride.
2. Updated paths, dimensions, and alt text on the detail page, and the homepage cover (home, search results, booked ride).
3. The new exports are opaque, so the white-background CSS for transparent screens was removed.

## Realign homepage with the Figma "Ash" visual identity

1. Compared the site with Figma file SWm0HNjwfSYC04z9eui5I1 ("08 — In use — portfolio home") and the reference site Ashley supplied. Ashley chose a slim margin nav, one merged work grid, and kept the name + tagline hero text.
2. Desktop nav (≥1001px wide, ≥481px tall) is now a small fixed column inside the 120px page margin. The page is back to full content width (max 1200px), with the logo above the content as in Figma. Below 1001px the existing top nav is unchanged.
3. Merged "Earlier visual work" into "Selected work" in Figma order: Sheridan Ride, roopy, Endpaper Talks, Super Plants, then Case Study Workspace (Coming soon).
4. Every card now uses the hand-cut paper (Figma 587 × 360 ratio, −1.4° / +1.1° tilt), a −3° Daiquiri Green tape strip, and lavender, mist, or ink colour blocks. Labels follow Figma: "Name / Category · Year" on one line. Card descriptions were removed and remain on the project pages.
5. The right column is offset 96px to create the staggered layout while DOM, reading, and Tab order stay row by row. Phones use a single column with no offset.
6. Removed the draft hero line and the Sheridan screen shadows (Figma: no shadows), plus now-unused cover CSS.
7. Rendered the homepage at 1440, 1100, and 500px and a project page at 1440px in headless Chrome. Chrome's headless minimum width is about 500px, so 320–390px phones were not rendered.

## Project page layout and remove Super Plants

1. Ashley approved a preview. Project galleries are now at most 900px wide (the same as the text column) with 3 columns by default. Galleries of 2 images use 2 columns, and galleries of 4 or 7 use 4, so no row ends with a lone image.
2. Project section headings now use the Figma H2 style (32px, 120% line height).
3. Removed Super Plants from the homepage and the project routes at Ashley's request. Its image derivatives and provenance rows are kept.
4. Case Study Workspace now takes the fourth grid slot and the Figma ink cover.
5. Rendered the homepage and the Sheridan Ride page at 1280px in headless Chrome.

## Sheridan Ride headings only, LinkedIn link

1. On the Sheridan Ride page, only Background & insight keeps its text. The other five sections show only their headings, and their text is kept inside HTML comments in `project.js` so it can be restored. The file is not committed yet, so deleting the text would have lost it.
2. Added Ashley's LinkedIn profile next to the email address in the footer of the homepage and project pages, and removed the "awaiting confirmation" note.

## Project page table of contents

1. Following the reference site's project pages, the left nav on project pages now shows "← Work" and a table of contents: Overview plus each section heading. `project.js` builds it from the rendered sections and gives each section an id and `tabindex="-1"`.
2. The current section gets a small dot and `aria-current="true"`, updated by an IntersectionObserver. Native `scroll-target-group` is Chrome-only, so it was not used.
3. On desktop the project content starts 160px further in, so the headings fit beside it. Narrow and short screens keep only "← Work" in the top nav.
4. Verified at 1280px: the default state renders correctly, the 600px layout shows only "← Work", and the highlighted item moves to Problems and to User flow at taller viewports (`--dump-dom`).

## Fixed logo, back link, and headings-only project text

1. On desktop (the same breakpoint as the side nav), the ASH logo is fixed top-left at 24px, aligned with the nav, on every page. Ashley approved the preview and kept the logo at 96px.
2. Project pages have a "← Back" link under the logo. It uses `history.back()` when the previous page is on this site, and otherwise links to `index.html#work`. The "← Work" item was removed from the table of contents. On narrow screens the back link sits in the top header.
3. Other projects now match Sheridan Ride: the first section keeps its text, and later sections show only their headings, with text kept in HTML comments. Case Study Workspace hides five sections of text and roopy hides the Skin Tea Break intro. All galleries stay. The table of contents is generated from the sections, so it stays in sync.
4. Rendered the homepage, Case Study Workspace, and roopy at 1280px and roopy at 600px in headless Chrome.

## Simplify homepage text

1. The hero facts are now the single summary of study, experience, and focus. The university name moved into the Previously fact so it is not lost.
2. About is reduced to what the hero does not already say: background and coursework skills. The heading is now "About", and the repeated focus line, study, experience, and degree sentences were removed.
3. Resume is just the download button. The repeated "Resume" heading, the filler line, and the now-empty divider were removed.
4. Rendered the hero and About section at 1280px in headless Chrome.

## Restore the Figma homepage layout

1. The homepage is back to the Figma top bar: logo on the left, links on the right, not fixed. The fixed logo, back link, and contents nav now apply only to project pages, through `body.project-page`.
2. Cards are back to aligned Figma rows (40px row gap, 24px column gap). The staggered offset was removed, and the alternating tilt and tape position were kept.
3. Hero: the name and the two-line tagline ("Designed to look good, / Built to work well.") form one block 8px apart. The note, title block, and facts are 24px apart, and there is 120px between the nav and the hero.
4. Following Figma, the footer email link text is now "Email", on both page types.
5. The "Selected work" heading had already been removed from the markup, which left `aria-labelledby` pointing at nothing. It is now `aria-label="Selected work"`, and the visible heading was not re-added.
6. Rendered the homepage at 1360px (next to the Figma frame) and at 500px in headless Chrome.
7. Design-hook triage: added a visually hidden `<h2>Selected work</h2>` so the heading order goes h1 → h2 → h3 again, with no visual change. The tight-leading finding was suppressed for index.html (`.impeccable/config.json`) because the Figma type scale specifies 105–110% line height for display and H1 text.

## Reapply homepage edits after a save conflict

1. A VS Code save overwrote index.html with an older editor copy. Reapplied the hero title block, the university in the facts, the simplified About and resume, and the footer "Email" text.
2. The editor copy restored the visible "Selected work" heading, so the visually hidden heading and its CSS were removed. Heading order is h1 → h2 → h3.

## One page frame for all pages, fixed top bar, work grouped by discipline

1. Ashley approved option A and the fixed top bar. Project pages now use the homepage's Figma top bar (logo, Work, About, Resume, Contact). "← Back" and the table of contents sit in a 200px sticky left rail inside the same 1200px frame, so the logo, rail, and footer share the homepage's left edge.
2. On desktop (≥1001px wide, ≥481px tall) the top bar is sticky on every page, and section anchors have `scroll-margin-top: 160px` so jumps land below it. Narrow screens keep a static top bar, and project pages show only the back link above the title.
3. Selected work is now split into UI/UX (Sheridan Ride, Case Study Workspace) first and Visual design (roopy, Endpaper Talks) second. Group titles use the Figma caption style as h3, and card titles became h4 with no visual change. Case Study Workspace now uses mist and Endpaper Talks uses ink, so each group has one strong cover.
4. Removed the old fixed-rail CSS and `body.project-page`. `project.js` now fills `.toc` in the rail.
5. Rendered the homepage at 1280 and 500px and Sheridan Ride at 1280 and 600px in headless Chrome. Sticky scrolling can't be captured in headless Chrome and was not visually verified.

## Remove Resume from the top nav

1. At Ashley's request, the top nav on the homepage and project pages is now Work, About, Contact. The resume download stays in About.

## Hero facts match Figma

1. The Currently and Previously text now matches the Figma Facts node (10:117) word for word, with both lines in ink. Focus was already identical. This drops the expected graduation date and the university name from the homepage.

## About one-liner

1. Replaced the "Still working on this" placeholder in About with the line Ashley chose: "Half designer, half developer, fully obsessed with the details in between."

## New hero line

1. Replaced the tagline with Ashley's chosen line: "A product designer who can design it, code it, and make it feel right."
2. The name stays at Figma Display (72px Light Italic). The line now uses the Figma H2 scale (32px Light, 1.25 line height, max 760px, secondary colour) with a 16px gap, so it fits in two lines on desktop and three at 500px.

## Fix content showing beside the sticky top bar

1. The sticky header background only covered the 1200px frame, so the tilted and torn edges of the covers showed beside it while scrolling. A `border-image` fill now paints the header background edge to edge without widening the page.
2. Verified with real scrolled screenshots (`scrollshot.mjs` in the scratchpad drives Chrome through the DevTools protocol) on the homepage at 1150px and on Sheridan Ride at 700px, both at 1280px wide. Nothing shows beside or through the bar, and the project rail stays pinned.
3. Ashley rejected the lavender main-colour previews, so no colour changes were made.

## Hero fills the first screen

1. `.hero` now has `min-height: calc(100dvh - 220px)` with its content centred vertically, so the first screen shows only the top bar and hero, and Selected work starts below the fold.
2. Verified with real browser captures at 1280 x 800, 1440 x 900, and 500 x 860: no part of Selected work is visible on load.

## Case Study Workspace cover

1. Replaced the "Save as you go" mock card on the Case Study Workspace cover with a single "Coming soon" label in the Figma placeholder caption style (13px semibold caps, secondary ink for AA contrast). It is hidden from screen readers because the card meta already says "Coming soon". Removed the unused `.workspace-flow` CSS.

## Resume as a text link

1. The resume download is now a plain underlined text link using the footer `contact-link` style (like LinkedIn) instead of a black pill button. Removed the `.resume-download` CSS.

## Add Photo Search App (coming soon)

1. Added Photo Search App as the third UI/UX card (mist cover with a "Coming soon" label, meta "Product concept · Coming soon"), from Ashley's Notion page for the IMM PM product opportunity assessment.
2. Added the `photo-search-app` route. The intro and The problem use the Notion text. The solution shows its heading only, with its text kept in a comment, following the other projects.
3. Verified the route data loads, and captured the homepage card and the project page at 1280px in a real browser.

## Sheridan Ride status

1. The Sheridan Ride card meta is now "UX/UI · 2026 · In progress".

## Drink Packaging cover without white edges

1. The homepage collage used square cells with `object-fit: contain` on white, which letterboxed the 859 x 1200 artwork. Cells now follow the artwork ratio (`height: auto`). The white fill and the mist frame were removed to match the other exploration cards. No artwork is cropped.
2. Verified in a real browser capture at 1280px.
