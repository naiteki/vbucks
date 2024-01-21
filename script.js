// script.js

// Function to simulate typing effect
function typeText(element, text, delay) {
    let index = 0;
    const typingInterval = setInterval(function() {
        element.innerHTML += text[index];
        index++;
        if (index === text.length) {
            clearInterval(typingInterval);
        }
    }, delay);
}

// Call the typing function when the page is loaded
window.onload = function() {
    const typingLabel = document.getElementById("typingText");
    const textToType = "Enter Quantity: ";
    const typingDelay = 100; // milliseconds delay between typing each letter
    typeText(typingLabel, textToType, typingDelay);
};

// Function to calculate the price
function calculatePrice() {
    // Get the quantity entered by the user
    var quantity = document.getElementById("quantity").value;

    // Constant multiplier
    var multiplier = 0.0045;

    // Calculate the price
    var price = quantity * multiplier;

    // Display the result
    document.getElementById("result").innerHTML = "Price: $" + price.toFixed(2);
}
