"use strict"
let profession_timer;

function setProfession(){
    const profession_container = document.getElementById('profession');
    const profession_array = ['web developer', 'autisme peer coach', 'trainer']

    profession_container.innerText = profession_array[0];

    let i = 1;

    profession_timer = setInterval(function(){
        profession_container.innerText = profession_array[i];

        if(i === 2){
            i = 0;
        } else {
            i++
        }
    }, 2000);
}