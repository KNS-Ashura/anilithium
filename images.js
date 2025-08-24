document.querySelectorAll(".slideshow").forEach(slideshow => {
  const slides = slideshow.querySelectorAll("li");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Affichage initial
  showSlide(current);

  // Changement automatique toutes les 2,8 secondes
  setInterval(nextSlide, 2800);
});
