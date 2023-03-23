function Slider(list) {
    this.next = (event) => {
        event.target.previousElementSibling.previousElementSibling.style.display = 'flex';
        const activeElement = list.querySelector('.active');
        const nextElement = activeElement.nextElementSibling;
        if (nextElement) {
            activeElement.classList.remove('active');
            nextElement.classList.add('active');
        }
        if (!nextElement.nextElementSibling) {
            event.target.style.display = 'none'
        }
    }
    this.prev = (event) => {
        event.target.nextElementSibling.nextElementSibling.style.display = 'flex';
        const activeElement = list.querySelector('.active');
        const previousElement = activeElement.previousElementSibling;
        if (previousElement) {
            activeElement.classList.remove('active');
            previousElement.classList.add('active')
        }
        if (!previousElement.previousElementSibling) {
            event.target.style.display = 'none'
        }
    }
}
const slider = new Slider(document.querySelector('.js--list'));
document.querySelector('.js--slider__next').addEventListener('click', slider.next);
document.querySelector('.js--slider__prev').addEventListener('click', slider.prev);