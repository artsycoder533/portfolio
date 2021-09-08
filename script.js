const hamburgerBtn = document.querySelector(".nav__hamburger");
const sidebar = document.querySelector(".sidebar");

hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
    hamburgerBtn.classList.toggle("open");
});