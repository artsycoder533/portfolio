const hamburgerBtn = document.querySelector(".nav__hamburger");
const sidebar = document.querySelector(".sidebar");

hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
    hamburgerBtn.classList.toggle("open");
});

//sticky header
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
});