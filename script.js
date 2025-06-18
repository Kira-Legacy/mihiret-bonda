function toggleMobileMenu() {
    const mobileMenu = document.getElementById("dropdown");
    const hamburgIcon = document.getElementById("hamburg");
    const cancelIcon = document.getElementById("cancel");

    const isActive = mobileMenu.classList.contains("active");

    if (isActive) {
        mobileMenu.classList.remove("active");
        hamburgIcon.style.display = "flex";
        cancelIcon.style.display = "none";
    } else {
        mobileMenu.classList.add("active");
        hamburgIcon.style.display = "none";
        cancelIcon.style.display = "flex";
    }
}

document.querySelectorAll('.dropdown a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("dropdown").classList.remove("active");
        document.getElementById("hamburg").style.display = "flex";
        document.getElementById("cancel").style.display = "none";
    });
});

const date = new Date();
const year = date.getFullYear();

const yearDisplay = document.getElementById("yearContainer");
yearDisplay.innerHTML = year;

function googleTranslateElementInit() {
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    new google.translate.TranslateElement(
        {
            pageLanguage: "en",
            includedLanguages: "en,am",
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
        },
        "google_translate_element"
    );

    var englishParagraph = document.getElementById("english_paragraph");
    if (englishParagraph) {
        google.translate.TranslateElement(
            { pageLanguage: "en" },
            "english_paragraph"
        );
    }
}

