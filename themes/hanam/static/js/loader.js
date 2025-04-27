document.addEventListener("DOMContentLoaded", function() {
  const mainContent = document.querySelector("main.main-content");
  const navLinks = document.querySelectorAll("nav a");
  const transitionOverlay = document.getElementById("transition-overlay");

  // Smooth white wipe transition on nav link clicks (for internal links)
  navLinks.forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        // Activate the white overlay (it will expand to cover main content)
        if (transitionOverlay) {
          transitionOverlay.classList.add("active");
        }
        // Fade out the main content
        if (mainContent) {
          mainContent.classList.add("fade-out");
        }
        // Navigate after the transition finishes (300ms delay)
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      });
    }
  });
});



