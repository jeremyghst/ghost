const skills = {
    'html': 90,
    'css': 90,
    'scss': 80,
    'javascript': 80,
    'reactjs': 50,
    'mysql': 60,
    'php': 70,
    'laravel': 60
}

function setSkills(){
    Object.entries(skills).forEach(skill => {
        const [language, width] = skill;
        const container = document.getElementById(language);
        container.style.width = `${width}%`;
    })
}