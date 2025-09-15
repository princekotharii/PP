document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");
  const profileName = document.getElementById("profile-name");
  const profilePic = document.getElementById("profile-pic");
  const profileSection = document.getElementById("profile");
  const logoutBtn = document.getElementById("logout-btn");

  // Modals
  const loginModal = document.getElementById("login-modal");
  const signupModal = document.getElementById("signup-modal");

  const showSignup = document.getElementById("show-signup");
  const showLogin = document.getElementById("show-login");

  // Forms
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  // Switch modals
  showSignup.addEventListener("click", () => {
    loginModal.style.display = "none";
    signupModal.style.display = "flex";
  });
  showLogin.addEventListener("click", () => {
    signupModal.style.display = "none";
    loginModal.style.display = "flex";
  });

  // Signup
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("signup-username").value.trim();
    const number = document.getElementById("signup-number").value.trim();
    const password = document.getElementById("signup-password").value;
    const image = document.getElementById("signup-image").files[0];

    if (username && number && password && image) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const imageData = event.target.result;

        // Save user in localStorage
        localStorage.setItem("user", JSON.stringify({
          username,
          number,
          password,
          image: imageData
        }));

        alert("✅ Signup successful! Please login.");
        signupModal.style.display = "none";
        loginModal.style.display = "flex";
      };
      reader.readAsDataURL(image);
    }
  });

  // Login
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("⚠️ No account found. Please sign up first!");
    } else if (username !== savedUser.username) {
      alert("❌ Wrong username!");
    } else if (password !== savedUser.password) {
      alert("❌ Wrong password!");
    } else {
      // Successful login
      profileName.textContent = savedUser.username;
      profilePic.src = savedUser.image;
      profileSection.style.display = "flex";

      mainContent.classList.remove("blurred");
      loginModal.style.display = "none";

      localStorage.setItem("loggedIn", "true"); // persistent login
    }
  });

  // Auto-login if already logged in
  if (localStorage.getItem("loggedIn") === "true") {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      profileName.textContent = savedUser.username;
      profilePic.src = savedUser.image;
      profileSection.style.display = "flex";
      mainContent.classList.remove("blurred");
      loginModal.style.display = "none";
    }
  }

  // Logout
  logoutBtn.addEventListener("click", () => {
    localStorage.setItem("loggedIn", "false");
    mainContent.classList.add("blurred");
    profileSection.style.display = "none";
    loginModal.style.display = "flex";
  });
});
