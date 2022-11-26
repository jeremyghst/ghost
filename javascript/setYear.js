"use strict"

function setYear(){
    const container = document.getElementById('copyrightYear');

    const date = new Date();
    const getYear = date.getFullYear();

    container.innerText = getYear;
}
setYear();