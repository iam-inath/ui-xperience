








// Hide/Show the answer to a question when the question is clicked
//Navigate the questions and hide/show answers using keyboard navigation alOne

// When a question or a + button is clicked, display the answer, display the - button

const questionOneSelectors = document.querySelectorAll('.one-div h3, .icon-plus-one') // Div question One
const paragraphOne = document.querySelector('.question-one p') // Paragraph One
const iconMinusOne = document.querySelector('.icon-minus-one')
const iconPlusOne = document.querySelector('.icon-plus-one')

for (let i = 0; i < questionOneSelectors.length; i++){
    questionOneSelectors[i].addEventListener('click', ()=>{
        paragraphOne.style.display = "block"
        iconPlusOne.style.display = "none"
        iconMinusOne.style.display = "block"
    })
    iconMinusOne.addEventListener('click', ()=>{
        paragraphOne.style.display = "none"
        iconPlusOne.style.display = "block"
        iconMinusOne.style.display = "none"
    })
}


const questionTwoSelectors = document.querySelectorAll('.two-div h3, .icon-plus-two') // Div question One
const paragraphTwo = document.querySelector('.question-two p') // Paragraph One
const iconMinusTwo = document.querySelector('.icon-minus-two')
const iconPlusTwo = document.querySelector('.icon-plus-two')

for (let i = 0; i < questionTwoSelectors.length; i++){
    questionTwoSelectors[i].addEventListener('click', ()=>{
        paragraphTwo.style.display = "block"
        iconPlusTwo.style.display = "none"
        iconMinusTwo.style.display = "block"
    })
    iconMinusTwo.addEventListener('click', ()=>{
        paragraphTwo.style.display = "none"
        iconPlusTwo.style.display = "block"
        iconMinusTwo.style.display = "none"
    })
}


const questionThreeSelectors = document.querySelectorAll('.three-div h3, .icon-plus-three') // Div question One
const paragraphThree = document.querySelector('.question-three p') // Paragraph One
const iconMinusThree = document.querySelector('.icon-minus-three')
const iconPlusThree = document.querySelector('.icon-plus-three')
for (let i = 0; i < questionThreeSelectors.length; i++){
    questionThreeSelectors[i].addEventListener('click', ()=>{
        paragraphThree.style.display = "block"
        iconPlusThree.style.display = "none"
        iconMinusThree.style.display = "block"
    })
    iconMinusThree.addEventListener('click', ()=>{
        paragraphThree.style.display = "none"
        iconPlusThree.style.display = "block"
        iconMinusThree.style.display = "none"
    })
}


const questionFourSelectors = document.querySelectorAll('.four-div h3, .icon-plus-four') // Div question One
const paragraphFour = document.querySelector('.question-four p') // Paragraph One
const iconMinusFour = document.querySelector('.icon-minus-four')
const iconPlusFour = document.querySelector('.icon-plus-four')

for (let i = 0; i < questionFourSelectors.length; i++){
    questionFourSelectors[i].addEventListener('click', ()=>{
        paragraphFour.style.display = "block"
        iconPlusFour.style.display = "none"
        iconMinusFour.style.display = "block"
    })
    iconMinusFour.addEventListener('click', ()=>{
        paragraphFour.style.display = "none"
        iconPlusFour.style.display = "block"
        iconMinusFour.style.display = "none"
    })
}