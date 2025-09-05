let userPoints = 0;
let computerPoints = 0;

function playGame() {
    let userNumber = parseInt(prompt("Enter a number between 1 and 5"));

    if (userNumber >= 1 && userNumber <= 5) {
        let computerNumber = Math.floor(Math.random() * 5) + 1;

        let resultText = `Computer chose ${computerNumber}. `;

        if (userNumber === computerNumber) {
            userPoints++;
            resultText += "You Win!";
        } else {
            computerPoints++;
            resultText += "Computer Wins!";
        }

        document.getElementById("userScore").textContent = userPoints;
        document.getElementById("computerScore").textContent = computerPoints;
        document.getElementById("result").textContent = resultText;

    } else {
        alert("Please enter a valid number between 1 and 4.");
    }
}

document.getElementById("btn").addEventListener("click", playGame);
