const image = (src, alt, width, height) => ({ src, alt, width, height });

const projects = {
  "sheridan-ride": {
    title: "Sheridan Ride",
    category: "UX/UI · Student carpool platform",
    intro: "A student-only carpool platform that matches Sheridan students by route, time, and destination, not only by the same starting point.",
    facts: [["My role", "UX/UI Design Lead · Product Management"], ["Team", "4 people (product manager, front-end, back-end, and me)"], ["Timeline", "Fall 2026 · In progress"], ["Tools", "Figma, Notion"]],
    images: [
      image("assets/images/sheridanRide/01-home-page.png", "Sheridan Ride home screen with route search and map", 804, 1748),
      image("assets/images/sheridanRide/02-search-results.png", "Sheridan Ride search results listing four available rides", 804, 1748),
      image("assets/images/sheridanRide/03-confirm-ride.png", "Sheridan Ride confirm ride screen with route map, seats, payment, and price", 804, 1748),
      image("assets/images/sheridanRide/04-posted-ride-details.png", "Sheridan Ride booked ride details with driver and route", 804, 1748),
      image("assets/images/sheridanRide/05-post-a-ride.png", "Sheridan Ride post a ride form with seats and price per seat", 804, 1748),
      image("assets/images/sheridanRide/06-ride-details.png", "Sheridan Ride posted ride accepting requests, seen by the driver", 804, 1748)
    ],
    content: `
      <section class="case-section"><h2>The problem</h2><p>Many Sheridan students commute every day. Transit is slow, and Uber is too expensive to use daily. Drivers pay for gas alone.</p><p>Carpooling should help, but Canada is very spread out. If you only match people who start from the same place, almost nobody finds a match.</p></section>
      <section class="case-section"><h2>The key insight</h2><p>People don’t need the same starting point. They only need to be going the same way. So we match students along the route, not only by where they start.</p></section>
      <section class="case-section"><h2>What I did</h2><h3>Design</h3><ul><li>Designed wireframes for the main flows</li><li>Designed the full UI in Figma</li><li>Ran design reviews with the team</li></ul><h3>Product management</h3><ul><li>Helped plan the product and decide which features to keep</li><li>Set up our team task system and kept the project on schedule</li><li>Worked with our front-end and back-end leads to turn the designs into a working app</li></ul></section>
      <section class="case-section"><h2>Design decisions</h2>
        <h3>1. Pickup points along the route</h3><p>Search results show rides from different pickup points, like a GO station or a nearby street. Students don’t need the same starting point. They only need to be on the way.</p>
        <h3>2. Everything you need to decide, in one card</h3><p>Each ride card shows the time, price per seat, pickup point, driver rating, and seats left. A verified badge shows the driver is a Sheridan student. When only one seat is left, the tag changes color.</p>
        <h3>3. Fair prices, set by distance</h3><p>When drivers post a ride, the price is set by distance. A tip shows what similar rides cost, so drivers don’t need to guess.</p>
        <h3>4. Find and post, always one tap away</h3><p>Passengers and drivers use the same app, so Find and Post are both in the bottom navigation.</p>
        <!-- Pending: Ashley's text was cut off here. <h3>5. We kept it simple</h3><p>Our first idea showed a match score for each ride. We cut it to … </p> -->
      </section>`
  },
  "case-study-workspace": {
    title: "Case Study Workspace",
    category: "Web application concept",
    intro: "A web app for design students to save process screenshots while they work, then turn that material into a portfolio case study.",
    status: "In progress · This idea is still being shaped. More details coming soon.",
    images: [],
    content: `
      <section class="case-section"><h2>The problem</h2><p>Students need to show their design process, but they often don’t save it while they work.</p></section>
      <section class="case-section"><h2>How it works</h2></section>
      <section class="case-section"><h2>Why it is different</h2></section>`
  },
  "photo-vocab-app": {
    title: "Photo Vocab App",
    category: "Product concept · In progress",
    intro: "Learn English from photos of your real life. Each word is linked to the moment you saw it.",
    images: [
      image("assets/images/photoVocabApp/01-learn.png", "Photo Vocab App Learn screen with a breakfast photo and a camera button", 375, 812),
      image("assets/images/photoVocabApp/02-learn-results.png", "Learn results labelling nine words on the breakfast photo, such as bread, salad, and iced latte", 375, 812),
      image("assets/images/photoVocabApp/03-library.png", "Library screen listing Breakfast, Bus stop, and Grocery store scenes with word stickers", 375, 812),
      image("assets/images/photoVocabApp/04-scene-detail.png", "Breakfast scene detail with collected words and useful phrases", 375, 812),
      image("assets/images/photoVocabApp/05-word-detail.png", "Word detail for salad with pronunciation, Chinese translation, and an example sentence", 375, 812),
      image("assets/images/photoVocabApp/06-review.png", "Review flashcard showing the salad sticker with Again and Got it buttons", 375, 812)
    ],
    content: `
      <section class="case-section"><h2>Who</h2><p>Newcomers in Canada who are learning English, like me.</p></section>
      <section class="case-section"><h2>The pivot</h2><p>I started with a photo search app, but Apple and Google AI search already solved that problem. So I reframed it: instead of using memory to find photos, use photos to remember words.</p></section>
      <section class="case-section"><h2>Key insight</h2><p>Words from real life are easier to remember.</p></section>`
  },
  roopy: {
    title: "roopy", category: "Graphic design & social media",
    intro: "Brand visuals and social content developed across fragrance campaigns, editorial layouts, Skin Tea Break, and a weekend playlist series.",
    images: [],
    content: `
      <section class="case-section"><h2>Brand content</h2><p>Created brand visuals and planned content for Xiaohongshu, WeChat, and Weibo. Developed creative graphics and videos based on product features and brand style to strengthen the brand image. In April, gained 1,000+ followers. Likes increased by 65%, saves by 93%, comments by 321%, shares by 211%, and product conversion by 33%.</p><div class="case-gallery"><!-- Hidden: Xiaohongshu profile image. To show it again, delete this comment opener and the matching closer after the img. <img src="assets/images/portfolio/roopy-profile.jpg" width="625" height="1200" alt="roopy Xiaohongshu brand profile and posts" loading="lazy" decoding="async"> --></div></section>
      <section class="case-section"><h2>Skin Tea Break</h2><!-- Hidden for now: <p>Developed the “Skin Tea Break” content series by highlighting product features and matching the brand style. Created high-quality graphics and videos with a French countryside aesthetic to strengthen the brand image and add value to the products.</p> --><div class="case-gallery"><img src="assets/images/portfolio/roopy-skin-tea-plate.jpg" width="900" height="1200" alt="Skin Tea Break cover with an empty plate and cutlery on pink linen" loading="lazy" decoding="async"><img src="assets/images/portfolio/roopy-skin-tea-hand-cream.jpg" width="900" height="1200" alt="Skin Tea Break poster with four hand creams on a table" loading="lazy" decoding="async"><img src="assets/images/portfolio/roopy-hand-cream.jpg" width="900" height="1200" alt="roopy hand cream composition in warm afternoon light" loading="lazy" decoding="async"></div><div class="case-gallery"><video src="assets/videos/roopy-skin-tea-invitation.mp4" poster="assets/images/portfolio/roopy-skin-tea-invitation-poster.jpg" width="720" height="1280" autoplay muted loop playsinline aria-label="Skin Tea Break invitation video with a dessert plate"></video><video src="assets/videos/roopy-skin-tea-launch.mp4" poster="assets/images/portfolio/roopy-skin-tea-launch-poster.jpg" width="720" height="1280" autoplay muted loop playsinline aria-label="Skin Tea Break launch video with hand creams in a glass bowl"></video></div></section>
      <section class="case-section"><h2>WeChat editorial layouts</h2><div class="case-gallery"><img src="assets/images/portfolio/roopy-editorial-polish.jpg" width="828" height="1472" alt="roopy Runse editorial layout with green woodland imagery" loading="lazy" decoding="async"><img src="assets/images/portfolio/roopy-editorial-listen.jpg" width="828" height="1472" alt="roopy Runse editorial layout about listening to green" loading="lazy" decoding="async"><img src="assets/images/portfolio/roopy-editorial-women-intro.jpg" width="828" height="1472" alt="roopy editorial introduction about seeing women's hands" loading="lazy" decoding="async"><img src="assets/images/portfolio/roopy-editorial-women-story.jpg" width="828" height="1472" alt="roopy editorial layout featuring Virginia Woolf" loading="lazy" decoding="async"><img src="assets/images/portfolio/roopy-editorial-women-product.jpg" width="828" height="1472" alt="roopy hand cream editorial product layout" loading="lazy" decoding="async"><img src="assets/images/portfolio/roopy-editorial-women-ingredients.jpg" width="828" height="1472" alt="roopy hand cream ingredient editorial layout" loading="lazy" decoding="async"></div></section>
      <section class="case-section"><h2>Fragrance campaign</h2><div class="case-gallery"><img src="assets/images/portfolio/roopy-mbti.jpg" width="900" height="1200" alt="roopy MBTI infographic pairing personality letters with products" loading="lazy" decoding="async"><img src="assets/images/portfolio/roopy-fragrance.jpg" width="900" height="1200" alt="roopy fragrance campaign with green foliage and Chinese typography" loading="lazy" decoding="async"><img src="assets/images/portfolio/roopy-fragrance-details.jpg" width="900" height="1200" alt="roopy fragrance campaign participation details on a green background" loading="lazy" decoding="async"></div></section>
      <section class="case-section"><h2>Social posts</h2><div class="case-gallery"><img src="assets/images/portfolio/roopy-lupine.jpg" width="900" height="1200" alt="roopy social post with lupine flowers and a Chinese quotation" loading="lazy" decoding="async"><img src="assets/images/portfolio/roopy-playlist.jpg" width="900" height="1200" alt="roopy weekend playlist artwork with a green landscape" loading="lazy" decoding="async"></div></section>`
  },
  "endpaper-talks": {
    title: "Endpaper Talks", category: "Event identity",
    intro: "Online and offline visual design for an art book club, including event posters and promotional materials.",
    images: [image("assets/images/portfolio/endpaper-talks.jpg", "Black and white Endpaper Talks art book event poster", 498, 1200), image("assets/images/portfolio/x-art-bookshop.jpg", "X-Art Bookshop poster with illustrated hands and books", 499, 1200), image("assets/images/portfolio/parallel-institute.jpg", "Parallel Institute poster with illustrated hands", 494, 1200)],
    content: `
      <section class="case-section"><h2>Project</h2><p>The visual system supported an art book club across online promotion and physical event materials.</p></section>
      <section class="case-section"><h2>Exhibition photographs</h2><div class="case-gallery"><img src="assets/images/portfolio/endpaper-exhibition-1.jpg" width="1200" height="1600" alt="Endpaper Talks exhibition installation" loading="lazy" decoding="async"><img src="assets/images/portfolio/endpaper-exhibition-2.jpg" width="1200" height="1600" alt="Endpaper Talks exhibition display" loading="lazy" decoding="async"><img src="assets/images/portfolio/endpaper-exhibition-3.jpg" width="1600" height="1283" alt="Endpaper Talks event space" loading="lazy" decoding="async"><img src="assets/images/portfolio/endpaper-exhibition-4.jpg" width="1200" height="1600" alt="Endpaper Talks printed materials at the exhibition" loading="lazy" decoding="async"></div></section>
      <section class="case-section"><h2>Editorial and social content</h2><div class="case-gallery"><img src="assets/images/portfolio/endpaper-social-schedule.jpg" width="828" height="1472" alt="Endpaper Talks schedule for four art book publishing events" loading="lazy" decoding="async"><img src="assets/images/portfolio/endpaper-social-oliver.jpg" width="828" height="1472" alt="Endpaper Talks feature about Oliver Wood and Beam Editions" loading="lazy" decoding="async"><img src="assets/images/portfolio/endpaper-social-chang.jpg" width="828" height="1472" alt="Endpaper Talks feature about Chang Yuchen" loading="lazy" decoding="async"><img src="assets/images/portfolio/endpaper-social-week-four.jpg" width="828" height="1472" alt="Endpaper Talks week four event schedule" loading="lazy" decoding="async"></div></section>`
  },
  "standing-bar": { title: "Standing Bar", category: "Poster study", intro: "Photography and expressive typography.", images: [image("assets/images/portfolio/standing-bar.jpg", "Standing Bar poster with monochrome street photography and orange lettering", 800, 1200)], content: "" },
  araki: { title: "Nobuyoshi Araki", category: "Poster study", intro: "A photography-led exhibition poster exploration.", images: [image("assets/images/portfolio/araki.jpg", "Araki exhibition poster with monochrome photography", 857, 1200)], content: "" },
  hokusai: { title: "Hokusai", category: "Poster study", intro: "An exploration of image arrangement and editorial typography.", images: [image("assets/images/portfolio/hokusai.jpg", "Hokusai exhibition poster with Japanese prints and blue typography", 857, 1200)], content: "" },
  "failure-cat": { title: "Song of the Failure Cat", category: "Poster series", intro: "Collage and bilingual typographic experiments.", images: [image("assets/images/portfolio/failure-cat-1.jpg", "Failure Cat collage poster", 720, 1200), image("assets/images/portfolio/failure-cat-2.jpg", "Song of the Failure Cat bilingual typographic poster", 720, 1200)], content: "" },
  christmas: { title: "Christmas graphics", category: "Poster series", intro: "Seasonal typography and graphic compositions.", images: [image("assets/images/portfolio/christmas-series.jpg", "Christmas graphic compositions in red, green, and cream", 900, 1200), image("assets/images/portfolio/christmas-poster.jpg", "Christmas tree poster in cream and green", 800, 1200), image("assets/images/portfolio/christmas-green-poster.jpg", "Green Christmas tree poster with red and cream typography", 900, 1200)], content: "" },
  "disco-ball": { title: "Disco Ball", category: "Poster study", intro: "A monochrome image with bright graphic accents.", images: [image("assets/images/portfolio/disco-ball.jpg", "Disco Ball poster with monochrome imagery and yellow accents", 867, 1200)], content: "" },
  candy: { title: "Candy", category: "Poster study", intro: "Bilingual lyrics, collage, and image-making.", images: [image("assets/images/portfolio/candy.jpg", "Candy poster with a yellow banana illustration and bilingual lyrics", 1200, 1200)], content: "" },
  "drink-packaging": { title: "Drink Packaging", category: "Packaging design", intro: "A four-piece packaging design study.", images: [image("assets/images/portfolio/packaging-0206-02.jpg", "Orange solid milk tea drink packaging design", 859, 1200), image("assets/images/portfolio/packaging-0206-03.jpg", "Blue matcha soy drink packaging design", 859, 1200), image("assets/images/portfolio/packaging-0210-04.jpg", "Pink black tea milk drink packaging design", 859, 1200), image("assets/images/portfolio/packaging-0210-05.jpg", "Green matcha milk drink packaging design", 859, 1200)], content: "" },
  "cat-climbing-frame": { title: "Cat Climbing Frame", category: "Graphic study", intro: "A graphic design study for a cat climbing frame.", images: [image("assets/images/portfolio/cat-climbing-frame.jpg", "Purple cat climbing frame graphic design", 900, 1200), image("assets/images/portfolio/cat-climbing-frame-series.jpg", "Cat climbing frame graphic series presentation", 471, 1200), image("assets/images/portfolio/cat-climbing-frame-pattern.jpg", "Dot-pattern cat climbing frame poster", 800, 1200)], content: "" }
};

