const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
  if (!sidebar.classList.contains("-translate-x-full")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});
