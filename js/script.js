// 导航链接平滑滚动（带 offset）
function initSmoothScroll() {
  const links = document.querySelectorAll('.nav-links a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      event.preventDefault();
      const offset = 80; // 预留导航栏高度
      const top =
        target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });
  });
}

// Hero 按钮滚动到 Introduction
function initHeroButton() {
  const exploreBtn = document.getElementById("exploreBtn");
  if (!exploreBtn) return;

  exploreBtn.addEventListener("click", () => {
    const intro = document.getElementById("intro");
    if (!intro) return;
    intro.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// Intersection Observer：section 进入视口时淡入
function initRevealOnScroll() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !revealElements.length) {
    // 简单降级：不支持则直接显示
    revealElements.forEach((el) => el.classList.add("reveal-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

// 初始化
document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initHeroButton();
  initRevealOnScroll();
});
