// Select HTML elements
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

// When the submit button is clicked, execute this function
mySubmit.onclick = function() {
    let age = myText.value;  // Get the input value
    age = Number(age);  // Convert input from string to number

    // If-Else If-Else conditions
    if (age >= 100) {
        resultElement.textContent = "You are too old to enter this site.";
    } else if (age >= 18) {
        resultElement.textContent = "You are old enough to enter this site.";
    } else if (age < 0) {
        resultElement.textContent = "Your age can't be below zero.";
    } else if (age === 0) {
        resultElement.textContent = "You can't enter, you were just born.";
    } else {
        resultElement.textContent = "You must be 18+ to enter this site.";
    }
};
