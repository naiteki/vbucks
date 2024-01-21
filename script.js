function calculatePrice() {
    // Get the quantity entered by the user
    var quantity = document.getElementById("quantity").value;

    // Define your multiplier
    var multiplier = 0.0045; // Change this to your desired multiplier

    // Calculate the price
    var price = quantity * multiplier;

    // Display the result
    document.getElementById("result").innerHTML = "Price: $" + price.toFixed(2);

    function goToScreen2() {
    // Hide Screen 1
    document.getElementById("screen1").style.display = "none";

    // Show Screen 2
    document.getElementById("screen2").style.display = "block";
}

function calculatePrice() {
    // Get the quantity and multiplier entered by the user
    var quantity = document.getElementById("quantity").value;
    var multiplier = document.getElementById("multiplier").value;

    // Calculate the price
    var price = quantity * multiplier;

    // Display the result
    document.getElementById("result").innerHTML = "Price: $" + price.toFixed(2);

}
