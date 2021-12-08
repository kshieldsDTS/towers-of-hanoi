// CONSTANTS
const banner = document.querySelector('h2');
const arena = document.querySelector('.arena');
const movesCounter = document.querySelector('h3');
const restart = document.querySelector('button');
// VARIABLES
let ringSelected = 0;
let movesTaken = 0;
// LISTENERS
arena.addEventListener('click', handleClick);
restart.addEventListener('click', init)
// FUNCTIONS
function checkWinConditions(){
    let winTower = document.querySelector('[data-tower = "3"]')
    if (winTower.children.length === 5) {
        banner.innerHTML = "<p>You win!</p>";
        restart.classList.toggle('hidden')
    }
}
function handleClick(event) {
    if (event.target.classList.contains('ring')){
        if (ringSelected === 0) {
			selectRing(event); 
        } else {
            banner.innerText = 'You already have a token selected!'
            setTimeout(() => banner.innerText='', 2000);
        }
    }
    if (event.target.classList.contains('tower')){
        selectTarget(event);
    }
}
function selectRing(event) {
    let chosenRing = event.target
    if (chosenRing.dataset['ring']<=chosenRing.parentElement.lastElementChild.dataset['ring']) {
        chosenRing.classList.add('selected');
        chosenRing.style.left = '50px';
        ringSelected = 1;
    } else {
        banner.innerText = 'You must select a ring from the top of the tower!'
        setTimeout(() => banner.innerText='', 2000)
    }
    
}
function selectTarget(event) {
    let selectedRing = document.querySelector('.selected');
    let ringCheck = event.target;
    if (selectedRing.dataset['ring'] < ringCheck.lastElementChild.dataset['ring']+1){
        oldRing = ringCheck.firstElementChild;
        newRing = document.createElement('div');
        newRing.classList.add('ring');
        newRing.dataset['ring'];
        newRing.dataset.ring = selectedRing.dataset['ring'];
        event.target.appendChild(newRing);
        selectedRing.remove();
        ringSelected = 0;
        movesTaken = movesTaken+1;
        movesCounter.innerText = `Moves Taken: ${movesTaken}`;
    } else {
        banner.innerText = 'You cannot place a larger ring on top of a smaller ring!'
        setTimeout(() => banner.innerText='', 2000);
    }
    checkWinConditions();
}
function init (){
    for (let i=1; i<6; i++) {
        let ring = document.querySelector(`[data-ring = "${i}"]`);
        ring.remove();
    }
    for (let i=5; i>=1; i--) {
        let newRing = document.createElement('div');
        let towerOne = document.querySelector('.tower')
        newRing.classList.add('ring');
        newRing.dataset['ring'];
        newRing.dataset.ring = i;
        towerOne.appendChild(newRing);
    }
    banner.innerText = ' ';
    movesCounter.innerText = ' ';
    movesTaken = 0;
}