// ==============================
// Global Scope
// ==============================
let box = document.getElementById("box");
let output = document.getElementById("output");

// ==============================
// Function: Start Animation
// Demonstrates scope and triggers a keyframe animation
// ==============================
function startAnimation() {
  box.style.animation = "bounce 1s ease";
  output.textContent = "Bounce animation started!";
}

// ==============================
// Function: Change Size
// Demonstrates parameters and scope
// ==============================
function changeSize(size) {
  box.style.width = size + "px";
  box.style.height = size + "px";
  output.textContent = "Box resized to " + size + "px.";
}

// ==============================
// Function: Calculate Area (with return value)
// Demonstrates use of return value
// ==============================
function calculateArea(width, height) {
  return width * height;
}

// Example of using calculateArea
let area = calculateArea(10, 20);
console.log("Area of 10x20 box is:", area);
