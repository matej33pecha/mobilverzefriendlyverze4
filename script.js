function toggleService(element) {
    const allTexts = document.querySelectorAll(".SLUŽBA_TEXT");

    allTexts.forEach(text => {
        if (text !== element.querySelector(".SLUŽBA_TEXT")) {
            text.style.maxHeight = null;
        }
    });

    const text = element.querySelector(".SLUŽBA_TEXT");

    if (text.style.maxHeight) {
        text.style.maxHeight = null;
    } else {
        text.style.maxHeight = text.scrollHeight + "px";
    }
}
function toggleAbout() {
    const el = document.getElementById("O_MNE_VICE_JS");
    const btn = document.querySelector(".O_MNE_BTN");

    if (el.classList.contains("aktivni")) {
        el.classList.remove("aktivni");
        btn.textContent = "Zobrazit více";
    } else {
        el.classList.add("aktivni");
        btn.textContent = "Skrýt";
    }
}
function openReservio() {
    window.location.href = "https://matej-pecha.reservio.com";
}
function toggleDropdown(event) {
    event.preventDefault();

    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("active");
}

// klik mimo → zavře menu
document.addEventListener("click", function(e) {
    const dropdown = document.querySelector(".dropdown");

    if (!dropdown.contains(e.target)) {
        document.getElementById("dropdownMenu").classList.remove("active");
    }
});