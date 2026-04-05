function changeImage(el) {
  document.getElementById("main-image").src = el.src;
}

/*menu */
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

btn.addEventListener("click", (e) => {
  e.preventDefault(); // prevents weird behavior
  menu.classList.toggle("active");
});

/*close menu when click link */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});