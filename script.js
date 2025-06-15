const date = new Date();
const year = date.getFullYear();

function hamburg() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

const yearDisplay = document.getElementById("yearContainer");
yearDisplay.innerHTML = year;

function toggleMobileMenu() {
    const mobileMenu = document.querySelector(".dropdown");
    mobileMenu.classList.toggle("active");
}

document.querySelectorAll('.dropdown a').forEach(link => {
    link.addEventListener('click', () => {
        const mobileMenu = document.querySelector(".dropdown");
        mobileMenu.classList.remove("active");
    });
});