console.log('hello');
// CONSTANTS
const towers = document.querySelector('.towers');
const banner = document.querySelector('h2')
// VARIABLES

// LISTENERS
document.addEventListener('click', handleClick);
// FUNCTIONS
function handleClick(event) {
    if (event.target.classList.contains('towers'))
        console.log(event.target);
}