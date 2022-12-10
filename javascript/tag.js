"use strict"

const tag = document.getElementById('tag');
tag.addEventListener('click', scrollUp);

function scrollUp(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}