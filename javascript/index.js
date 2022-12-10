"use strict"

window.addEventListener("load", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setProfession();
    setHobby();
    setAge();
    setSkills();

    setTimeout(() => {
        document.body.classList.remove('locked');
    }, 1000);
});

window.addEventListener('scroll', onMove)
window.addEventListener('wheel', onMove);

function onMove(){
    const header = document.getElementById('header');
    const hero = document.getElementById('hero');

    const socialmedia = document.getElementById('socialmedia').getBoundingClientRect();
    const social = Array.from(document.getElementsByClassName('social'));

    if(window.pageYOffset > 90){
        if(!hero.classList.contains('min')){
            hero.classList.add('min');
        }
        if(!header.classList.contains('min')){
            header.classList.add('min');
        }
        fade('in');
    } else {
        if(hero.classList.contains('min')){
            hero.classList.remove('min');
        }
        if(header.classList.contains('min')){
            header.classList.remove('min');
        }
        fade('out');
    }

    if(
        socialmedia.top >= 0 &&
        socialmedia.left >= 0 &&
        socialmedia.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        socialmedia.right <= (window.innerWidth || document.documentElement.clientWidth)
    ){
        social.forEach(s => {
            if(!s.classList.contains('visible')){
                s.classList.add('visible');
            }
        })
    } else {
        social.forEach(s => {
            if(s.classList.contains('visible')){
                s.classList.remove('visible');
            }
        })
    }
}