document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const blogPosts = document.querySelectorAll(".blog-post");
  const lsSpan = document.querySelector(".ls span");
  let typingInterval;

  function typeWriter(text, element, speed) {
    clearInterval(typingInterval); // Stop any previous typing effect
    element.textContent = ""; // Clear immediately

    let i = 0;
    typingInterval = setInterval(() => {
      if (i < text.length) {
        element.textContent = text.substring(0, i + 1); // Ensures clean writing
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);
  }

  // Set up filter buttons
  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      // Remove active state from all buttons and add to clicked one
      filterButtons.forEach(btn => btn.classList.remove("active-btn"));
      this.classList.add("active-btn");

      // Command output
      const commandText = category === "all" ? "ls" : `ls | grep ${category}`;

      // Immediately clear before starting typewriter
      typeWriter(commandText, lsSpan, 50);

      // Filter posts
      blogPosts.forEach(post => {
        post.style.display = category === "all" || post.getAttribute("data-category") === category
          ? "block"
          : "none";
      });
    });
  });
});

