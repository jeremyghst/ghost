"use strict"

function fadeSocial(dir){
    const socials = Array.from(document.getElementsByClassName('socialFadein'));

    
    socials.forEach(social => {

        if(dir === 'in'){
            if(!social.classList.contains('visible')){
                social.classList.add('visible');
            }
        } else {
            if(social.classList.contains('visible')){
                social.classList.remove('visible');
            }
        }
    })
}