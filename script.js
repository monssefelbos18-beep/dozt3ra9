const header = document.querySelector(".header");
const revealElements = document.querySelectorAll(".reveal");
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

// Header effect on scroll
window.addEventListener("scroll", () => {
  if (header) {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

// Reveal elements on scroll
const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Mobile menu toggle
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });
}

// Close mobile menu after click
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu) {
      mobileMenu.classList.remove("show");
    }
  });
});

// Smooth scroll for anchor links
allAnchorLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // نخلي links بحال products.html ولا login.html يخدمو عادي
    if (!targetId || !targetId.startsWith("#")) return;

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Handling Contact Form Submission
const contactForm = document.querySelector('.contact-card form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // باش الصفحة ما تشرجيش من جديد
        alert('Thank you! Your message has been sent successfully. 🔥');
        contactForm.reset(); // باش يخواو الخانات من بعد الإرسال
    });
}
