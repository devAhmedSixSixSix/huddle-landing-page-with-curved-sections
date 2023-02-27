// for the navbar animation
const navbar = document.querySelector(".nav");
const landing = document.querySelector(".landing");

const navbarObserver = new IntersectionObserver(
  (entres) => {
    entres.forEach((entry) => {
      navbar.classList.toggle("nav-scroll", !entry.isIntersecting);
    });
  },
  {
    threshold: 0.4,
  }
);

navbarObserver.observe(landing);

// for the animation in the page
const cards = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entres) => {
    entres.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.4,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});
