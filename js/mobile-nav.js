function initMobileNav() {
  const navbar = document.querySelector(".navbar");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (!navbar || !toggle || !navLinks) return;

  const mobileMedia = window.matchMedia("(max-width: 1100px)");

  function closeMenu() {
    navbar.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    navbar.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  function syncMenuState() {
    if (!mobileMedia.matches) {
      closeMenu();
    }
  }

  toggle.addEventListener("click", () => {
    if (navbar.classList.contains("nav-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  mobileMedia.addEventListener("change", syncMenuState);
  syncMenuState();
}

document.addEventListener("DOMContentLoaded", initMobileNav);
