"use strict";

const elementObj = {
    html: document.documentElement,    
    favicon: document.getElementById('favicon'),
    body: document.body,

    tag_gh: document.getElementById('tag_gh'),
    tag_logo: document.getElementById('tag_logo'),
    tag_st: document.getElementById('tag_st'),

    greeting: document.getElementById('greeting'),
    intro_slogan: document.getElementById('intro_slogan'),
    slogan: Array.from(document.getElementsByClassName('slogan')),

    balance: document.getElementById('balance'),
    information: document.getElementById('information'),


    footer_tag_gh: document.getElementById('footer_tag_gh'),
    footer_tag_st: document.getElementById('footer_tag_st'),

    copyright: document.getElementById('copyright'),
    copyrightYear: document.getElementById('copyrightYear'),


    bucket: document.getElementById('bucket'),

    slogan2: document.getElementById('socials_slogan'),

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
        slogan: 'balance is key',
        information: component_me,
        slogan2: 'share your thoughts'
    },
    {
        id: 'fox',
        color_1: '#4B63AA',
        color_2: '#2C3963',
        color_3: '#120802',
        logo: 'fox',
        title: 'Fox mode -',
        greeting: 'Wooooof!',
        slogan: 'balance your spirit',
        information: component_web,
        slogan2: 'open your mind'

    },
    {
        id: 'tiger',
        color_1: '#CB525C',
        color_2: '#8D2A32',
        color_3: '#08090C',
        logo: 'tiger',
        title: 'Tiger mode -',
        greeting: 'Prrrrrr!',
        slogan: 'balance your soul',
        information: component_om,
        slogan2: 'open your heart'
    }
]

const updateBtn = Array.from(document.getElementsByClassName('updateBtn'));
updateBtn.forEach(btn => {
    btn.addEventListener('click', (e) => updateMode(e));
})

function updateMode(e){
    const target = e.target.closest('.updateBtn');
    const mode = target.dataset.mode;
    current_mode = mode;

    localStorage.setItem('ghostdevelopment', current_mode);

    setMode(current_mode)
}

function setMode(mode){
    resetAnimation()
    
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

    elementObj.intro_slogan.innerText = target_mode.slogan;

    elementObj.slogan.forEach(slogan => {
        slogan.style.color = target_mode.color_2;
    })

    elementObj.balance.src = `./assets/logo/balance/${target_mode.logo}.svg`;

    elementObj.information.innerHTML = target_mode.information;
    elementObj.information.style.backgroundColor = target_mode.color_2;

    elementObj.slogan2.innerText = target_mode.slogan2;

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
    updateScroll();
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