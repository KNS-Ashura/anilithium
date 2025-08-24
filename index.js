const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const countDisplay = document.querySelector(".count");
const ul = document.querySelector(".carrousel ul");

let index = 0;
const total = slides.length;
let autoSlide = setInterval(nextSlide, 5000);

function updateCarousel() {
  ul.style.transform = `translateY(-${index * 100}%)`;
  countDisplay.textContent = `${index + 1}/${total}`;
}

function nextSlide() {
  index = (index + 1) % total;
  updateCarousel();
}

function prevSlide() {
  index = (index - 1 + total) % total;
  updateCarousel();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 15000);
}

// Init
updateCarousel();

