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

for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I was clicked!");
        // Handle the click
    });
}