// nav hamburger-menu selection
const menubtn = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

menubtn.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// click hamburger menu when link is clicked
var navlinks = document.querySelectorAll(".nav-link");
navlinks.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
