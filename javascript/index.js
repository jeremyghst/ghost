"use strict"

let current_mode = 'ghost';

window.onload = (event) => {
    updateScroll();
    setNav();
    setHero();
    
    setTimeout(() => {
        document.body.classList.remove('locked');
    }, 1000);
};