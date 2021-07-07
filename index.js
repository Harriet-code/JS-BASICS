// get the increase and decrease button
const incrementButton = document.getElementById("increase-btn");
const resetButton = document.getElementById("reset-btn");
const decrementButton = document.getElementById("decrease-btn");

// get the counter board value
const counterBoard = document.getElementById("counter-board");

//variable holding the counter value
let counterValue = 0;

// function that increase the counter by 1
const increaseCounter = () => {
  counterBoard.innerHTML = ++counterValue;
};

// function to decrease the value by 1
const decreaseCounter = () => {
  counterBoard.innerHTML = --counterValue;
};

const resetCounter = () => {
  // update the UI
  counterBoard.innerHTML = 0;

  // update the variable container
  counterValue = 0;
};

// add event listener to code
incrementButton.addEventListener("click", increaseCounter);
decrementButton.addEventListener("click", decreaseCounter);
resetButton.addEventListener("click", resetCounter);

function myFunction() {
  document.getElementById("demo").innerHTML = "paragraph changed";
}
