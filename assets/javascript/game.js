//defining variables
var randomPlanet = ["Neptune", "Venus", "Uranus", "Mars", "Jupiter", "Earth", "Saturn", "Mercury"];
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var random_images_array = 

// event to start the game upon key press by calling on the body element
document.getElementById("body").addEventListener("onclick", getRandomImage(imgAr, path)
)

// function to call the random image to appear from onclick event
function getRandomImage (imgAr, path) {
    path = path || './assets/images/'; //default path
    var num = Math.floor( Math.random() * imgAr.length)
}




