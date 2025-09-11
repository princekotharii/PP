let randomNumber = Math.floor(Math.random() * 100) + 1;
let correctCount = 0;
let wrongCount = 0;

const input = document.getElementById("userGuess");
const button = document.getElementById("guessBtn");
const message = document.getElementById("message");
const correctDisplay = document.getElementById("correct");
const wrongDisplay = document.getElementById("wrong");

function checkGuess() {
  let guess = parseInt(input.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "⚠️ Please enter a valid number between 1 and 100.";
    message.style.color = "red";
    return;
  }

  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}`;
    message.style.color = "green";
    correctCount++;
    correctDisplay.textContent = correctCount;
    randomNumber = Math.floor(Math.random() * 100) + 1; // reset game
  } else if (guess > randomNumber) {
    message.textContent = "📉 Try a smaller number.";
    message.style.color = "blue";
    wrongCount++;
    wrongDisplay.textContent = wrongCount;
  } else {
    message.textContent = "📈 Try a bigger number.";
    message.style.color = "blue";
    wrongCount++;
    wrongDisplay.textContent = wrongCount;
  }

  input.value = "";
}

button.addEventListener("click", checkGuess);
