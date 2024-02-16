/*

// Add Event listener for Event Type, to trigger Listener Function
// do not use method(), but instead method, so it doesn not run the method in-line
document.querySelector("button").addEventListener("click", handleClick)

// Listener Functions
function handleClick() {
    alert("I was clicked!")
    // Handling click
}
*/

/*

//As an anonomous function:

document.querySelector("button").addEventListener("click", function () {
    alert("I was clicked!")
})

*/

/*
 * Add Event Listeners for: Button Click
 */

for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // Handle the click
        var buttonInnerHTML = this.innerHTML;
        //`this` is the identoty of the object that TRIGGERED the Event Listener
        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;

            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
        
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
        
            default:
                console.log(buttonInnerHTML + "is not a valid key")
                break;
        }

    });
}

/*
 * Add Event Listeners for: Key Press
 */

document.addEventListener("keypress", function (event) {
    // Handle the click
    makeSound(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log(buttonInnerHTML + "is not a valid key")
            break;
    }
}