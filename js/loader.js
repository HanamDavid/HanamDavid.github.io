document.addEventListener("DOMContentLoaded", function() {
  const bootOverlay = document.getElementById("boot-overlay");
  const bootTextEl = document.getElementById("boot-text");
  const mainContent = document.querySelector("main.main-content");
  const navLinks = document.querySelectorAll("nav a");
  const transitionOverlay = document.getElementById("transition-overlay");

  // Boot sequence on homepage (runs only if on "/" and if not done before)
  if (window.location.pathname === "/") {
    if (localStorage.getItem("bootDone") === "true") {
      bootOverlay.style.display = "none";
    } else {
      const bootLines = [
        "Initializing system...",
        "Loading kernel modules...",
        "Starting services...",
        "Welcome to David's Portfolio",
        ""
      ];
      let text = "";
      let lineIndex = 0;
      let charIndex = 0;

      function typeLine() {
        if (lineIndex < bootLines.length) {
          if (charIndex < bootLines[lineIndex].length) {
            text += bootLines[lineIndex].charAt(charIndex);
            bootTextEl.textContent = text;
            charIndex++;
            setTimeout(typeLine, 20);
          } else {
            text += "\n";
            bootTextEl.textContent = text;
            lineIndex++;
            charIndex = 0;
            setTimeout(typeLine, 200);
          }
        } else {
          // Fade out boot overlay then hide it
          bootOverlay.style.opacity = 0;
          setTimeout(() => {
            bootOverlay.style.display = "none";
            localStorage.setItem("bootDone", "true");
          }, 500);
        }
      }
      typeLine();
    }
  } else {
    if (bootOverlay) {
      bootOverlay.style.display = "none";
    }
  }

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



