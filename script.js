// Basic footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  const sections = document.querySelectorAll("section[id]");
  const toTopBtn = document.getElementById("toTopBtn");

  /* ========================
     Smooth Scroll for Nav
     ======================== */
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      if (!targetId || !targetId.startsWith("#")) return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      const navHeight = nav ? nav.offsetHeight : 0;
      const targetRect = targetEl.getBoundingClientRect();
      const targetOffset = targetRect.top + window.pageYOffset - navHeight - 10;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    });
  });

  /* ========================
     Active Nav on Scroll
     ======================== */
  const setActiveNav = (id) => {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === `#${id}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.45,
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting && id) {
        setActiveNav(id);
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));

  /* ========================
     Scroll Reveal Animation
     ======================== */
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  /* ========================
     Back-to-Top Button
     ======================== */
  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    // Toggle nav shadow/background
    if (nav) {
      if (scrollY > 10) {
        nav.classList.add("nav-scrolled");
      } else {
        nav.classList.remove("nav-scrolled");
      }
    }

    // Toggle back-to-top button
    if (toTopBtn) {
      if (scrollY > 400) {
        toTopBtn.classList.add("show");
      } else {
        toTopBtn.classList.remove("show");
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once on load

  if (toTopBtn) {
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
