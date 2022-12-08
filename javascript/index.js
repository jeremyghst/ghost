"use strict"

window.addEventListener("load", (event) => {
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

window.addEventListener('wheel', onMove);

window.addEventListener('scroll', onMove)

function onMove(e){
    const header = document.getElementById('header');
    const hero = document.getElementById('hero');

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
}