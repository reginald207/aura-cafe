# Aura Street Cafe — Landing Page

A premium, editorial-style landing page for Aura Street Cafe, an Asian street-style cafe in East Legon, Accra.

## Structure

```
/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css      → design tokens (color, type, radius, motion)
│   ├── typography.css
│   ├── layout.css
│   ├── components.css     → nav, hero, cards, gallery, footer, etc.
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js             → preloader, Lenis smooth scroll, GSAP reveals, magnetic buttons
│   ├── cursor.js            → custom circular cursor (desktop only)
│   ├── navigation.js        → sticky nav + mobile overlay menu
│   └── gallery.js           → pinned horizontal-scroll gallery (GSAP ScrollTrigger)
└── assets/
    ├── images/
    ├── icons/
    └── videos/
```

## Notes on images

For this concept preview, photography is pulled live from Unsplash so the design can be judged with real imagery. For production, replace the `<img src>` URLs with local files in `/assets/images/` (the filenames suggested in the original brief — `hero.jpg`, `coffee.jpg`, `matcha.jpg`, etc. — are a good naming convention to follow).

## Tech

HTML5, CSS3 (CSS variables, no framework), vanilla JS, GSAP + ScrollTrigger, Lenis (smooth scroll), all loaded via CDN. Icons are hand-inlined SVGs in the spirit of Lucide's line-icon style so the page has zero render-blocking icon font requests.

## Running locally

Just open `index.html` in a browser, or serve the folder with any static server:

```
npx serve .
```

## Customizing

- Colors, fonts, radii and spacing all live in `css/variables.css`.
- Copy is written in `index.html` directly — search for section comments (`<!-- HERO -->`, `<!-- WELLNESS -->`, etc.) to find each block.
- The gallery, testimonials and Instagram grid use placeholder content — swap in real photos and reviews before launch.
