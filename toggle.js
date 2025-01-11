// Initialize Variables
var togglePomodoro = document.getElementById("switch");
var clockDiv = document.getElementById("clockdiv");
var swapDiv = document.getElementById("sample-div");

// Swap div content
console.log("div display form was newly fetched");

togglePomodoro.onclick = function() {

    console.log("the toggle button was clicked");

    if (clockDiv.style.display === "none") {
        clockDiv.style.display = "block";
        swapDiv.style.display = "none";
        console.log("    from none to block: " + clockDiv.style.display);
    } 
    else {
        clockDiv.style.display = "none";
        swapDiv.style.display = "block";
        console.log("    from block to none: " + clockDiv.style.display);
        
    }
}


// Initialize Variables
// var togglePomodoro = document.getElementById("toggle-switch");


// // Close Popup Event
// togglePomodoro.onclick = function() {

//     var clockDiv = document.getElementById("clockdiv");
//     var swapDiv = document.getElementById("sample-div");

//     if (clockDiv.style.display === "block") {
//         clockDiv.style.display = "none";
//         console.log("set clock to none");
//       } else {
//         clockDiv.style.display = "block";
//         console.log("set clock to block");
//       }




//     // clockDiv.style.display = 'none';
//     // popup.style.animation = '0.2s ease-out 0s 1 fadeOut';
//     // popup.style.display = 'none';
// }

// settings.onclick = function() {
//     overlay.style.display = 'block';
//     popup.style.display = 'block';
// }


// var toggle = 0;

// if (clockDiv.style.display === "block") {
//     clockDiv.style.display = "none";
//     toggle = 1;
// }

// if (clockDiv.style.display === "none" && toggle == 1) {
//     clockDiv.style.display = "block";
//     toggle = 0;
// }