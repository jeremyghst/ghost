"use strict"
const switchBtn = document.getElementById('ghost');
switchBtn.addEventListener('click', switchFunc);

const bodyElement = document.getElementById('body');
const heading_logo = document.getElementById('heading_logo');
const hero_logo = document.getElementById('boo');
const balance_logo = document.getElementById('balance');

function switchFunc(){
    if(localStorage.getItem('state') === 'ghost'){
        bodyElement.classList.add('voxMode');
        heading_logo.src = './assets/vox.svg';
        hero_logo.src = './assets/vox_bucket.svg';
        balance_logo.src = './assets/balance_vox.svg';

        localStorage.setItem("state", "vox"); 
    } else {
        bodyElement.classList.remove('voxMode');
        heading_logo.src = './assets/ghost.svg';
        hero_logo.src = './assets/ghost_beanie.svg';
        balance_logo.src = './assets/balance_ghost.svg';

        localStorage.setItem("state", "ghost"); 
    }
}