// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const toTopBtn = document.getElementById("toTopBtn");

  /* ========================
     Smooth Scroll for #links
     (e.g., hero buttons)
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

    revealElements.forEach((el) => revealObserver.observe(el));
  }

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

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter || "all";

        // Active state
        filterButtons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        // Show / hide cards
        projectCards.forEach((card) => {
          const tagsRaw = card.dataset.tags || "";
          const tags = tagsRaw.split(",").map((t) => t.trim());

          if (filter === "all" || tags.includes(filter)) {
            card.classList.remove("hidden-card");
          } else {
            card.classList.add("hidden-card");
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
});