console.assert(Object.keys(projects).length === 14, "Every portfolio project needs a detail route.");
const project = projects[new URLSearchParams(window.location.search).get("id")];
const container = document.querySelector("#project-content");

if (!project) {
  document.title = "Project not found — Ashley Ma";
  container.innerHTML = `<header class="case-header"><p class="eyebrow">Portfolio</p><h1>Project not found</h1><p>Return to the project list and choose another project.</p></header><a class="back-link" href="index.html#work">← Back to work</a>`;
} else {
  document.title = `${project.title} — Ashley Ma`;
  const gallery = project.images.length ? `<div class="case-gallery ${project.images.length === 1 ? "gallery-one" : ""}">${project.images.map(({ src, alt, width, height }, index) => `<img src="${src}" alt="${alt}" width="${width}" height="${height}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`).join("")}</div>` : "";
  container.innerHTML = `<header class="case-header"><p class="eyebrow">${project.category}</p><h1>${project.title}</h1><p class="case-intro">${project.intro}</p>${project.status ? `<p class="muted">${project.status}</p>` : ""}${project.facts ? `<dl class="facts case-facts">${project.facts.map(([term, detail]) => `<div><dt>${term}</dt><dd>${detail}</dd></div>`).join("")}</dl>` : ""}</header>${gallery}${project.content}<a class="back-link" href="index.html#work">← Back to all work</a>`;
}

