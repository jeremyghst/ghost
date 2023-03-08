"use strict"

function setSkillInformation(obj, set){
    const skills = Array.from(set.getElementsByClassName('progress'));
    skills.forEach(skill => {
        const progress = skill.dataset.skill;
        console.log(progress)
        skill.style.width = `${obj[progress]}%`;
    })
}

function resetSkill(){
    const skills = Array.from(document.getElementsByClassName('progress'));
    skills.forEach(skill => {
        skill.style.width = 0;
    })
}