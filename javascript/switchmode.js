"use strict"

let state = 'ghost';

const switchBtn = document.getElementById('ghost');
switchBtn.addEventListener('click', switchFunc);

const bodyElement = document.getElementById('body');
const heading_logo = document.getElementById('heading_logo');
const hero_logo = document.getElementById('boo');
const balance_logo = document.getElementById('balance');
const footer_logo = document.getElementById('tag');

function switchFunc(){
    if(state === 'ghost'){
        bodyElement.classList.add('foxMode');
        heading_logo.src = './assets/fox.svg';
        hero_logo.src = './assets/fox_bucket.svg';
        balance_logo.src = './assets/balance_fox.svg';
        footer_logo.src = './assets/tag_fox.png';
    
        state = 'fox';
    } else {
        bodyElement.classList.remove('foxMode');
        heading_logo.src = './assets/ghost.svg';
        hero_logo.src = './assets/ghost_beanie.svg';
        balance_logo.src = './assets/balance_ghost.svg';
        footer_logo.src = './assets/tag_ghost.png';

        state = 'ghost';
    }
}