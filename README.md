# Daniil Skvyrskyi — Portfolio Website

My personal portfolio site, showcasing my work in **AI, computer vision, embedded systems,
and full-stack development**. Built from scratch with vanilla HTML, CSS, and JavaScript —
no frameworks, no build step.

### Live site → **[hardovskyi.github.io/DSkvyrskyi.dev](https://hardovskyi.github.io/DSkvyrskyi.dev/)**

<!-- Add a screenshot at assets/screenshot.png and it will show here -->
<!-- ![Portfolio screenshot](assets/screenshot.png) -->

---

## Highlights

- **Animated parallax background** — a fixed space/grid layer that stays in place while
  content scrolls over it, with a graceful animated fallback (twinkling stars + perspective grid).
- **Glassmorphism UI** — translucent, blurred surfaces throughout so the background shows
  through every section.
- **Custom cursor** — a minimal dot-and-ring cursor that trails the mouse and reacts to
  interactive elements (desktop only; native cursor on touch devices).
- **Scroll-reveal animations** via `IntersectionObserver`.
- **Fully responsive** — adapts cleanly from large desktops down to mobile, with a slide-in nav.
- **Accessible & performant** — semantic HTML, reduced-motion support, system fonts fallback,
  and zero third-party JS dependencies.

## Sections

1. **Hero** — intro, portrait, and headline impact stats.
2. **About** — background and education.
3. **Experience** — interactive timeline of roles and impact.
4. **Projects** — featured engineering projects with tech tags.
5. **Skills** — categorized technical toolkit.
6. **Contact** — email, phone, LinkedIn, and GitHub links.

## Tech stack

| Layer | Tools |
|-------|-------|
| Markup | Semantic HTML5 |
| Styling | Modern CSS (custom properties, grid, flexbox, `backdrop-filter`) |
| Behavior | Vanilla JavaScript (ES6, `IntersectionObserver`, `requestAnimationFrame`) |
| Fonts | DM Sans + JetBrains Mono (Google Fonts) |
| Hosting | GitHub Pages |

## Repository structure

```
.
|- index.html        # Single-page site markup
|- css/
|  \- styles.css      # All styles (theme, layout, animations, responsive)
|- js/
|  \- main.js         # Parallax, custom cursor, nav, scroll reveal
|- assets/           # Images, background media, portrait
\- README.md
```

## Run locally

No build step required — it's a static site.

```bash
git clone https://github.com/Hardovskyi/DSkvyrskyi.dev.git
cd DSkvyrskyi.dev

# Option 1: open index.html directly in a browser
# Option 2: serve it (recommended, avoids CORS quirks)
python -m http.server 8080
# then visit http://localhost:8080
```

## Deployment

Hosted on **GitHub Pages** from the `main` branch. Any push to `main` redeploys the live
site automatically at the URL above.

## Customization notes

- **Theme & colors:** CSS custom properties at the top of `css/styles.css`.
- **Background media:** drop a GIF/MP4 in `assets/background/` and uncomment the matching
  tag in `index.html`; the animated fallback hides automatically.
- **Portrait:** add `assets/portrait/portrait.jpg` and uncomment the image in the hero.
- **Parallax speed / cursor feel:** tunable constants in `js/main.js`.

---

*Designed and built by Daniil Skvyrskyi · [LinkedIn](https://linkedin.com/in/daniil-skvyrskyi/)*
