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
    console.log(window.pageYOffset)
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