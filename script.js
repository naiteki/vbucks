// Function to handle interest selection
function chooseInterest(interest) {
    // Hide the start page
    document.getElementById("startPage").style.display = "none";

    // Display the calculator
    document.getElementById("calculator").style.display = "block";

    // Clear previous results
    document.getElementById("typingResult").innerHTML = "";

    // Update the typing text for quantity input
    const typingLabel = document.getElementById("typingText");
    const textToType = "Enter Quantity for " + interest + ": ";
    typeText(typingLabel, textToType, 100);
}

// Function to calculate the price and display with typing effect
function calculatePrice() {
    // Get the quantity entered by the user
    var quantity = document.getElementById("quantity").value;

    // Constant multiplier
    var multiplier = 0.0045;

    // Calculate the price
    var price = quantity * multiplier;

    // Clear previous result
    document.getElementById("typingResult").innerHTML = "";

    // Display the result with typing effect
    const typingResultLabel = document.getElementById("typingResult");
    typeText(typingResultLabel, price.toFixed(2), 50);
}

// Function to handle the purchase and display the price
function purchase() {
    // Get the calculated price
    var calculatedPrice = document.getElementById("typingResult").innerHTML;

    // Navigate to the purchase page and pass the price as a query parameter
    window.location.href = 'purchase.html?price=' + calculatedPrice;
}

// Function to simulate typing effect
function typeText(element, text, delay, callback) {
    let index = 0;
    const typingInterval = setInterval(function() {
        element.innerHTML += text[index];
        index++;
        if (index === text.length) {
            clearInterval(typingInterval);
            if (callback) {
                callback();
            }
        }
    }, delay);
}

// Display the title with typing effect when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const typingStartPage = document.getElementById("typingStartPage");
    const textToType = "CHOOSE YOUR PATH";
    typeText(typingStartPage, textToType, 100);
});
