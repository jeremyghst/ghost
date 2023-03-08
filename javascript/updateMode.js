"use strict";

const elementObj = {
    html: document.documentElement,    
    favicon: document.getElementById('favicon'),
    body: document.body,

    tag_gh: document.getElementById('tag_gh'),
    tag_logo: document.getElementById('tag_logo'),
    tag_st: document.getElementById('tag_st'),

    greeting: document.getElementById('greeting'),
    slogan: Array.from(document.getElementsByClassName('slogan')),

    balance: document.getElementById('balance'),
    information: document.getElementById('information'),


    footer_tag_gh: document.getElementById('footer_tag_gh'),
    footer_tag_st: document.getElementById('footer_tag_st'),

    copyright: document.getElementById('copyright'),
    copyrightYear: document.getElementById('copyrightYear'),


    bucket: document.getElementById('bucket'),

    social: Array.from(document.getElementsByClassName('social'))
}

const modeObj = [
    {
        id: 'ghost',
        color_1: '#3BA99C',
        color_2: '#256A62',
        color_3: '#11122C',
        logo: 'ghost',
        title: '',
        greeting: 'Boooooo!',
        information: component_me
    },
    {
        id: 'fox',
        color_1: '#4B63AA',
        color_2: '#2C3963',
        color_3: '#120802',
        logo: 'fox',
        title: 'Fox mode -',
        greeting: 'Wooooof!',
        information: component_web

    },
    {
        id: 'tiger',
        color_1: '#DB5957',
        color_2: '#B92A27',
        color_3: '#08090C',
        logo: 'tiger',
        title: 'Tiger mode -',
        greeting: 'Prrrrrr!',
        information: component_om
    }
]

const updateBtn = Array.from(document.getElementsByClassName('updateBtn'));
updateBtn.forEach(btn => {
    btn.addEventListener('click', (e) => updateMode(e));
})

function updateMode(e){
    resetAnimation()

    const target = e.target.closest('.updateBtn');
    const mode = target.dataset.mode;
    current_mode = mode; 
    
    const target_mode = modeObj.find(obj => obj.id === mode);

    elementObj.html.style.backgroundColor = target_mode.color_1;
    elementObj.html.style.color = target_mode.color_3;

    elementObj.favicon.href = `./assets/icon/favicon/${target_mode.logo}.svg`;

    document.title = `${target_mode.title} Ghost development`;

    elementObj.tag_gh.style.fill = target_mode.color_3;
    elementObj.tag_logo.src = `./assets/logo/beanie/${target_mode.logo}.svg`;
    elementObj.tag_st.style.fill = target_mode.color_3;

    elementObj.greeting.innerText = target_mode.greeting;
    elementObj.greeting.style.color = target_mode.color_2;

    elementObj.slogan.forEach(slogan => {
        slogan.style.color = target_mode.color_2;
    })

    elementObj.balance.src = `./assets/logo/balance/${target_mode.logo}.svg`;

    elementObj.information.innerHTML = target_mode.information;
    elementObj.information.style.backgroundColor = target_mode.color_2;

    elementObj.footer_tag_gh.style.fill = target_mode.color_3;
    elementObj.footer_tag_st.style.fill = target_mode.color_3;

    elementObj.copyright.style.color = target_mode.color_2;
    elementObj.copyrightYear.style.color = target_mode.color_2;

    const information_heading = Array.from(document.getElementsByClassName('information_heading'));
    information_heading.forEach(heading => {
        heading.style.color = target_mode.color_1;
    })

    const skills = Array.from(document.getElementsByClassName('progress'));
    skills.forEach(skill => {
        skill.style.backgroundColor = target_mode.color_1;
    })

    elementObj.bucket.src = `./assets/logo/bucket/${target_mode.logo}.svg`;

    elementObj.social.forEach(social => {
        social.style.backgroundColor = target_mode.color_2;
    })
}

function resetAnimation(){
    scrollUp();
    document.body.classList.add('locked');

    const visibleElement = Array.from(document.getElementsByClassName('visible'));

    visibleElement.forEach(el => {
        el.classList.remove('visible');
    })

    setTimeout(() => {
        setNav();
        setHero();
    }, 100);

    setTimeout(() => {
        document.body.classList.remove('locked');
    }, 1000);
}