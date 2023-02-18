"use strict"
let hobby_timer;

function setHobby(){
    const hobby_container = document.getElementById('hobby');
    const hobby_array = ['skateboarding', 'tattoos', 'coding', 'biking', 'designing'];

    hobby_container.innerText = hobby_array[0];

    let i = 1;

    hobby_timer = setInterval(function(){
        hobby_container.classList.add('flash');

        setTimeout(() => {
            hobby_container.innerText = hobby_array[i];
            hobby_container.classList.remove('flash')
        }, 500)

        if(i === hobby_array.length -1){
            i = 0;
        } else {
            i++
        }
    }, 5000);
}