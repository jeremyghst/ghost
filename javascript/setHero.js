"use strict"

const ghost = document.getElementById('ghost');
const instagram = document.getElementById('instagram');

const gh = document.getElementById('gh');
const boo = document.getElementById('boo');
const st = document.getElementById('st');

const hero = [ghost, instagram, gh, boo, st];

function resetHero(){
    const animated = Array.from(document.getElementsByClassName('animate'));
    animated.forEach(el => {
        el.classList.remove('animate');
    })
}

function setHero(){
    hero.forEach(el => {
        el.classList.add('animate');
    })
};