"use strict"

let state = 'ghost';

const switchBtn = document.getElementById('ghost');
switchBtn.addEventListener('click', switchFunc);

const bodyElement = document.getElementById('body');
const heading_logo = document.getElementById('heading_logo');
const hero_logo = document.getElementById('boo');
const balance_logo = document.getElementById('balance');
const footer_logo = document.getElementById('tag');
const favicon_logo = document.getElementById('favicon');

const greeting = document.getElementById('greeting');

function switchFunc(){
    resetHero();

    if(state === 'ghost'){
        bodyElement.classList.add('foxMode');
        heading_logo.src = './assets/fox.svg';
        hero_logo.src = './assets/fox_bucket.svg';
        balance_logo.src = './assets/balance_fox.svg';
        footer_logo.src = './assets/tag_fox.png';
        favicon_logo.href = './assets/fox.svg';

        document.title = "Fox mode - Ghost development"; 

        greeting.innerText = 'Wooooof!';

        state = 'fox';
    } else {
        bodyElement.classList.remove('foxMode');
        heading_logo.src = './assets/ghost.svg';
        hero_logo.src = './assets/ghost_beanie.svg';
        balance_logo.src = './assets/balance_ghost.svg';
        footer_logo.src = './assets/tag_ghost.png';
        favicon_logo.href = './assets/ghost.svg';

        document.title = "Ghost development";

        greeting.innerText = 'Boooooo!';

        state = 'ghost';
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.classList.add('locked');
    setTimeout(setHero, 100);
    setTimeout(() => {
        document.body.classList.remove('locked');
    }, 1000);
}