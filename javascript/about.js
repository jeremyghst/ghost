window.addEventListener('scroll', function() {
    const container = document.getElementById('about_container')
	const elements = Array.from(container.getElementsByClassName('fadein'));
    const position = container.getBoundingClientRect();

    if(position.top + 125 < window.innerHeight && position.bottom >= 0) {

        elements.forEach(element => {

            if(!element.classList.contains('visible')){
                element.classList.add('visible');
            }
        })

    } else {
        elements.forEach(element => {

            if(element.classList.contains('visible')){
                element.classList.remove('visible');
            }
        })
    }
});

const categories = Array.from(document.getElementsByClassName('category'));
categories.forEach(cat => {
    cat.addEventListener('click', (e) => {
        const target = e.target.closest('.category')
        if(!target.classList.contains('selected')){
            selectCategory(target)
        } else {
            closeCategory(target);
        }
    })
});

function selectCategory(target){    
    const container = document.getElementById('about_categories');

    const categories = Array.from(document.getElementsByClassName('category'));
    categories.forEach(cat => {
        if(cat.classList.contains('selected')){
            cat.classList.remove('selected');
            cat.getElementsByClassName('card')[0].classList.add('invisible');    
        }

        if(cat.classList.contains('deselected')){
            cat.classList.remove('deselected');
        }

        if(cat === target){
            cat.classList.add('selected');
            cat.getElementsByClassName('card')[0].classList.remove('invisible');
        } else {
            cat.classList.add('deselected');
        }

        container.classList.add('selected');
        container_position = container.offsetTop - 25;
        window.scrollTo({
            top: container_position,
            behavior: 'smooth'
        })
    })

}

function closeCategory(target){
    const container = document.getElementById('about_categories');

    target.classList.remove('selected');
    target.getElementsByClassName('card')[0].classList.add('invisible');

    const deselected_categories = Array.from(document.getElementsByClassName('deselected'));
    deselected_categories.forEach(cat => {
        cat.classList.remove('deselected');
    })

    container.classList.remove('selected');
} 

