// script.js

// Function to handle interest selection and slide transition
function chooseInterest(interest) {
    // Slide transition
    document.getElementById("startPage").classList.add("slide-right");
    document.getElementById("calculator").classList.add("slide-left");

    setTimeout(function() {
        // Hide the start page
        document.getElementById("startPage").style.display = "none";

        // Display the calculator
        document.getElementById("calculator").style.display = "block";

        // Update the typing text for quantity input
        const typingLabel = document.getElementById("typingText");
        const textToType = "Enter Quantity for " + interest + ": ";
        typeText(typingLabel, textToType, 100);
    }, 500); // Adjust the timeout duration to match the transition duration
}

// Function to calculate the price and display with typing effect
function calculatePrice() {
    // Get the quantity entered by the user
    var quantity = document.getElementById("quantity").value;

    // Constant multiplier
    var multiplier = 0.0045;

    // Calculate the price
    var price = quantity * multiplier;

    // Display the result with typing effect
    const typingResultLabel = document.getElementById("typingResult");
    typeText(typingResultLabel, price.toFixed(2), 50);
}
