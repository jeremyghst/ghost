"use strict"
let hobby_timer;

function setHobby(){
    const hobby_container = document.getElementById('hobby');
    const hobby_array = ['skateboarding', 'tattoos', 'coding', 'biking'];

    hobby_container.innerText = hobby_array[0];

    let i = 1;

    hobby_timer = setInterval(function(){
        hobby_container.innerText = hobby_array[i];

        if(i === 3){
            i = 0;
        } else {
            i++
        }
    }, 2000);
}