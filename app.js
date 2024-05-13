document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector('a[href="#projects"]');
    const aboutSection = document.querySelector('#projects');

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default anchor link behavior
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" }); // Smooth scroll to the About section
        aboutSection.focus(); // Focus on the About section
    });
});

const navbar = document.querySelector('.navbar');
const navbarButton = document.querySelector('.navbar-button');
const homeSection = document.querySelector('#home');

if (!navbar.style.display || navbar.style.display === 'none') {
    navbarButton.style.display = 'block';
    homeSection.style.backgroundColor = 'lightblue';
}