//defining variables
var randomPlanet = ["Neptune", "Venus", "Uranus", "Mars", "Jupiter", "Earth", "Saturn", "Mercury"];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var random_images_array = [".assets/images/Earth.jpg", ".assets/images/Jupiter.jpg", ".assets/images/Mars.jpg", ".assets/images/Neptune.jpg", "./assets/images/Saturn.jpg", ".assets/images/Venus.jpg"]
var lettersGuessed = []
var remainGuess = 8;



// event to start the game upon key press by calling on the body element
document.getElementById("body").addEventListener("onclick", getRandomImage(imgAr, path)
)

// function to call the random image to appear from onclick event
function getRandomImage(imgAr, path) {
    path = path || './assets/images/'; //default path
    var num = Math.floor(Math.random() * imgAr.length)
    var img = imgAr[num];
    var imgStr = '.assets/images/"' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}


// output to h1 spaces according to random image chosen from function getRandomImage 
if (getRandomImage(imgAr, path)[0] = true)
    document.getElementById("planet").innerHTML(" N E P T U N E");
else {
    if (getRandomImage(imgAr, path)[1] = true)
        document.getElementById("planet").innerHTML(" V E N U S");
    else {
        if (getRandomImage(imgAr, path)[2] = true)
            document.getElementById("planet").innerHTML(" U R A N U S");
        else {
            if (getRandomImage(imgAr, path)[3] = true)
                document.getElementById("planet").innerHTML(" M A R S");
            else {
                if (getRandomImage(imgAr, path)[4] = true)
                    document.getElementById("planet").innerHTML(" J U P I T E R");
                else {
                    if (getRandomImage(imgAr, path)[5] = true)
                        document.getElementById("planet").innerHTML(" E A R T H");
                    else {
                        if (getRandomImage(imgAr, path)[6] = true)
                            document.getElementById("planet").innerHTML(" S A T U R N");
                        else {
                            if (getRandomImage(imgAr, path)[7]= true)
                                document.getElementById("planet").innerHTML(" M E R C U R Y");
                        }





//creating a function to capture user's letter guess after game start and input incorrect guesses into h2 field






