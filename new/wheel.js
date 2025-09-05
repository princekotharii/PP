const wheel = document.querySelector(".wheel")
const wheelOn = document.querySelector(".on")
const wheelOff = document.querySelector(".off")

wheelOn.addEventListener("click", ()=>{
    wheel.style.animation="rotation 1s linear infinite"
})
 wheelOff.addEventListener("click", ()=>{
    wheel.style.animation="none"
 })