const input = document.querySelector(".input")
const send = document.querySelector(".button")
const p = document.querySelector(".p")
const h2 = document.querySelector(".number")
const count = document.querySelector(".count")

let cNumber = '0'
p.textContent = "Please enter a number between 1 to 100."
count.innerText = `Count: ${cNumber}`

let rNumber = Math.floor(Math.random()*100)+1
console.log(rNumber)

function guess(){
    
    let number = parseInt(input.value, 10)
    if (isNaN(number)) {
        p.textContent = "Please enter a number between 1 to 100."
        p.style.color = ""
    } else {
        if(number == rNumber) {
            p.textContent = "You won!🎉"
            p.style.color = "green"
            p.break;
            h2.textContent = `The number is ${rNumber}`
        } else if(number > rNumber) {
            p.textContent = "Your number is Big"
            p.style.color = ""
        } else {
            p.textContent = "Your number is Small"
            p.style.color = ""
        }
    }
    if(isNaN(number)) {
        count.innerText = `Count: ${cNumber}`
    } else {
        cNumber++
        count.innerText = `Count: ${cNumber}`
    }
    input.value = ''
}

send.addEventListener("click", guess)