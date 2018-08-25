//Mix of coding & pseudocoding outline:

// When user loads page, all HTML appears && the computer chooses a random letter. Here are the computer's options:
var computerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// The initial values for each round are set here
let wins = 0;
let losses = 0;
let guessesRemaining = 9;
let guesses = 9;
let guessedLetters = [];
var letterToGuess = null;

// The computer will choose a random letter ('computerGuess') from the 'computerOptions' array
var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];

// User will begin each round with 9 guesses. Below we select the HTML 'Guesses Remaining' element by its ID and set its value equal to 'guessesRemaining'
function updateguessesRemaining() {
    document.querySelector('#guessesRemaining').innerHTML = "Guesses Remaining: " + guessesRemaining;
};

function updateLetterToGuess {
    this.letterToGuess = this.computerOptions[Math.floor(Math.random() * this.computerOptions.length)];
};

function updateGuesses() {
    // If user types a letter, then that letter will be rendered to the page
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

// The below function will reset the game by calling the three new functions defined above
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


