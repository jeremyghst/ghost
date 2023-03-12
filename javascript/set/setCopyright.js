"use strict"

const container = document.getElementById('copyrightYear');
const date = new Date();
const getYear = date.getFullYear();

function setCopyright(){
    container.innerText = getYear;
}