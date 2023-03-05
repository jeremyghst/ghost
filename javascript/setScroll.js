"use strict"

window.addEventListener('scroll', onScroll);
window.addEventListener('wheel', onScroll);

function onScroll(){
    const header = document.getElementById('header');
    const hero = document.getElementById('hero');
    
    if(window.pageYOffset > 90){
        if(!hero.classList.contains('min')){
            hero.classList.add('min');
        }
        if(!header.classList.contains('min')){
            header.classList.add('min');
        }
    } else {
        if(hero.classList.contains('min')){
            hero.classList.remove('min');
        }
        if(header.classList.contains('min')){
            header.classList.remove('min');
        }

        scrollOut();
    }

    const scrollInElement = Array.from(document.querySelectorAll('.scrollIn:not(.visible)'));

    scrollInElement.forEach(element => {
        if(
            (window.pageYOffset) > element.getBoundingClientRect().top
        ){
            scrollIn(element);
        }
    })
}

function scrollIn(element){
    element.classList.add('visible');

    if(element.dataset.function !== undefined){
        switch(element.dataset.function){
            case "information":
                fadeInInformation();
                setAge();
                break;
            default:
                break;
        }
    }
}

function scrollOut(){
    const scrollOutELement = Array.from(document.querySelectorAll('.scrollIn.visible'));

    scrollOutELement.forEach(element => {
        element.classList.remove('visible');
    })

    resetAge();
    fadeOutInformation();
}