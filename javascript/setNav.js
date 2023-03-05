"use strict"

const nav_switch = document.getElementById('nav_switch');
const nav_social = document.getElementById('nav_social');

const nav = [nav_switch, nav_social];

function setNav(){
    nav.forEach(ul => {
        ul.classList.add('visible');
    })
}