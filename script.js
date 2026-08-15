/* =========================================
   EMAILJS INITIALIZATION
========================================= */

emailjs.init({
    publicKey: "Iv2cmXZH0GHUV5I1f"
});


/* =========================================
   MOBILE NAVBAR
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


/* =========================================
   CLOSE MENU AFTER CLICKING LINK
========================================= */

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    /* Validation */

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        return;
    }


    /* =========================================
       SEND EMAIL USING EMAILJS
    ========================================= */

    const templateParams = {
        name: name,
        email: email,
        message: message
    };


    emailjs.send(
        "service_7uzgbfk",
        "template_ce0qtrh",
        templateParams
    )

    .then(function () {

        alert(
            "Thank you, " + name +
            "! Your message has been sent successfully."
        );

        contactForm.reset();

    })

    .catch(function (error) {

        console.error("EmailJS Error:", error);

        alert(
            "EmailJS Error:\nStatus: " +
            error.status +
            "\nMessage: " +
            error.text
        );

    });

});


/* =========================================
   SIMPLE SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section-title, .about-content, .skill-card, .project-card, .contact-info, .contact-form"
);

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }

    });
}

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* =========================================
   ACTIVE NAVBAR SECTION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll("#nav-menu a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });
}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/* =========================================
   BACK TO TOP BUTTON
========================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =========================================
   ACTIVE NAVBAR LINK
========================================= */

const allSections = document.querySelectorAll("section");
const allNavLinks = document.querySelectorAll("#nav-menu a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    allSections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    allNavLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});

const nameText = "Kishan Kumar";
const typingName = document.getElementById("typing-name");

let index = 0;

function typeName() {
    if (index < nameText.length) {
        typingName.textContent += nameText.charAt(index);
        index++;
        setTimeout(typeName, 120);
    }
}

typeName();