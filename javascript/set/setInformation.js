"use strict"

function fadeInInformation(){
    const information_fadeIn = Array.from(document.querySelectorAll('.information_fadeIn:not(.visible)'));

    let i = 0;
    const fadeInterval = setInterval(() => {
        information_fadeIn[i].classList.add('visible');

            switch(current_mode){
                case "ghost":
                    break;
                case "anjing":
                    setSkillInformation(web_information, information_fadeIn[i]);
                    break;
                case "kucing":
                    setSkillInformation(om_information, information_fadeIn[i]);
                default:
                    break;
            }

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

