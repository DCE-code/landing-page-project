/* NexaFlow landing page interactions.
   Vanilla JavaScript keeps the project lightweight and dependency-free. */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-link");
  const backToTop = document.querySelector(".back-to-top");
  const year = document.querySelector("#current-year");

  // Keep the footer year current automatically.
  if (year) year.textContent = new Date().getFullYear();

  // Toggle the mobile navigation and expose its state to assistive technology.
  const closeMenu = () => {
    if (!menuToggle || !navLinks) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navLinks.classList.remove("open");
    document.body.classList.remove("menu-open");
  };

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Open navigation menu" : "Close navigation menu",
      );
      navLinks.classList.toggle("open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 620) closeMenu();
    });
  }

  // Add a subtle header shadow and reveal the back-to-top control after scrolling.
  const handleScroll = () => {
    const scrolled = window.scrollY > 16;
    header?.classList.toggle("scrolled", scrolled);
    backToTop?.classList.toggle("visible", window.scrollY > 480);
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Use IntersectionObserver for performant, scroll-triggered entrance animations.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    // Fallback for older browsers: show content without scroll animation.
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // Highlight the navigation link for the section currently in view.
  const sections = document.querySelectorAll(
    "main section[id], main section:not([id])",
  );
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const currentId = entry.target.id;
          navItems.forEach((item) => {
            const isCurrent =
              item.getAttribute("href") === `#${currentId}` ||
              (currentId === "" && item.getAttribute("href") === "#top");
            item.classList.toggle("active", isCurrent);
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((section) => sectionObserver.observe(section));
  }

  // Return to the top without abruptly jumping the page.
  backToTop?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  });
});