// Fill the left rail's table of contents: Overview plus each section heading.
if (project) {
  const nav = document.querySelector(".toc");
  const sections = [container.querySelector(".case-header"), ...container.querySelectorAll(".case-section")];
  const label = (section, index) => index ? section.querySelector("h2").textContent : "Overview";
  sections.forEach((section, index) => {
    section.id = index ? label(section, index).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") : "overview";
    section.tabIndex = -1;
  });
  nav.replaceChildren();
  const links = sections.map((section, index) => nav.appendChild(Object.assign(document.createElement("a"), { className: "toc-link", href: `#${section.id}`, textContent: label(section, index) })));
  links[0].setAttribute("aria-current", "true");
  // shortcut: IntersectionObserver only (works in every browser); native scroll-target-group is Chrome-only today.
  const observer = new IntersectionObserver((entries) => entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting) return;
    links.forEach((link) => link.hash === `#${target.id}` ? link.setAttribute("aria-current", "true") : link.removeAttribute("aria-current"));
  }), { rootMargin: "-30% 0px -60% 0px" });
  sections.forEach((section) => observer.observe(section));
}

// "← Back" returns to the previous page when it was on this site; otherwise the link goes to the work list.
document.querySelector(".page-back").addEventListener("click", (event) => {
  if (document.referrer && new URL(document.referrer).origin === window.location.origin) {
    event.preventDefault();
    history.back();
  }
});

// GIF-style videos (autoplay, no controls) respect the "reduce motion" setting: stop them and give the viewer controls instead.
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("video[autoplay]").forEach((video) => {
    video.removeAttribute("autoplay");
    video.pause();
    video.controls = true;
  });
}
