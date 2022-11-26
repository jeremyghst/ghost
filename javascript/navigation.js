"use strict"

const navBtns = Array.from(document.getElementsByClassName('navBtn'));

navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => navigate(e));
})

function navigate(e){
    const btn = e.target.closest('.navBtn');
    const target = document.getElementById(btn.dataset.target);
    const target_position = target.offsetTop;
    
    window.scrollTo({
        top: target_position,
        behavior: 'smooth'
    })
}
