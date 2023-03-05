"use strict"

const tag_gh = document.getElementById('tag_gh');
const tag_logo = document.getElementById('tag_logo');
const tag_st = document.getElementById('tag_st');

const hero = [tag_gh, tag_logo, tag_st];

function setHero(){
    hero.forEach(part => {
        part.classList.add('visible');
    })
}