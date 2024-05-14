document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector('a[href="#projects"]');
    const aboutSection = document.getElementById('sectionProjects');
    const aboutMail = document.querySelector('a[href="#email"]');
    const emailSection = document.getElementById('email');

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
        aboutSection.focus();
    });
    aboutMail.addEventListener('click', function (event) {
        event.preventDefault();
        emailSection.scrollIntoView({ behavior: "smooth", block: "start" });
        emailSection.focus();
        window.setTimeout(() => { window.scrollTo(5000, 5000) }, 5000);
    });
});


document.addEventListener("DOMContentLoaded", function () {

    const homeLink = document.querySelector('a[href="#home"]');
    const homeSection = document.getElementById('home');

    if (homeLink && homeSection) {

        homeLink.addEventListener('click', function (event) {
            event.preventDefault();
            homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
            homeSection.focus({ preventScroll: true });
            window.setTimeout(() => { window.scrollTo(0, 0) }, 50);//tnx sadko from stackoverflow
        });
    } else {
        console.error('homeLink or homeSection is null');
    }
});



const navbar = document.querySelector('.navbar');
const navbarButton = document.querySelector('.navbar-button');
const homeSection = document.querySelector('#home');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        navbar.children[1].style.display = 'none';
        navbar.children[2].style.display = 'none';
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        navbar.style.width = "100%";
        navbar.children[0].style.fontWeight = "bold";


    }
    else {
        navbar.children[1].style.display = 'block';
        navbar.children[2].style.display = 'block';
    }


});

document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll('.copy');

    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('click', function () {
            const textToCopy = "nickborcic1@ymail.com; nickborcic69@gmail.com";
            navigator.clipboard.writeText(textToCopy).then(function () {
                console.log(textToCopy + ' copied to clipboard');

            }).catch(function (error) {
                console.error('Could not copy text: ', error);
            });
        });
    });
});
