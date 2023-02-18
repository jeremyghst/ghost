"use strict"
let hobby_timer;

function setHobby(){
    const hobby_container = document.getElementById('hobby');
    const hobby_array = ['skateboarding', 'tattoos', 'coding', 'biking', 'designing'];
    const timer = 3000;

    hobby_container.innerText = hobby_array[0];
    let i = 1;

    hobby_timer = setInterval(function(){
        const hobby_letters = hobby_array[i].split(''); 

        let l = 0;
        const letter_timer = setInterval(function () {
            if(l === 0 ){
                hobby_container.textContent = hobby_letters[l];
            } else {
                hobby_container.textContent += hobby_letters[l];
            }

            if(l === hobby_letters.length - 1){
                clearInterval(letter_timer)
            } else {
                l++
            }
        }, timer / 100);

        if(i === hobby_array.length - 1){
            i = 0;
        } else {
            i++
        }
    }, timer);
}