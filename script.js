// CONSTANTS
const banner = document.querySelector('h2')
const arena = document.querySelector('.arena')
// VARIABLES
let ringSelected = 0;
// LISTENERS
arena.addEventListener('click', handleClick);
// FUNCTIONS
function handleClick(event) {
    if (event.target.classList.contains('ring')){
        if (ringSelected === 0) {
			selectRing(event); 
        } else {
            // SOME CODE TO TELL PLAYER THEY ALREADY HAVE A PIECE SELECTED
        }
    }
    if (event.target.classList.contains('tower')){
        selectTarget(event)
    }
}

function selectRing(event) {
    event.target.classList.add('selected')
    event.target.style.left = '50px';
    ringSelected = 1
}
function selectTarget(event) {
    let selectedRing = document.querySelector('.selected');
    let ringCheck = event.target;
    if (selectedRing.dataset['ring'] < ringCheck.lastElementChild.dataset['ring']+1){
        oldRing = ringCheck.firstElementChild
        newRing = document.createElement('div');
        newRing.classList.add('ring')
        newRing.dataset['ring'];
        newRing.dataset.ring = selectedRing.dataset['ring']
        event.target.appendChild(newRing);
        selectedRing.remove();
        ringSelected = 0
    } else {
        // CREATE CODE HERE TO WARN PLAYER THEY'RE MAKING A BAD MOVE
    }
}