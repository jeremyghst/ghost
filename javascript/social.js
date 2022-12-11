"use strict"

function fadeSocial(dir){
    const socials = Array.from(document.getElementsByClassName('socialFadein'));
    const socialQuotes = document.getElementById("socialQuotes");

    socials.forEach(social => {

        if(dir === 'in'){
            if(!social.classList.contains('visible')){
                social.classList.add('visible');
            }

            if(!socialQuotes.classList.contains('visible')){
                socialQuotes.classList.add('visible');
            }
        } else {
            if(social.classList.contains('visible')){
                social.classList.remove('visible');
            }

            if(socialQuotes.classList.contains('visible')){
                socialQuotes.classList.remove('visible');
            }
        }
    })
}