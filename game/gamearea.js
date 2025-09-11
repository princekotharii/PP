
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const loginBtn = document.querySelector(".login");
const signupBtn = document.querySelector(".signup");
const closeBtns = document.querySelectorAll(".close");

loginBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

signupBtn.addEventListener("click", () => {
  signupModal.style.display = "flex";
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    loginModal.style.display = "none";
    signupModal.style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
  if (e.target === signupModal) {
    signupModal.style.display = "none";
  }
});
