"use strict"

window.onload = (event) => {
    setNav();
    setHero();
    setInformation();
    
    setTimeout(() => {
        document.body.classList.remove('locked');
    }, 1000);
};