# NexaFlow — Landing Page Project

A responsive landing page for **NexaFlow**, a fictional software and workflow company. This project was created for the AppRo8 Frontend Development internship Task 1: Landing Page Development.

> **Project note:** NexaFlow is a fictional concept. The customer quotes, dashboard statistics, and company contact address are sample content for this student project and do not represent real customers or a real business.

## Features

- Responsive layout for mobile, tablet, and desktop.
- Header navigation with Home, About, Services, and Contact links.
- Mobile hamburger menu with accessible expanded-state labels.
- Hero section with headline, supporting copy, and calls to action.
- Product dashboard illustration built with HTML and CSS.
- Three service/feature cards.
- About and workflow sections.
- Three clearly labelled sample testimonials.
- Footer with contact details and social media links.
- Smooth anchor scrolling and scroll-triggered entrance animations.
- Back-to-top button and active navigation highlighting.
- Keyboard support for closing the mobile menu with Escape.
- Reduced-motion support for visitors who prefer less animation.
- Semantic HTML, descriptive metadata, organised styles, and commented JavaScript.

## Technologies

- HTML5
- CSS3 (custom properties, Grid, Flexbox, media queries, transitions)
- Vanilla JavaScript (DOM APIs and Intersection Observer)

No framework, build tool, or package installation is required.

## Project structure

```text
landing-page-project/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.

For a more realistic local development workflow, open the folder in Visual Studio Code and use a local server extension such as Live Server. The site does not require a backend.

## Deployment

### GitHub Pages

1. Create a public GitHub repository named `landing-page-project`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under the build/deployment settings, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site and copy the live URL.

### Netlify or Vercel

Import the public GitHub repository into your preferred hosting platform. Since this is a static site, no build command is needed; publish the repository root.

## Testing checklist

- [ ] Desktop navigation links move to the correct sections.
- [ ] Mobile menu opens and closes with the hamburger button.
- [ ] Mobile menu closes after a navigation link is selected.
- [ ] Escape closes the mobile menu.
- [ ] Layout has no horizontal overflow at phone, tablet, and desktop widths.
- [ ] CTA links and email links work.
- [ ] Animations do not prevent content from being read.
- [ ] The deployed website and public repository can be opened without signing in.

## Internship submission

- **Repository name:** `landing-page-project`
- **Submission URL:** Paste the public GitHub repository URL into AppRo8.
- **Live / Demo URL:** Paste the deployed website URL into AppRo8.

Only submit URLs after you have created the repository and confirmed the deployed page is publicly accessible.
