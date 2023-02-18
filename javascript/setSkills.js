const webdevelopment = {
    'html': 90,
    'css': 90,
    'scss': 80,
    'javascript': 80,
    'reactjs': 50,
    'mysql': 60,
    'php': 70,
    'laravel': 60,
    'logo': 30
}

const personal = {
    'selflove': 90,
    'spreadlove': 70,
    'pma': 80,
    'selfknowledge': 50,
    'meditation': 30,
    'fitness': 60,
    'accupressure': 70,
    'stretching': 60
}

function setSkills(){
    Object.entries(webdevelopment).forEach(skill => {
        const [language, width] = skill;
        const container = document.getElementById(language);
        container.dataset.width = `${width}%`;
    })

    Object.entries(personal).forEach(skill => {
        const [subject, width] = skill;
        const container = document.getElementById(subject);
        container.dataset.width = `${width}%`;
    })
}