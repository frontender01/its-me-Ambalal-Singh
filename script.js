// script.js

// Interactive JavaScript animations and functionality for the bio website

// Example: Smooth scroll to section on click
const smoothScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

// Example of event listener for a menu link
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        smoothScrollToSection(targetId);
    });
});

// Example: Fade in effect for elements on scroll
const fadeInElementsOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInElementsOnScroll);

// More interactive animations and functionalities can go here...