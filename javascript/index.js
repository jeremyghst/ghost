"use strict"

window.onload = (event) => {
    scrollUp();
    setNav();
    setHero();
    setInformation();
    
    setTimeout(() => {
        document.body.classList.remove('locked');
    }, 1000);
};