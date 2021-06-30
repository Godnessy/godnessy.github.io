'use strict';
 
/* 1. 2 players, divide the screen into 2 sides player 1 and player 2.
2. in the middle of the screen we have a new game (reset) button, roll dice button and hold button.
3. reset makes a new game (zero scores), roll dice and hold moves score from current to player score (from temp to permenant).
4. every time a player rolls a 1 the current score becomes 0.
5. first player to 100 points wins (change of overlay).
*/

// selecting elements for future use. - starting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');
let currentScore = 0;



//Starting elements for a new game
const scores = [0, 0];  // These 2 lines are made to be able to switch between active players.
let activePlayer = 0;
score0El.textContent = 0;
score1El.textContent = 0;

//making a const for player to be able to manipulate active player

// const modal = document.querySelector('.modal');


//Hiding the dice for the before the first turn. I choose to set the style, the teacher made a class called hidden (ill do it too) and use that instead.
// document.querySelector('.dice').style.display = ('none');
diceEl.classList.add('hidden');

// let checkWin = function() {
//     if (scores[activePlayer] >= 100) {
//         document.querySelector(`.player--${activePlayer}`).style.backgroundColor = 'black';
// }

// // making a dice roll: This is my solution but its too complicated.
// let diceroll = function rolldice() {
//     Math.trunc(Math.random() *6)+1
//     return diceroll;
// }

rollDice.addEventListener('click', function() 
{
    //generate random dice roll (i did it in its own function)
    //display dice roll
    const dice = Number(Math.trunc(Math.random() *6)+1);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

            
     if (dice !== 1) {
        currentScore += dice ;
     document.getElementById(`current--${activePlayer}`).textContent = currentScore
     
    } else {
        console.log("one was rolled");
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        changeActivePlayer();
       
    }
   
    newGame.addEventListener('click', function (){
      score0El.textContent = 0;
      score1El.textContent = 0;
      current0El.textContent = 0;
      current1El.textContent = 0;
      diceEl.classList.add('hidden');
      currentScore = 0;
      scores[0] = 0;
      scores[1] = 0;
    })
})


holdScore.addEventListener('click', function() {
    scores[activePlayer] = currentScore + scores[activePlayer];
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).style.backgroundColor = 'black';
        document.getElementById(`name--${activePlayer}`).textContent = 'Player ' + (activePlayer + 1) + ' Is The Winner!';
    } else {
    resetScoreAndChangePlayer();
}



})


function resetScoreAndChangePlayer(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    changeActivePlayer();
}

let changeActivePlayer  = function(){
    
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
     activePlayer = activePlayer === 0 ? 1 : 0;   
   
     document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}
