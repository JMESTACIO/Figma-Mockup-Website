// AquaStride Academy - main script


// open and close the menu on mobile
function setupMenu() {
    const menuButton = document.querySelector(".menu-button");
    const navList = document.getElementById("navList");

    if (!menuButton || !navList) {
        return;
    }

    menuButton.addEventListener("click", function () {
        const isOpen = navList.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", isOpen);
    });

    // close the menu again when a link is clicked
    const links = navList.querySelectorAll(".nav-link");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            navList.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}


// enrollment form on the contact page
function setupEnrollForm() {
    const form = document.getElementById("enrollForm");
    const message = document.getElementById("formMessage");
    const nameInput = document.getElementById("fullName");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();   // stop the page from reloading

        // use the first name in the thank-you message
        const firstName = nameInput.value.trim().split(" ")[0];

        form.reset();   // clear the form first, then show the message
        message.textContent = "Thank you, " + firstName + "! Our registrar will contact you shortly.";
        message.style.display = "block";
    });

    // hide the message again when the reset button is clicked
    form.addEventListener("reset", function () {
        message.style.display = "none";
    });
}


setupMenu();
setupEnrollForm();
