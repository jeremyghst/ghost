"use strict"

const container = document.getElementById('copyrightYear');
const date = new Date();
const getYear = date.getFullYear();
const timerCopy = 2000; 

function fadeInCopyright(){
    container.innerText = "";

    let i = 0;

    const copyInterval = setInterval(() => {
        container.innerText = i;

        if(i < getYear){
            i++
        } else {
            clearInterval(copyInterval);
        }
    }, (timerCopy/getYear));
}