//declaring variables
var planets = ["jupiter", "neptune", "earth", "mars", "saturn", "mercury", "venus"]

//variables for storing values
var randomWord = "";
var lettersOfWord = [];
var empty = 0;
var lettersGuessed = [];
var wrongGuess = [];


//counting variables
var wins = 0;
var losses = 0;
var guessesRemaining = 10;


Start();

//starts the game by pulling random image from array and storing it in randomWord
function Start() {


    // document.getElementById("image").addEventListener("click", randomWord);

    randomWord = planets[Math.floor(Math.random() * planets.length)];

    //document.getElementById("image").append = randomWord;

    // splits the word up to store values in seperate randomWord array 
    lettersOfWord = randomWord.split("");


    //store length of word in empty bin, to use further down
    empty = lettersOfWord.length;

    //a loop to create "_" in guess field for letters
    for (var i = 0; i < empty; i++) {
        lettersGuessed.push("_");
    }

    //showing the "_" within the document
    document.getElementById("currentword").innerHTML = " " + lettersGuessed.join(" ");


}



//check for key pressed and store in 
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches letter in random planet
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //storing guesses 
    console.log(guesses);
    //storing wrong letters on screen
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}


//function to call corresponding image from planets array and alerting user of name

function img() {

    if (randomWord === planets[0]) {
        document.getElementById("image").src = "./assets/images/Jupiter.jpg";
        alert("Jupiter!");
    }

    else if (randomWord === planets[1]) {
        document.getElementById("image").src = "./assets/images/Neptune.jpg";
        alert("Neptune!");
    }

    else if (randomWord === planets[2]) {
        document.getElementById("image").src = "./assets/images/Earth.jpg";
        alert("Earth!");
    }

    else if (randomWord === planets[3]) {
        document.getElementById("image").src = "./assets/images/Mars.jpg";
        alert("Mars!");
    }

    else if (randomWord === planets[4]) {
        document.getElementById("image").src = "./assets/images/Saturn.jpg";
        alert("Saturn!");
    }

    else if (randomWord === planets[5]) {
        document.getElementById("image").src = "./assets/images/Mercury.jpg";
        alert("Mercury!");
    }

    else if (randomWord === planets[6]) {
        document.getElementById("image").src = "./assets/images/Venus.jpg";
        alert("Venus!");
    }
};

// resets the game
function reset() {
    guessesRemaining = 10;
    wrongGuess = [];
    lettersGuessed = [];
    Start()
}



//using if else statement to see if letter selected matches random word
function checkLetters(letter) {
    var letterInWord = false;
    //setting variable to true if letter matches within the generated word
    for (var i = 0; i < empty; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches the chosen word
        for (var i = 0; i < empty; i++) {
            if (randomWord[i] == letter) {
                lettersGuessed[i] = letter;
            }
        }
    }
    //reducing guesses by one (1) if letter is wrong
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(lettersGuessed);
}

//function for winning sound
function Playsound() {
    var audio = new Audio('./assets/images/TADA.wav');
    audio.loop = false;
    audio.play();
}

//function for losing sound
function Jerk() {
    var audio = new Audio('./assets/images/OHNO.mp3');
    audio.loop = false;
    audio.play();
}

//tallying the win
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if player wins, grab corresponding image from img function and play a noise
    if (lettersOfWord.toString() == lettersGuessed.toString()) {
        wins++;
        img()
        reset()
        Playsound()
        //display wins on screen
        document.getElementById("wins").innerHTML = " " + wins;

        //if player loses then show losing image and play sound clip
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        Jerk()
        document.getElementById("image").src = "./assets/images/LOST.jpg"
        document.getElementById("losses").innerHTML = " " + losses;
    }
    //display losses and guesses left
    document.getElementById("currentword").innerHTML = "  " + lettersGuessed.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}








