// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav-links a");
  const toTopBtn = document.getElementById("toTopBtn");

  /* ========================
     Mobile nav toggle
     ======================== */
  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });

    // Close nav when clicking a link (on mobile)
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-open");
      });
    });
  }

  /* ========================
     Smooth Scroll for # links
     ======================== */
  const hashLinks = document.querySelectorAll("a[href^='#']");
  hashLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const navHeight = nav ? nav.offsetHeight : 0;
      const rect = targetEl.getBoundingClientRect();
      const offset = rect.top + window.pageYOffset - navHeight - 10;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    });
  });

  /* ========================
     Scroll Reveal Animation
     ======================== */
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (revealElements.length) {
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

    // Add a little stagger to reveals
    revealElements.forEach((el, idx) => {
      el.style.transitionDelay = `${Math.min(idx * 80, 400)}ms`;
      revealObserver.observe(el);
    });
  }

  /* ========================
     Scrollspy active nav link
     ======================== */
  const sectionLinks = [];
  navLinks.forEach((link) => {
    const sectionId = link.dataset.section;
    if (sectionId) {
      const target = document.getElementById(sectionId);
      if (target) {
        sectionLinks.push({ link, target });
      }
    }
  });

  const updateActiveNav = () => {
    if (!sectionLinks.length) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const navHeight = nav ? nav.offsetHeight : 0;
    const triggerLine = scrollY + navHeight + 60;

    let current = null;
    sectionLinks.forEach(({ link, target }) => {
      const rect = target.getBoundingClientRect();
      const top = rect.top + scrollY;
      if (top <= triggerLine) {
        current = link;
      }
    });

    navLinks.forEach((a) => { a.classList.remove("active"); a.removeAttribute('aria-current'); });
    if (current) { current.classList.add("active"); current.setAttribute('aria-current', 'page'); }
  };

  // Also set an active page link based on path
  const setActivePageLink = () => {
    navLinks.forEach((a) => { a.classList.remove('active'); a.removeAttribute('aria-current'); });
    const path = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach((a) => {
      const href = a.getAttribute('href');
      if (!href) return;
      const hrefPage = href.split('/').pop();
      if (hrefPage === '' && path === 'index.html') {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      } else if (hrefPage === path) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      }
    });
  };

  // Call once to mark the active nav item on load
  setActivePageLink();

  /* ========================
     Back-to-Top & Nav Shadow
     ======================== */
  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    // Nav shadow / background
    if (nav) {
      if (scrollY > 10) {
        nav.classList.add("nav-scrolled");
      } else {
        nav.classList.remove("nav-scrolled");
      }
    }

    // Back-to-top visibility
    if (toTopBtn) {
      if (scrollY > 400) {
        toTopBtn.classList.add("show");
      } else {
        toTopBtn.classList.remove("show");
      }
    }

    updateActiveNav();
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

  /* ========================
     Project Filters (projects.html)
     ======================== */
  const filterButtons = document.querySelectorAll(".filter-pill[data-filter]");
  const projectCards = document.querySelectorAll(".project-card[data-tags]");
  // Set initial expanded state for collapsible bullets
  projectCards.forEach((card) => {
    const bullets = card.querySelector('.project-bullets');
    if (bullets) bullets.setAttribute('aria-hidden', 'true');
  });

  // Initialize aria-pressed for filter pills
  filterButtons.forEach((btn) => {
    btn.setAttribute('aria-pressed', btn.classList.contains('is-active') ? 'true' : 'false');
  });

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach((btn) => {
      // keyboard accessibility (Enter / Space)
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " " || e.key === "Space" || e.key === "Spacebar") {
          e.preventDefault();
          btn.click();
        }
      });

      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter || "all";

        // Active state
        filterButtons.forEach((b) => {
          b.classList.remove("is-active");
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add("is-active");
        btn.setAttribute('aria-pressed', 'true');

        // Show / hide cards
        projectCards.forEach((card) => {
          const tagsRaw = card.dataset.tags || "";
          const tags = tagsRaw.split(",").map((t) => t.trim());

          if (filter === "all" || tags.includes(filter)) {
            card.classList.remove("hidden-card");
            card.setAttribute("aria-hidden", "false");
            card.classList.add('filter-highlight');
            card.addEventListener('animationend', () => card.classList.remove('filter-highlight'), { once: true });
          } else {
            // animate hide: add hidden class which transitions to zero height/opactiy
            card.classList.add("hidden-card");
            card.setAttribute("aria-hidden", "true");
          }
        });
      });
    });
  }

  /* ========================
     Copy Email Button (index.html)
     ======================== */
  const copyBtn = document.getElementById("copyEmailBtn");
  const copyStatus = document.getElementById("copyEmailStatus");

  if (copyBtn && copyStatus && navigator.clipboard) {
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.dataset.email;
      if (!email) return;

      try {
        await navigator.clipboard.writeText(email);
        copyStatus.textContent = "Email copied!";
        setTimeout(() => {
          copyStatus.textContent = "";
        }, 2000);
      } catch (err) {
        copyStatus.textContent = "Couldn’t copy, please copy manually.";
        setTimeout(() => {
          copyStatus.textContent = "";
        }, 2500);
      }
    });
  }

  /* ========================
     Hero Focus Switch (index.html)
     ======================== */
  const heroTitle = document.getElementById("heroTitle");
  const heroSubtitle = document.getElementById("heroSubtitle");
  const focusPills = document.querySelectorAll(".hero-focus-pill");

  const focusModes = {
    swe: {
      title: "Building robust, production-ready software systems.",
      subtitle:
        "I’m Alejandro, a CS student at UNF who enjoys taking features from design to deployment: APIs, data models, and clean, maintainable backend code.",
    },
    security: {
      title: "Thinking like an engineer and a defender.",
      subtitle:
        "I’m focused on security operations, logging, and reliable systems—building a personal SOC-style lab and working with tools like Splunk and firewalls.",
    },
    data: {
      title: "Turning messy data into decisions.",
      subtitle:
        "I’ve worked on analytics and ML projects that automate reporting, detect fake job postings, and make it easier to see where time and money go.",
    },
  };

  if (heroTitle && heroSubtitle && focusPills.length) {
    focusPills.forEach((pill) => {
      pill.addEventListener("click", () => {
        const mode = pill.dataset.mode;
        if (!mode || !focusModes[mode]) return;

        // Active UI
        focusPills.forEach((p) => p.classList.remove("is-active"));
        pill.classList.add("is-active");

        // Update text
        heroTitle.textContent = focusModes[mode].title;
        heroSubtitle.textContent = focusModes[mode].subtitle;
      });
    });
  }

  /* ========================
     Project details toggle
     ======================== */
  const toggleButtons = document.querySelectorAll(".project-toggle");

  if (toggleButtons.length) {
    // Setup initial aria on toggles & bullets
    toggleButtons.forEach((btn) => {
      btn.setAttribute('aria-expanded', 'false');
      btn.addEventListener("click", () => {
        const card = btn.closest(".project-card");
        if (!card) return;

        const isExpanded = card.classList.toggle("is-expanded");
        btn.textContent = isExpanded ? "Hide details" : "Show details";
        btn.setAttribute("aria-expanded", String(isExpanded));
        const bullets = card.querySelector('.project-bullets');
        if (bullets) {
          if (isExpanded) bullets.setAttribute('aria-hidden', 'false'); else bullets.setAttribute('aria-hidden','true');
        }
      });
    });
  }

  /* ========================
     Parallax tilt effect
     ======================== */
  const parallaxElems = document.querySelectorAll(".parallax-tilt");

  // Throttled parallax tilt using requestAnimationFrame
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    parallaxElems.forEach((el) => {
      let latestEvt = null;
      let rafId = null;

      const update = () => {
        if (!latestEvt) { rafId = null; return; }
        const e = latestEvt;
        latestEvt = null;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const midX = rect.width / 2;
        const midY = rect.height / 2;
        const rotateX = ((y - midY) / midY) * -4; // tilt range
        const rotateY = ((x - midX) / midX) * 4;
        el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
        rafId = null;
      };

      el.addEventListener('pointermove', (e) => {
        latestEvt = e;
        if (rafId == null) rafId = requestAnimationFrame(update);
      });

      el.addEventListener('pointerleave', () => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        latestEvt = null;
        el.style.transform = 'rotateX(0deg) rotateY(0deg)';
      });
    });
  }

  /* ========================
     Contact form handling (contact.html)
     - Supports Formspree endpoints or falls back to mailto
     - Shows success/error messages in #contactStatus
     ======================== */
  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus');
  const formReset = document.getElementById('formReset');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      if (contactStatus) {
        contactStatus.textContent = 'Sending…';
      }

      const action = contactForm.action || '';
      const formData = new FormData(contactForm);

      try {
        if (action.includes('formspree.io')) {
          const res = await fetch(action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
          });

          if (res.ok) {
            if (contactStatus) contactStatus.textContent = 'Message sent — thank you!';
            contactForm.reset();
          } else {
            // If Formspree fails, fallback to mailto
            if (contactStatus) contactStatus.textContent = 'Couldn\'t send via Formspree; opening email client…';
            const name = encodeURIComponent(formData.get('name') || '');
            const email = encodeURIComponent(formData.get('email') || '');
            const subject = encodeURIComponent(formData.get('subject') || 'Contact from portfolio');
            const message = encodeURIComponent((formData.get('message') || '') + `\n\nFrom: ${name} <${email}>`);
            window.location.href = `mailto:N01482842@unf.edu?subject=${subject}&body=${message}`;
          }
        } else {
          // fallback: open user's mail client via mailto: link
          const name = encodeURIComponent(formData.get('name') || '');
          const email = encodeURIComponent(formData.get('email') || '');
          const subject = encodeURIComponent(formData.get('subject') || 'Contact from portfolio');
          const message = encodeURIComponent((formData.get('message') || '') + `\n\nFrom: ${name} <${email}>`);
          window.location.href = `mailto:N01482842@unf.edu?subject=${subject}&body=${message}`;
        }
      } catch (err) {
        if (contactStatus) contactStatus.textContent = 'An error occurred while sending.';
        console.error('Contact form error', err);
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        setTimeout(() => { if (contactStatus) contactStatus.textContent = ''; }, 4500);
      }
    });

    if (formReset) {
      formReset.addEventListener('click', () => {
        contactForm.reset();
        if (contactStatus) contactStatus.textContent = '';
      });
    }
  }
});
