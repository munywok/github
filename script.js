// ==============================
// Event Handling and Custom Form Validation
// ==============================

// Handle form submission
document.getElementById("subscribeForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form behavior

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  // Custom validation
  if (name === "" || email === "") {
    message.textContent = "Both fields are required.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Please enter a valid email address.";
    return;
  }

  message.style.color = "green";
  message.textContent = `Thank you, ${name}, for subscribing!`;
});

// ==============================
// Interactive Feature 1: Change Background
// ==============================
function changeBackground() {
  const colors = ["#f0f8ff", "#d1e7dd", "#fff3cd", "#f8d7da", "#e2e3e5"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// ==============================
// Interactive Feature 2: Counter
// ==============================
let counter = 0;

function increaseCounter() {
  counter++;
  document.getElementById("counterValue").textContent = counter;
}

function resetCounter() {
  counter = 0;
  document.getElementById("counterValue").textContent = counter;
}
