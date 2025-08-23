// Botão de menu para mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Animação de clique nos botões
document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("click", () => {
    el.style.transform = "scale(0.95)";
    setTimeout(() => el.style.transform = "scale(1)", 150);
  });
});
// 2 parte do js//
let currentSlide = 0;
const slides = document.querySelectorAll("#banner-slideshow .slide");

function changeSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000); // troca a cada 4 segundos

