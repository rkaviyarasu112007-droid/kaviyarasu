// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("msg").innerText = "Thank you! Your message has been sent.";
  document.getElementById("contactForm").reset();
});

// Smooth scroll for navigation
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});