// Initialize Variables
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var settings = document.getElementById("popup-settings");


// Close Popup Event
closePopup.onclick = function() {
    overlay.style.display = 'none';
    // popup.style.animation = '0.2s ease-out 0s 1 fadeOut';
    popup.style.display = 'none';
}

settings.onclick = function() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
}