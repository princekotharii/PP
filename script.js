
document.getElementById("year").textContent = new Date().getFullYear();

const bulb = document.getElementById("bulb");
const bulbBtn = document.getElementById("bulbBtn");
let bulbOn = false;

bulbBtn.addEventListener("click", () => {
  if (bulbOn) {
    bulb.src = "images/lampp.png";
    bulbBtn.textContent = "ON"; 
    bulbOn = false;
    bulbBtn.style.backgroundColor="green"
    bulbBtn.style.color="black"
  } else {
    bulb.src = "images/lamp.png";
    bulbBtn.textContent = "OFF";
    bulbOn = true;
    bulbBtn.style.backgroundColor="red"
    bulbBtn.style.color="white"
  }
});




 




