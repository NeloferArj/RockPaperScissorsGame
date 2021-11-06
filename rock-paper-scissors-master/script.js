
const buttons = document.querySelectorAll('.btn-moves');
const choices= ['paper','rock','scissors'];
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('.user_select');
const computer_select = document.getElementById('.computer_select');
const winner = document.getElementById('winner');
let userChoice = undefined;

//modal buttons 

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('model');

let score = 0;
if(buttons)
{
    buttons.forEach((b) => {
    
        b.addEventListener('click', () => {
            userChoice = b.getAttribute('data-choice');
            checkWinner();
        });
    });
}

if(reset){
    reset.addEventListener('click', ()=>{
    
        main.style.display = 'flex';
        selection.style.display = 'none';
    });
}

openBtn.addEventListener('click', ()=>{
    modal.style.display = 'flex';
  
});
closeBtn.addEventListener('click', ()=>{
    modal.style.display = 'none';

});


function checkWinner() {
    const computerChoice = pickRandomChoice();

    //update the view
    updateSelection(user_select,userChoice);
    updateSelection(computer_select,computerChoice);
    if(userChoice === computerChoice){
        winner.innerText = 'draw';

    } else if( (userChoice ==='paper' && computerChoice ==='rock') || (userChoice === 'rock' && computerChoice=== 'scissors') || (userChoice=== 'scissors' && computerChoice==='paper'))
    {
        updateScore(1); //user won
        winner.innerText = 'win';
    }
    else{
        winner.innerText = 'lost';

    }

    main.style.display = 'none';
        selection.style.display = 'flex';
}
function pickRandomChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}


function updateScore(value){
    score += 1;
    ScoreEl.innerText = score;


}
// function rules() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   }


function updateSelection(selectionEl, choice){
    const img = selectionEl.querySelector('img');
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');

    selectionEl.classList.add(`btn-${choice}`);
    img.src = `./images/icon-${choice}.svg `;
    img.alt = choice;

}

