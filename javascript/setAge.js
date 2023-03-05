"use strict"

const year_container = document.getElementById('year');
const month_container = document.getElementById('month');
const day_container = document.getElementById('day');

const timerAge = 2000; 

function getYears(){
    const today = new Date();
    let year = today.getFullYear() - 1993;
    const month = today.getMonth() + 1 - 3;

    if(month < 0){
        year = year - 1;
      }
      
      return year;
}

function getMonths(){
    const today = new Date();
    let month = today.getMonth() + 1 - 3;

    if(month < 0){
        month = 12 + month;
    }
      
      return month;
}

function getDays(){
    const today = new Date();
    const days = today.getDate() - 1;

    return days;
}

function setAge(){
    const getYear = getYears();
    const getMonth = getMonths();
    const getDay = getDays();

    let y = 0;
    let m = 0;
    let d= 0;

    const year_timer = setInterval(function(){
        year_container.innerText = `${y} years`;


        if(y === getYear){
            clearInterval(year_timer);
        } else {
            y++;
        }

    }, (timerAge/getYear));

    const month_timer = setInterval(function(){
        let month_text = 'months';

        if(m === 1){
            month_text = 'month';
        }

        month_container.innerText = `${m} ${month_text}`;

        if(Math.abs(m) === getMonth){
            clearInterval(month_timer);
        } else {
            m++;
        }

    }, (timerAge/getMonth));

    const day_timer = setInterval(function(){

        let day_text = 'days';

        if(d === 1){
            day_text = 'day';
        }

        day_container.innerText = `${d} ${day_text}`;

        if(Math.abs(d) === getDay){
            clearInterval(day_timer);
        } else {
            d++;
        }

    }, (timerAge/getDay));
}

function resetAge(){
    year_container.innerText = "0 years";
    month_container.innerText = "0 months";
    day_container.innerText = "0 days";
}