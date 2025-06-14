const date = new Date();
const year = date.getFullYear();

const yearDisplay = document.getElementById("yearContainer");
yearDisplay.innerHTML = year;

function toggleMobileMenu() {
    const mobileMenu = document.querySelector(".dropdown");
    mobileMenu.classList.toggle("active");
}

// Optional: Close menu when a link is clicked (for smoother navigation)
document.querySelectorAll('.dropdown a').forEach(link => {
    link.addEventListener('click', () => {
        const mobileMenu = document.querySelector(".dropdown");
        mobileMenu.classList.remove("active");
    });
});