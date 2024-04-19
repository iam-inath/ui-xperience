const emailInput = document.getElementById("email").value
const suscribeBtn = document.getElementById("subscribe")
let errorParagraph = document.querySelector(".error")
let inputField = document.getElementById("input")
let emailRegex = /^[a-z0-9._-]+@[a-z0-9.-_]+\.[a-z]{2,}$/

suscribeBtn.addEventListener("click", ()=>{
    if (emailInput === ""){
        errorParagraph.style.display = "block"
        errorParagraph.textContent = `Whoops! It looks like you forgot to add your email`
        inputField.style.border = '1px solid hsl(354, 100%, 66%)'
    } else if (!emailRegex.test(emailInput)){
        errorParagraph.style.display = "block"
        errorParagraph.textContent = `Please provide a valid email address`
    } else if (emailRegex.test(emailInput)){
        errorParagraph.style.display = "block"
        errorParagraph.textContent = ``
    }
})
