function fadeAbout(dir){
    const container = document.getElementById('about_container')
	const elements = Array.from(container.getElementsByClassName('aboutFadein'));
    
    elements.forEach(element => {

        if(dir === 'in'){
            if(!element.classList.contains('visible')){
                element.classList.add('visible');
            }
        } else {
            if(element.classList.contains('visible')){
                element.classList.remove('visible');
            }
        }
    })
}

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
            const fade_item = Array.from(cat.getElementsByClassName('card')[0].getElementsByClassName('visible'));
            
            fade_item.forEach(item => {
                item.classList.remove('visible');
            })
        }

        if(cat.classList.contains('deselected')){
            cat.classList.remove('deselected');
        }

        if(cat === target){
            cat.classList.add('selected');
            const fade_item = Array.from(cat.getElementsByClassName('card')[0].getElementsByClassName('fade_item'));
            
            fade_item.forEach(item => {
            })

            let index = 0;
            const interval = setInterval( () => {
                fade_item[index].classList.add('visible');
                index++;
                if(index > fade_item.length - 1){
                    clearInterval(interval);
                }
            }, 100);

            setTimeout(() => {
                cat.scrollIntoView({behavior: "smooth", block: "center"});
            }, 500)
        } else {
            cat.classList.add('deselected');
        }

        container.classList.add('selected');
    })

}

function closeCategory(target){
    const container = document.getElementById('about_categories');

    target.classList.remove('selected');
    const fade_item = Array.from(target.getElementsByClassName('card')[0].getElementsByClassName('visible'));
            
    fade_item.forEach(item => {
        item.classList.remove('visible');
    })

    const deselected_categories = Array.from(document.getElementsByClassName('deselected'));
    deselected_categories.forEach(cat => {
        cat.classList.remove('deselected');

        setTimeout(() => {
            cat.scrollIntoView({behavior: "smooth", block: "center"});
        }, 500)
    })

    container.classList.remove('selected');
} 

