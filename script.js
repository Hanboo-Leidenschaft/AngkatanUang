// Get teh modal, button, and close elements
var modal = 
document.getElementById("loginFormModal");
document.getElementById("loginButton");
document.getElementsByClassName("close");

// When the user clicks the login button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks the close button, close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    };
}

// Handle form submission (just example, just log the value here)
document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

console.log("Email:"+ email);
console.log("Password"+ password);

// Here you can send the data to your server for verification
// e.g., send it to an API for authentication

// After submitting, you can close the modal if needed:
modal.style.display = "none";
}