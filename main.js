// Skyloom landing page behaviour (ES module)

const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('#nav-links');

/** Open or close the mobile menu and keep ARIA state in sync. */
const setMenu = (open) => {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
};

toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

// Close the menu after choosing a link, or when pressing Escape.
links.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Reveal cards and testimonials as they scroll into view.
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 100}ms`; // small stagger per row
  observer.observe(el);
});

// Keep the footer year current.
document.querySelector('#year').textContent = new Date().getFullYear();
