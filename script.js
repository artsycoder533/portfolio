const hamburgerBtn = document.querySelector(".nav__hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar__link");
const sendBtn = document.getElementById("send");

hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
    hamburgerBtn.classList.toggle("open");
});

//sticky header
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.toggle("show");
        hamburgerBtn.classList.toggle("open");
    });
});

sendBtn.addEventListener("click", () => {
    const form = document.querySelector(".contact__form");
    

});