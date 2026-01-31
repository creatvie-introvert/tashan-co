document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("navbar");
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!navLinks.length) return;

  const closeMobileNav = () => {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("nav-open");
  };

  // Existing hamburger toggle
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
      nav.classList.toggle("nav-open");
    });
  }

  // Get "current" section based on scroll position
  const getCurrentSection = () => {
    const sections = [...document.querySelectorAll("main .section")];
    const y = window.scrollY + 140;
    return (
      sections
        .filter((s) => s.offsetTop <= y)
        .sort((a, b) => b.offsetTop - a.offsetTop)[0] || sections[0]
    );
  };

  // Fixed header offset (in px)
  const getHeaderOffset = () => {
    const header = document.getElementById("site-header");
    return header ? header.getBoundingClientRect().height + 16 : 120;
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      closeMobileNav();

      // Special case: #top should just scroll to the top (don’t animate body)
      if (href === "#top") {
        if (prefersReducedMotion || typeof gsap === "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            gsap.to(window, { duration: 0.6, scrollTo: 0, ease: "power2.out" });
        }
        return;
      }


      // If reduced motion OR GSAP missing, fall back to default smooth scroll
      if (prefersReducedMotion || typeof gsap === "undefined") {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      const current = getCurrentSection();
      const offsetY = getHeaderOffset();

      // Guard: if already at target, just scroll nicely
      if (current === target) {
        gsap.to(window, { duration: 0.6, scrollTo: { y: target, offsetY }, ease: "power2.out" });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Animate current section out (to the left + fade)
      if (current) {
        tl.to(current, { duration: 0.25, x: -24, opacity: 0 });
      }

      // Jump/scroll to target (with fixed header offset)
      tl.to(window, {
        duration: 0.01,
        scrollTo: { y: target, offsetY },
      });

      // Animate target in (from the right + fade)
      tl.fromTo(
        target,
        { x: 24, opacity: 0 },
        { duration: 0.35, x: 0, opacity: 1 }
      );


      // Reset current styles so it doesn't stay hidden when scrolling back
      tl.set(current, { clearProps: "transform,opacity" });
    });
  });
});
