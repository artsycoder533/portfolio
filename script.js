const hamburgerBtn = document.getElementById("hamburger");
const sidebar = document.querySelector(".sidebar");

hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
})