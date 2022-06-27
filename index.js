var numberOfButtons = document.querySelectorAll(".drum").length;

// detecting if the button is pressed with the mouse
for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        soundTrigger(buttonInnerHTML);
        drumKitAniimation(buttonInnerHTML);
    });
}

// detecting keyboard key of the button is pressed
document.addEventListener("keydown", function (event) {
    let buttonPressed = event.key;
    soundTrigger(buttonPressed);
    drumKitAniimation(buttonPressed);
});


// function to switch through and get the proper sound of the button/keys
function soundTrigger(key) {
    switch (key) {
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "j":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function drumKitAniimation(currentkey) {
    let = activeDrum = document.querySelector("." + currentkey);
    activeDrum.classList.add("pressed");
    setInterval(function () {
        activeDrum.classList.remove("pressed")
    }, 100);
}