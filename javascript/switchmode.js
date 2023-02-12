"use strict"
const switchBtn = document.getElementById('ghost');
switchBtn.addEventListener('click', switchFunc);

const bodyElement = document.getElementById('body');
const heading_logo = document.getElementById('heading_logo');
const hero_logo = document.getElementById('boo');
const balance_logo = document.getElementById('balance');
const footer_logo = document.getElementById('tag');

function switchFunc(){
    if(localStorage.getItem('state') === 'ghost'){
        setFox();

    } else {
        bodyElement.classList.remove('voxMode');
        heading_logo.src = './assets/ghost.svg';
        hero_logo.src = './assets/ghost_beanie.svg';
        balance_logo.src = './assets/balance_ghost.svg';
        footer_logo.src = './assets/tag_ghost.png';

        localStorage.setItem("state", "ghost"); 
    }
}

function setFox(){
    bodyElement.classList.add('voxMode');
    heading_logo.src = './assets/vox.svg';
    hero_logo.src = './assets/vox_bucket.svg';
    balance_logo.src = './assets/balance_vox.svg';
    footer_logo.src = './assets/tag_vox.png';

    localStorage.setItem("state", "vox"); 
}