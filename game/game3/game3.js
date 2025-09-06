function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").innerText = "Your Choice: " + userChoice;
  document.getElementById("computer-choice").innerText = "Computer's Choice: " + computerChoice;

  let winner = "";

  if (userChoice === computerChoice) {
    winner = "It's a Draw! 😐";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "You Win! 🎉";
  } else {
    winner = "Computer Wins!🤖 ";
  }

  document.getElementById("winner").innerText = "Result: " + winner;
}
