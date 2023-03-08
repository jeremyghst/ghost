"use strict"

let current_mode = 'ghost';

window.onload = (event) => {
    if(!localStorage.hasOwnProperty('ghostdevelopment')){
        localStorage.setItem('ghostdevelopment', current_mode);
    } else {
        const storage_mode = localStorage.getItem('ghostdevelopment');

        if(storage_mode !== "ghost"){
            current_mode = storage_mode;
            setMode(current_mode);
        }
    }

    updateScroll();
    setNav();
    setHero();
    
    setTimeout(() => {
        document.body.classList.remove('locked');
    }, 1000);
};