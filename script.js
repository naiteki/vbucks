function calculatePrice() {
    // Get the quantity entered by the user
    var quantity = document.getElementById("quantity").value;

    // Define your multiplier
    var multiplier = 0.0045; // Change this to your desired multiplier

    // Calculate the price
    var price = quantity * multiplier;

    // Display the result
    document.getElementById("result").innerHTML = "Price: $" + price.toFixed(2);
}
