//declaring variables
var planets = ["jupiter", "neptune", "earth", "mars", "saturn", "mercury", "venus", "uranus", "moon", "sun","ceres"]
var images = [];

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


document.getElementById("image").addEventListener("click", img);

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




//function to call corresponding image from planets array and alerting user of name

function img() {

    if (randomWord === planets[0]) {
        document.getElementById("image").src = "./assets/images/Jupiter.jpg";
        alert("Fifth planet from the sun!");
        clearIt()
    }

    else if (randomWord === planets[1]) {
        document.getElementById("image").src = "./assets/images/Neptune.jpg";
        alert("Roman god of the sea!");
        clearIt()
    }

    else if (randomWord === planets[2]) {
        document.getElementById("image").src = "./assets/images/Earth.jpg";
        alert("Mother!");
        clearIt()
    }

    else if (randomWord === planets[3]) {
        document.getElementById("image").src = "./assets/images/Mars.jpg";
        alert("Massive dust storms!");
        clearIt()
    }

    else if (randomWord === planets[4]) {
        document.getElementById("image").src = "./assets/images/Saturn.jpg";
        alert("Has 62 moons!");
        clearIt()
    }

    else if (randomWord === planets[5]) {
        document.getElementById("image").src = "./assets/images/Mercury.jpg";
        alert("Closest planet to the sun!");
        clearIt()
    }

    else if (randomWord === planets[6]) {
        document.getElementById("image").src = "./assets/images/Venus.jpg";
        alert("One day here is longer than a year!");
        clearIt()

    }

    else if (randomWord === planets[7]) {
        document.getElementById("image").src = "./assets/images/uranus.jpg";
        alert("Known an ICE GIANT!");
        clearIt()
    }

    else if (randomWord === planets[8]) {
        document.getElementById("image").src = "./assets/images/fullmoon.jpg";
        alert("Our permanent, natural satellite...")
        clearIt()
    }
    else if (randomWord === planets[9]) {
        document.getElementById("image").src = "./assets/images/sun.jpg";
        alert("Our favorite yellow dwarf star!")
        clearIt()
    }
    else if (randomWord === planets[10]) {
        document.getElementById("image").src = "./assets/images/ceres.jpg";
        alert("Named after the Roman goddess of agriculture")
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
        document.getElementById("daws").innerHTML = "Keep going!";

        //if player loses then show losing image and play sound clip
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        Jerk()
        document.getElementById("image").src = "./assets/images/dawson.jpg"
        document.getElementById("losses").innerHTML = " " + losses;
        document.getElementById("daws").innerHTML = "Oh no! Click on sad dawson for another planet!";

    }
    //display losses and guesses left
    document.getElementById("currentword").innerHTML = "  " + lettersGuessed.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}








