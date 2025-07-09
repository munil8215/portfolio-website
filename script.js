// Theme toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("toggle-theme");
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
  this.reset();
});
