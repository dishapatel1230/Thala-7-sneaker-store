function changeImage(image) {
  const mainImage = document.getElementById("main-image");

  if (!mainImage || !image) {
    return;
  }

  mainImage.src = image.src;
  mainImage.alt = image.alt;

  document.querySelectorAll(".thumb").forEach((thumb) => {
    thumb.classList.remove("active");
  });

  const activeThumb = image.closest(".thumb");
  if (activeThumb) {
    activeThumb.classList.add("active");
  }
}

document.querySelectorAll(".thumb").forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const thumbnailImage = thumb.querySelector("img");
    changeImage(thumbnailImage);
  });
});

const menuButton = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    const clickInsideMenu = menu.contains(event.target);
    const clickOnButton = menuButton.contains(event.target);

    if (!clickInsideMenu && !clickOnButton) {
      menu.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}
