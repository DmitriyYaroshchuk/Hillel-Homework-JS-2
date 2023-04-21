export function slider(prev, next, list) {
    // const prev = document.querySelector('.js--slider__prev');
    // const next = document.querySelector('.js--slider__next');
    // const list = document.querySelector('.js--list');

    next.addEventListener('click', (event) => {
        console.log(event.target)
        event.target.parentNode.previousElementSibling.previousElementSibling.style.display = 'flex';
        const activeElement = list.querySelector('.active');
        const nextElement = activeElement.nextElementSibling;
        if (nextElement) {
            activeElement.classList.remove('active');
            nextElement.classList.add('active');
        }
        if (!nextElement.nextElementSibling) {
            event.target.parentNode.style.display = 'none'
        }
    });
    prev.addEventListener('click', (event) => {
        event.target.parentNode.nextElementSibling.nextElementSibling.style.display = 'flex';
        const activeElement = list.querySelector('.active');
        const previousElement = activeElement.previousElementSibling;
        if (previousElement) {
            activeElement.classList.remove('active');
            previousElement.classList.add('active')
        }
        if (!previousElement.previousElementSibling) {
            event.target.parentNode.style.display = 'none'
        }
    })
}
