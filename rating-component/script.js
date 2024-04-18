//Initialisation - Variables
const ratingCard = document.getElementById("rating-card")
const thankYouCard = document.getElementById("thankyou-card")
const thankYouIcon = document.getElementById("thankyou-icon")
const thankYouTitle = document.getElementById("thankyou-title")
const ratingSelected = document.getElementById("selected-rating")
const thankYouParagraph = document.getElementById("thankyou-paragraph")

let selectedRating = null
//select all possibles buttons with class .rat
const choicesOptions = document.querySelectorAll(".rat")
choicesOptions.forEach((userChoice) => {
    userChoice.addEventListener("click", (event)=> {
        selectedRating = event.target.value
        })})

const submitBtn = document.getElementById("submit")
submitBtn.addEventListener("click", () =>{
    submitUserRating()
})


function submitUserRating(){
    //alert( selectedRating)
    if (selectedRating === "1"){
        ratingCard.style.display = "none"
        thankYouCard.style.display = "block"
        ratingSelected.textContent = `You selected ${selectedRating} out of 5`
    } else if (selectedRating === "2"){
        ratingCard.style.display = "none"
        thankYouCard.style.display = "block"
        ratingSelected.textContent = `You selected ${selectedRating} out of 5`
    } else if (selectedRating === "3"){
        ratingCard.style.display = "none"
        thankYouCard.style.display = "block"
        ratingSelected.textContent = `You selected ${selectedRating} out of 5`
    } else if (selectedRating === "4"){
        ratingCard.style.display = "none"
        thankYouCard.style.display = "block"
        ratingSelected.textContent = `You selected ${selectedRating} out of 5`
    } else if (selectedRating === "5"){
        ratingCard.style.display = "none"
        thankYouCard.style.display = "block"
        ratingSelected.textContent = `You selected ${selectedRating} out of 5`
    } 
}
