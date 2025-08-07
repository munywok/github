// ==============================
// Part 1: Variable Declarations and Conditionals
// ==============================

let userName = "Joshua";
let userAge = 20;

if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

// ==============================
// Part 2: Custom Functions
// ==============================

function greetUser() {
  const message = `Hello, ${userName}! Welcome to the JavaScript project.`;
  document.getElementById("messageArea").textContent = message;
  console.log("Greet function called.");
}

function calculateSum() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  document.getElementById("messageArea").textContent = `The sum of numbers from 1 to 10 is: ${sum}`;
  console.log("Sum calculated:", sum);
}

// ==============================
// Part 3: Loop Examples
// ==============================

// Loop 1: For loop
function loopMessages() {
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = ""; // Clear previous items

  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `Item number ${i}`;
    itemList.appendChild(li);
  }

  // Loop 2: While loop
  let counter = 0;
  while (counter < 3) {
    console.log(`This is while loop number ${counter + 1}`);
    counter++;
  }
}

