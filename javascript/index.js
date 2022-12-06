"use strict"

window.addEventListener("load", (event) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setProfession();
    setHobby();
    setSoftwareEngineringTrack();
    setAge();
    setSkills();

    setTimeout(() => {
        document.body.classList.remove('locked');
    }, 1000);
});

window.addEventListener('wheel', (e) => {
    onMove(e);
})

window.addEventListener('scroll', (e) => {
    onMove(e);
})

function onMove(e){
    const header = document.getElementById('header');
    const hero = document.getElementById('hero');

    if(window.pageYOffset > 90){
        hero.classList.add('min');
        header.classList.add('min');
    } else {
        hero.classList.remove('min');
        header.classList.remove('min');
    }
}