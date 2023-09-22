document.addEventListener("scroll", function () {
    let boutonRetourHaut = document.getElementById("retourHaut");
    if (window.pageYOffset > 100) { // Vous pouvez ajuster ce chiffre selon votre préférence
        boutonRetourHaut.style.display = "block";
    } else {
        boutonRetourHaut.style.display = "none";
    }
});

document.getElementById("retourHaut").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
