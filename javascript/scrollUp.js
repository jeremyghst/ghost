"use strict"

const footer_tag = document.getElementById('footer_tag');
footer_tag.addEventListener('click', scrollUp);

function scrollUp(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}