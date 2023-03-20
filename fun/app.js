// Wait for the page to load before running any JavaScript
document.addEventListener("DOMContentLoaded", function() {
  
  // Get a reference to the button element
  var button = document.getElementById("button");

  // Attach a click event listener to the button
  button.addEventListener("click", function() {
    // Get a reference to the message element
    var message = document.getElementById("message");
    
    // Update the message text
    message.textContent = "Thanks for clicking!";
  });

  // Get a reference to the button element
var button = document.getElementById("button");

// Get a reference to the element you want to show/hide
var element = document.getElementById("element");

// Attach a click event listener to the button
button.addEventListener("click", function() {
  // Check if the element is visible
  if (element.style.display === "none") {
    // If the element is hidden, show it
    element.style.display = "block";
  } else {
    // If the element is visible, hide it
    element.style.display = "none";
  }
});

// Use the fetch API to make an HTTP request
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => {
    // Do something with the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });

  // Use jQuery to animate an element
$("#element").animate({
  opacity: 0.25,
  left: "+=50",
  height: "toggle"
}, 2000, function() {
  // Animation complete
});

// Use GSAP to animate an element
gsap.to("#element", { duration: 1, x: 100, rotation: 360 });




});

