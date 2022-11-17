"use strict"
let softwareEngineringTrackTimer;

function setSoftwareEngineringTrack(){
    const softwareEngineringTrack_container = document.getElementById('softwareEngineringTrack');
    const softwareEngineringTrack_container_array = ['Capgemini', 'Spectrum multimedia & IT']

    softwareEngineringTrack_container.innerText = softwareEngineringTrack_container_array[0];

    let i = 1;

    softwareEngineringTrackTimer = setInterval(function(){
        softwareEngineringTrack_container.innerText = softwareEngineringTrack_container_array[i];

        if(i === 1){
            i = 0;
        } else {
            i++
        }
    }, 2000);
}