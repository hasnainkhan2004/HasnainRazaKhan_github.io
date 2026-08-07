// Highlights the current section's nav link while scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Mobile hamburger menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinksList = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinksList.classList.toggle("open");
  menuToggle.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinksList.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});