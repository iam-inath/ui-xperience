// VARIABLES

// get email input value and button id, then add action when submitted || set regular email expression
const  emailInput = document.getElementById("email")
const suscribeBtn = document.getElementById("submit")
const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/

//elements to hide on successful click
const mainDiv = document.getElementById("mainDiv")
const thankYou = document.getElementById("thankyou")
const confirmationParagraph = document.getElementById("confirmation-msg")
const errorLabel = document.getElementById("error-legend")
const illustrationMobile = document.getElementById("illustration-mobile")

suscribeBtn.addEventListener("click", ()=>{
    event.preventDefault()
    if (emailFormat.test(emailInput.value)){ // if user input is valid, show thank you page
        mainDiv.style.display = "none"
        illustrationMobile.style.display = "none"
        thankYou.style.display = "block"
        confirmationParagraph.innerHTML = `A confirmation email has been sent to <b>${emailInput.value}</b>. 
        Please open it and click the button inside to confirm your subscription.`
    } else if (!emailFormat.test(emailInput.value) || emailInput === ""){ // if user input is empty or invalid, ask a valid input
        styleInputField()
    } 
})

function styleInputField(){ // style the input form on error validation
    errorLabel.style.display = "block"
    emailInput.style.border = '1px solid tomato'
    emailInput.style.background = 'hsl(4, 100%, 91%)'
    emailInput.style.color = 'tomato'
    emailInput.style.fontWeight = '700'
}
