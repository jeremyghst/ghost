"use strict"

window.onload = (event) => {

    setCopyright();
    updateScroll();
    setNav();
    setHero();
    
    setTimeout(() => {
        document.body.classList.remove('locked');
    }, 1000);
};