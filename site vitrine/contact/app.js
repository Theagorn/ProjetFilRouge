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


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log(`Nom: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);
    });
});
