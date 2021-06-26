'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Poop face 🥳';


document.querySelector('.number').textContent = 9;
document.querySelector('.score').textContent = 10;
*/
let secretNumber = Math.trunc((Math.random()*20)+1);
let setMessage = function (msg) {
    document.querySelector('.message').textContent = msg;
};


let score = 20;

let highScore = 0;

console.log(score);

const number = document.querySelector('.number').value;

const reset = {
   guess :  document.querySelector('.guess').value,
   message :  setMessage( 'Start guessing...')
}

document.querySelector('.reset').style.width = "25rem";
document.querySelector('.reset').style.fontSize = "1.5rem";
document.querySelector('.reset').style.padding = "1rem";



document.querySelector('.again').addEventListener('click', function(){
    score = '20';
    secretNumber = secretNumber = Math.trunc((Math.random()*20)+1);
    setMessage("Start guessing...");
    document.querySelector('.score').textContent = 20;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';   
})


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        setMessage('Please enter a number!');
    }
    else if (guess === secretNumber) {
        document.body.style.background = "lightgreen";
        document.querySelector('body').style.backgroundColor = '#60b347 ';  
        document.querySelector('.number').style.width = '35rem';
        setMessage(  "You guessed correctly! 🥳");
        highScore = document.querySelector('.highscore').textContent = score;
        document.querySelector('.number').textContent = secretNumber;
        } else if (score > 1) {
            setMessage( guess > secretNumber ? "Guess is too high! Try again" : "Guess is too low! Try again"); 
            score-- ;
            document.querySelector('.score').textContent = score;
     
    } else {
            setMessage(  "You lose the game.");
            document.querySelector('.score').textContent = 0;
        }
    })

    document.querySelector('.reset').addEventListener('click', function(){
        document.querySelector('.highscore').textContent = '0';
    })


        
    //     if (score > highScore) {
    //         document.querySelector('.highscore').textContent = score;
    //     } else {
            
    //     } 
    //

      //     score--;
    // } else if (guess > secretNumber) {
    //     if (score > 1){
    //     document.querySelector('.message').textContent = "Guess is too high! Try again!";
    //     score--;
    //     document.querySelector('.score').textContent = score;
        
    // } else {
    //     document.querySelector('.message').textContent = "You lose the game.";
    //     document.querySelector('.score').textContent = 0;
    // }

    // } else if (guess < secretNumber && score > 1) {
        // document.querySelector('.message').textContent = "Guess is too Low! Try again"
        // score--;
        // document.querySelector('.score').textContent = score;
        // document.querySelector('.message').textContent = "You lose the game."
        // document.querySelector('.score').textContent = 0;
//     }

    
// })
    
  // document.querySelector('.again').addEventListener ('click', function reload(){
//     location.reload();
//     document.querySelector('.guess').value = '';
// }); <-- my easy solution - worked fine but wont save high score.



