// === script.js ===
document.addEventListener("DOMContentLoaded", () => {
  // Typed.js animation
  const typed = new Typed("#typed-name", {
    strings: ["Aditya Pratap Singh", "a Data Analyst", "a UI/UX Designer"],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
  });

  // Scroll dot highlight logic
  const sections = document.querySelectorAll("section");
  const navDots = document.querySelectorAll(".nav-dots .dot");

  function activateDot(index) {
    navDots.forEach(dot => dot.classList.remove("active"));
    navDots[index].classList.add("active");
  }

  function getCurrentSectionIndex() {
    let index = 0;
    let minDist = Infinity;
    sections.forEach((section, i) => {
      const dist = Math.abs(section.getBoundingClientRect().top);
      if (dist < minDist) {
        minDist = dist;
        index = i;
      }
    });
    return index;
  }

  window.addEventListener("scroll", () => {
    const current = getCurrentSectionIndex();
    activateDot(current);
  });

  navDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      sections[index].scrollIntoView({ behavior: "smooth" });
    });
  });
});
