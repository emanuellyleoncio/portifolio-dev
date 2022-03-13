const btnMenu = document.querySelector('.menu-bar-btn');
const btnCloseMenu = document.querySelector('.menu-bar-close');
const menuBarOpened = document.querySelector('.menu-bar-opened');
const menuBarClose = document.querySelector('.menu-bar-closed');

const homeBtn = document.querySelector('.header-home');
const aboutBtn = document.querySelector('.header-about');
const projectsBtn = document.querySelector('.header-projects');
const contactBtn = document.querySelector('.header-contact');
const moreDetails = document.querySelector('#moreDetails');


btnMenu.addEventListener('click', () => {
    menuBarOpened.classList.remove('hidden');
    menuBarClose.classList.add('hidden');
});

btnCloseMenu.addEventListener('click', () => {
    menuBarOpened.classList.add('hidden');
    menuBarClose.classList.remove('hidden');
});

function scroll (item) {
    document.querySelector(item).scrollIntoView({ behavior: "smooth" })
};

homeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    scroll('#menuBar');
});

aboutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    scroll('#about');
});

projectsBtn.addEventListener('click', (event) => {
    event.preventDefault();
    scroll('#projects');
});

contactBtn.addEventListener('click', (event) => {
    event.preventDefault();
    scroll('#contact');
});

moreDetails.addEventListener('click', (event) => {
    event.preventDefault();
    scroll('#about');
});