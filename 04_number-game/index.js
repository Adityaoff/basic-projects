let randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const StartOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value); 
      
        
        validateGuess(guess);
    })
}

function validateGuess(guess)
{
    if(isNaN(guess)) {
        alert('Please enter a Valid Number');
    }
    else if (guess < 1)
    {
        alert('Please enter a Number Greater than 1');
    }
    else if (guess > 100) {
        alert(`Please enter a Number Smaller than 100`);
    }
    else {
        prevGuess.push(guess);
     
        if (numGuess === 11) {
           // displayGuess(guess);
            displayMessage(`Game Over . Random Number was ${randomNumber}`)
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess)
{
    if (guess == randomNumber) {
      displayMessage(`you guessed it right`);
      endGame();
    } else if (guess < randomNumber) {
      displayMessage(`Your Guess is Too Low`);
    } else if (guess > randomNumber) {
      displayMessage(`your Guess is Too High`);
    } else if (guess < randomNumber && guess > randomNumber - 10) {
      displayMessage(`your Guess is near but  slightly less`);
    } else if (guess > randomNumber && guess < (randomNumber + 10)) {
      displayMessage(`your Guess is near but  slightly more`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    remaining.innerHTML = `${10 - numGuess}`;
    numGuess++;

}

function displayMessage(message) {
    lowOrHi.innerHTML=`<h3>${message}</h3>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    StartOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11- numGuess}`
        userInput.removeAttribute('disabled')
        displayMessage('');
        StartOver.removeChild(p);
        playGame = true;
    })
}

