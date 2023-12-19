'use-strict'

const headerNav = document.getElementById('header-nav');
const toggleBtn = document.querySelector('.menu-button');
const toggleBtnText = document.getElementById('menu-text');

toggleBtn.addEventListener('click', () => toggleMenu());

const toggleMenu = () => {
    const isVisible = headerNav.getAttribute("data-visible");
    
    if (isVisible === "true") hideMenu();
    else showMenu();
}

const showMenu = () => {
    headerNav.setAttribute("data-visible", true);
    toggleBtn.setAttribute("aria-expanded", true);
}

const hideMenu = () => {
    headerNav.setAttribute("data-visible", false);
    toggleBtn.setAttribute("aria-expanded", false);
}