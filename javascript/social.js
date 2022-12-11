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

function fadeSocialQoute(dir){
    const socialQuotes = document.getElementById("socialQuotes");

    if(dir === 'in'){
        if(!socialQuotes.classList.contains('visible')){
            socialQuotes.classList.add('visible');
        }
    } else {
        if(socialQuotes.classList.contains('visible')){
            socialQuotes.classList.remove('visible');
        }
    }
}