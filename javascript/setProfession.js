"use strict"
let profession_timer;

function setProfession(){
    const profession_container = document.getElementById('profession');
    const profession_array = ['web developer', 'autism peer coach', 'trainer', 'scrum master']
    const timer = 3000;


    profession_container.innerText = profession_array[0];
    let i = 1;

    profession_timer = setInterval(function(){
        const profession_letters = profession_array[i].split(''); 
        let l = 0;
        const letter_timer = setInterval(function () {
            if(l === 0 ){
                profession_container.textContent = profession_letters[l];
            } else {
                profession_container.textContent += profession_letters[l];
            }

            if(l === profession_letters.length - 1){
                clearInterval(letter_timer)
            } else {
                l++
            }
        }, timer / profession_letters.length / 5);

        if(i === profession_array.length - 1){
            i = 0;
        } else {
            i++
        }
    }, timer);
}