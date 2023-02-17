"use strict"
let current_state = 'ghost';

window.addEventListener("load", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setHero();
    setProfession();
    setHobby();
    setAge();
    setSkills();

    if(!localStorage.hasOwnProperty('state')){
        localStorage.setItem('state', current_state);
    }
    setState()

    setTimeout(() => {
        document.body.classList.remove('locked');
    }, 1000);
});

window.addEventListener('scroll', onMove)
window.addEventListener('wheel', onMove);

function onMove(){
    const header = document.getElementById('header');
    const hero = document.getElementById('hero');

    const socialQuotes = document.getElementById('socialQuotes').getBoundingClientRect();
    const socialmedia = document.getElementById('socialmedia').getBoundingClientRect();

    if(window.pageYOffset > 90){
        if(!hero.classList.contains('min')){
            hero.classList.add('min');
        }
        if(!header.classList.contains('min')){
            header.classList.add('min');
        }
        fadeAbout('in');
    } else {
        if(hero.classList.contains('min')){
            hero.classList.remove('min');
        }
        if(header.classList.contains('min')){
            header.classList.remove('min');
        }
        fadeAbout('out');
        fadeSocial('out');
        fadeSocialQoute('out');
    }

    if(
        window.pageYOffset > socialQuotes.top
    ){
        fadeSocialQoute('in');
    }

    if(
        socialmedia.top >= 0 &&
        socialmedia.left >= 0 &&
        socialmedia.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        socialmedia.right <= (window.innerWidth || document.documentElement.clientWidth)
    ){
        fadeSocial('in');
    }
}