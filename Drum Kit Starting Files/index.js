for(var i = 0; i < document.querySelectorAll("button").length; i++) {
document.querySelectorAll("button")[i].addEventListener("click", function() {

addAnimation(this.innerHTML);
    
if(this.innerHTML === "w") {
    var link = "./sounds/tom-1.mp3";
}
else if(this.innerHTML === "a") {
    var link = "./sounds/tom-3.mp3";
}
else if(this.innerHTML === "s") {
    var link = "./sounds/snare.mp3";
}
else if(this.innerHTML === "d") {
    var link = "./sounds/kick-bass.mp3";
}
else if(this.innerHTML === "j") {
    var link = "./sounds/crash.mp3";
}
else if(this.innerHTML === "k") {
    var link = "./sounds/tom-4.mp3";
}
else if(this.innerHTML === "l") {
    var link = "./sounds/tom-2.mp3";
}
else {
    var link = "";
}


var sound = new Audio(link);
sound.play();

});
}

document.addEventListener("keydown", function(event) {
addAnimation(event.key);    

if(event.key === "w") {
    var link = "./sounds/tom-1.mp3";
}
else if(event.key === "a") {
    var link = "./sounds/tom-3.mp3";
}
else if(event.key === "s") {
    var link = "./sounds/snare.mp3";
}
else if(event.key === "d") {
    var link = "./sounds/kick-bass.mp3";
}
else if(event.key === "j") {
    var link = "./sounds/crash.mp3";
}
else if(event.key === "k") {
    var link = "./sounds/tom-4.mp3";
}
else if(event.key === "l") {
    var link = "./sounds/tom-2.mp3";
}
else {
    var link = "";
}


var sound = new Audio(link);
sound.play();

})

function addAnimation(key) {

    var button = document.querySelector("." + key);
    button.classList.toggle("pressed");

    setTimeout(function() {
    button.classList.toggle("pressed");
    }, 100)
}