const hamburgerBtn = document.querySelector(".nav__hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar__link");
const sendBtn = document.getElementById("send");
const date = document.getElementById("date");

date.textContent = new Date().getFullYear();

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


const form = document.getElementById("form");

async function handleSubmit(e) {
    e.preventDefault();
    const status = document.querySelector(".contact__success");
    const data = new FormData(e.target);
    fetch(e.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            status.classList.add("visible");
            status.textContent = "Form Sent Successfully!";
            form.reset();
        })
        .catch((error) => {
            status.classList.add("visible");
            status.textContent = "Oops! There was a problem submitting your form";
        });
}
form.addEventListener("submit", handleSubmit);