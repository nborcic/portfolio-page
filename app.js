document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector('a[href="#about"]');
    const aboutSection = document.querySelector('#about');

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default anchor link behavior
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" }); // Smooth scroll to the About section
        aboutSection.focus(); // Focus on the About section
    });
});