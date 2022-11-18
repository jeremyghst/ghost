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

    const selected_cat = Array.from(document.getElementsByClassName('selected'));
    selected_cat.forEach(cat => {
        cat.classList.remove('selected');
        cat.getElementsByClassName('card')[0].classList.add('invisible');
    })

    target.classList.add('selected');
    target.getElementsByClassName('card')[0].classList.remove('invisible');
}

function closeCategory(target){
    target.classList.remove('selected');
    target.getElementsByClassName('card')[0].classList.add('invisible');
}