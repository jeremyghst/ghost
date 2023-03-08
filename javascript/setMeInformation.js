"use strict"

const me_information = 
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
function setMeInformation(){

    me_information.forEach(info => {        
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