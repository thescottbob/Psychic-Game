//Pseudocoding outline below

// If letterGuessed is the same as letterGenerated, then Wins counter increases by 1

// If letterGuessed is different from letterGenerated && if guessCount=9, then Losses counter increases by 1 && guessCount goes to zero

// When user loads page, all HTML appears && the computer chooses a random letter. Here are the computer's options:
var computerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// The initial values for each round
let wins = 0;
let losses = 0;
let guesses = 9;
let guessesRemaining = 9;
let guessedLetters = [];
var letterToGuess = null;

//The computer will choose a random letter from the 'computerOptions' array
var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];

// User will begin each round with 9 guesses
function updateguessesRemaining() {
    // Here we are grabbing the HTML element and setting it equal to the guessesRemaining. (i.e. guessesRemaining will get displayed in HTML)
    document.querySelector('#guessesRemaining').innerHTML = "Guesses Remaining: " + guessesRemaining;
};

function updateLetterToGuess() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

function updateGuesses() {
    // If user types a letter, then display the letter in the 'Your Guesses So Far' row
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

// This function will reset the game
var reset = function() {
    totalGuesses = 9;
    guessesRemaining = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesRemaining();
    updateGuesses();
}

updateLetterToGuess();
updateGuessesRemaining();

// Event listener to catch when the user types a letter
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerOptions.includes(userGuess);

    if (check === false) {
        alert("Incorrect. Please try again.");
        return false;
    } else if (check === true) {
        //If the Users choice was an alphabet char then update guesses remaining and add user's guess to the array of guessed letters
        guessesRemaining--;
        guessedLetters.push(userGuess);
        updateGuessesRemaining();
        updateGuesses();

        if (guessesRemaining > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                alert("Correct guess, Mewthree!" + userGuess);
                reset();
            }
        } else if (guessesRemaining == 0) {
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("It appears you're not the Psychic type...");
            // Then we'll call the reset. 
            reset();
        }
        return false;
    } else {
        alert("Psych!");
    }

};
