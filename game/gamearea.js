// // Check login state (saved in localStorage)
// let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

// const gameContainer = document.getElementById("game-container");
// const authButtons = document.getElementById("auth-buttons");
// const logoutBtn = document.getElementById("logout-btn");

// // Update UI depending on login state
// function updateUI() {
//   if (isLoggedIn) {
//     gameContainer.style.display = "grid";
//     authButtons.style.display = "none";
//     logoutBtn.style.display = "block";
//   } else {
//     gameContainer.style.display = "none";
//     authButtons.style.display = "block";
//     logoutBtn.style.display = "none";
//   }
// }

// // Simulate login from other page
// // (example: you can set localStorage.setItem("isLoggedIn","true") after login)
// function login() {
//   isLoggedIn = true;
//   localStorage.setItem("isLoggedIn", "true");
//   updateUI();
// }

// // Logout
// logoutBtn.addEventListener("click", () => {
//   isLoggedIn = false;
//   localStorage.setItem("isLoggedIn", "false");
//   updateUI();
// });

// // On page load, set UI correctly
// updateUI();


// let a = 2 
// let b = 2

// if(a == b){
// console.log(`a + b : ${a+b}`);
// }else{
// console.log('not equal');

// }

// let data = a+b  == 4 ? 'equal' : "not equal" 

// console.log(data);

