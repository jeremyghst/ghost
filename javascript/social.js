"use strict"

function fadeSocial(dir){
    const socials = Array.from(document.getElementsByClassName('socialFadein'));
    const socialmedia = document.getElementById('socialmedia')

    socials.forEach(social => {

        if(dir === 'in'){
            if(!social.classList.contains('visible')){
                social.classList.add('visible');
            }

            if(!socialmedia.classList.contains('visible')){
                socialmedia.classList.add('visible');

                setTimeout(() => {
                    social.scrollIntoView({behavior: "smooth", block: "start"});
                }, 1750)
            }
        } else {
            if(social.classList.contains('visible')){
                social.classList.remove('visible');
            }

            if(socialmedia.classList.contains('visible')){
                socialmedia.classList.remove('visible');
            }
        }
    })
}