"use strict"

//To get my current age - years
function getYears(){
    const today = new Date();
    let year = today.getFullYear() - 1993;
    const month = today.getMonth() + 1 - 3;

    if(month < 0){
        year = year - 1;
      }
      
      return year;
}

//To get my current age - months
function getMonths(){
    const today = new Date();
    let month = today.getMonth() + 1 - 3;

    if(month < 0){
        month = 12 + month;
    }
      
      return month;
}

//To get my current age - days
function getDays(){
    const today = new Date();
    const days = today.getDate() - 1;

    return days;
}

function setAge(){
    const year_container = document.getElementById('year');
    const month_container = document.getElementById('month');
    const day_container = document.getElementById('day');

    year_container.innerText = `${getYears()} years`;

    let month_text = 'months';
    const m = getMonths();
    
    if(m === 1){
        month_text = 'month';
    }

    month_container.innerText = `${m} ${month_text}`;


    let day_text = 'days';
    const d = getDays();

    if(d === 1){
        day_text = 'day';
    }

    day_container.innerText = `${d} ${day_text}`;
}