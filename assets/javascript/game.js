//declaring variables
var planets = ["jupiter", "neptune", "earth", "mars", "saturn", "mercury", "venus", "uranus", "moon", "sun", "ceres", "gliese667cc", "proximab", "kepler16b", "kepler452b", "andromeda"]
var images = [];
var phrases = ["Amazing! Click again", "Doing great! Click again", "Crushing it! Click again", "You Rock! Click again", "You are amazing! Click again", "More to come! Click again", "Feeling spacey yet? Click again", "Winner! Click again", "Aww yeah! Click again"]



//variables for storing values
var randomWord = "";
var lettersOfWord = [];
var empty = 0;
var lettersGuessed = [];
var wrongGuess = [];


//counting variables
var wins = 0;
var losses = 0;
var guessesRemaining = 5;



//insert jquery function here to call mymodal



document.getElementById("image").addEventListener("click", img);

//function here for math random to grab from phrases and display on page under complete() win++
function winPhrase() {

    randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    document.getElementById('daws').innerHTML = randomPhrase;
}



Start();

//starts the game by pulling random image from array and storing it in randomWord
function Start() {


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

function clearIt() {
    document.getElementById("daws").innerHTML = "";
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

//MODAL CALLS

function modalZero() {
    $('#zeroModal').modal('show');
}

function modalOne() {
    $('#oneModal').modal('show');
}

function modalTwo() {
    $('#twoModal').modal('show');
}

function modalThree() {
    $('#threeModal').modal('show');
}

function modalFour() {
    $('#fourModal').modal('show');
}

function modalFive() {
    $('#fiveModal').modal('show');
}

function modalSix() {
    $('#sixModal').modal('show');
}

function modalSeven() {
    $('#sevenModal').modal('show');
}

function modalEight() {
    $('#eightModal').modal('show');
}

function modalNine() {
    $('#nineModal').modal('show');
}

function modalTen() {
    $('#tenModal').modal('show');
}

function modalEleven() {
    $('#elevenModal').modal('show');
}

function modalTwelve() {
    $('#twelveModal').modal('show');
}






//function to call corresponding image from planets array and then showing the appropriate modal clue

function img() {

    if (randomWord === planets[0]) {
        document.getElementById("image").src = "./assets/images/Jupiter.jpg";
        modalZero();
        clearIt()
    }
    else if (randomWord === planets[1]) {
        document.getElementById("image").src = "./assets/images/Neptune.jpg";
        modalOne();
        clearIt()
    }
    else if (randomWord === planets[2]) {
        document.getElementById("image").src = "./assets/images/Earth.jpg";
        modalTwo();
        clearIt()
    }
    else if (randomWord === planets[3]) {
        document.getElementById("image").src = "./assets/images/Mars.jpg";
        modalThree();
        clearIt()
    }
    else if (randomWord === planets[4]) {
        document.getElementById("image").src = "./assets/images/Saturn.jpg";
        modalFour();
        clearIt()
    }
    else if (randomWord === planets[5]) {
        document.getElementById("image").src = "./assets/images/Mercury.jpg";
        modalFive();
        clearIt()
    }
    else if (randomWord === planets[6]) {
        document.getElementById("image").src = "./assets/images/Venus.jpg";
        modalSix();
        clearIt()
    }
    else if (randomWord === planets[7]) {
        document.getElementById("image").src = "./assets/images/uranus.jpg";
        modalSeven();
        clearIt()
    }
    else if (randomWord === planets[8]) {
        document.getElementById("image").src = "./assets/images/fullmoon.jpg";
        modalEight();
        clearIt()
    }
    else if (randomWord === planets[9]) {
        document.getElementById("image").src = "./assets/images/sun.jpg";
        modalNine();
        clearIt()
    }
    else if (randomWord === planets[10]) {
        document.getElementById("image").src = "./assets/images/ceres.jpg";
        modalTen();
        clearIt()
    }
    else if (randomWord === planets[11]) {
        document.getElementById("image").src = "./assets/images/gliese667cc.jpg";
        modalEleven();
        clearIt()
    }
    else if (randomWord === planets[12]) {
        document.getElementById("image").src = "./assets/images/proximab.jpg";
        modalTwelve();
        clearIt()
    }
    else if (randomWord === planets[13]) {
        document.getElementById("image").src = "./assets/images/kepler16b.jpg";
        alert("This extrasolar planet is composed of gas, ice and rock!")
        clearIt()
    }
    else if (randomWord === planets[14]) {
        document.getElementById("image").src = "./assets/images/kepler452b.jpg";
        alert("This exoplanet is sometimes called 'Earth 2.0'!")
        clearIt()
    }
    else if (randomWord === planets[15]) {
        document.getElementById("image").src = "./assets/images/andromeda.jpg";
        alert("Our neighboring galaxy!")
        clearIt()
    }
};

// resets the game
function reset() {
    guessesRemaining = 5;
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
        reset()
        Playsound()
        //display wins on screen
        document.getElementById("wins").innerHTML = " " + wins;
        winPhrase()


        //if player loses then show losing image and play sound clip
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        Jerk()
        document.getElementById("image").src = "./assets/images/dawson.jpg"
        document.getElementById("losses").innerHTML = " " + losses;
        document.getElementById("daws").innerHTML = "Oh no! Click on sad dawson for another clue";

    }
    //display losses and guesses left
    document.getElementById("currentword").innerHTML = "  " + lettersGuessed.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}








