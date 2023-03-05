"use strict"

const information = 
[
    {
        id: 'hobby',
        array: ['skateboarding', 'tattoos', 'coding', 'biking', 'designing']
    },
    {
        id: 'profession',
        array: ['web developer', 'autism peer coach', 'trainer', 'scrum master']
    }
]

function fadeInInformation(){
    const information_fadeIn = Array.from(document.querySelectorAll('.information_fadeIn:not(.visible)'));

    let i = 0;
    const fadeInterval = setInterval(() => {
        information_fadeIn[i].classList.add('visible');

        if(i < information_fadeIn.length - 1){
            i++
        } else {
            clearInterval(fadeInterval);
        }
    }, 1000 / information_fadeIn.length);
}

function fadeOutInformation(){
    const information_fadeOut = Array.from(document.querySelectorAll('.information_fadeIn.visible'));
    information_fadeOut.forEach(fadeOut => {
        fadeOut.classList.remove('visible');
    })
}

function setInformation(){

    information.forEach(info => {        
        let i = 1;

        const container = document.getElementById(info.id);

        setInterval(() => {
            container.classList.remove('visible');
            container.innerText = info.array[i];

            setTimeout(() => {
                container.classList.add('visible');
            }, 200)

            if(i < info.array.length - 1){
                i++
            } else {
                i = 0;
            }

        }, 5000)
    })
}