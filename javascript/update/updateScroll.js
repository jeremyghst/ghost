"use strict"

const footer_tag = document.getElementById('footer_tag');
footer_tag.addEventListener('click', updateScroll);

function updateScroll(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}