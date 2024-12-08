let numberToGuess;
let maxTries = 5;
let tries = 0;

function initializeGame(){
    numberToGuess = Math.floor(Math.random()*100)+1;
    tries = 0;

    document.getElementById("message").textContent="";
    document.getElementById("remaining-attempts").textContent = maxTries - tries;
     /*document.getElementById("restart-btn").style.display = "none"*/
    document.getElementById("guess-input").value="";
}

function checkGuess(){
    const guess = parseInt(document.getElementById("guess-input").value);
    if (isNaN(guess) || guess < 1|| guess > 100){

        document.getElementById("message").textContent = "Please enter a number between 1 and 100."
        return;
    }

    tries++;
    document.getElementById("remaining-attempts").textContent = maxTries-tries;

    if(guess === numberToGuess){

        showModal("Congratulations!",`You guessed the number in ${tries}tries.` );
    }else if (tries>= maxTries){

        showModal("Game Over", `You have used all your attempts. The number was ${numberToGuess}.`);
    }

        /*document.getElementById("message").textContent = `Congratulations!You Guessed the number in ${tries}tries.`;
        endGame();
        }else if (tries >=maxTries){

        document.getElementById("message").textContent = `Sorry,you've used all your attempts.The number was ${numberToGuess}.`;
        endGame();}*/
    else if(guess < numberToGuess){

        document.getElementById("message").textContent = "Too low! Try again.";
    }
     else{
        document.getElementById("message").textContent = "Too high! Try again.";
    }
    document.getElementById("guess-input").value = "";
}

function showModal(title,message){
    document.getElementById("popup-title").textContent = title;

    document.getElementById("popup-message").textContent = message;

    document.getElementById("popup-modal").style.display = "flex";
}

function closeModal(){
    document.getElementById("popup-modal").style.display = "none";
}
/*
function endGame(){
    document.getElementById("restart-btn").style.display = "inline-block";
}
*/
function restartGame(){
    closeModal();
    initializeGame();
}

initializeGame();
