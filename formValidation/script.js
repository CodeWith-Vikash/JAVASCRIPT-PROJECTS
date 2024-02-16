const button= document.querySelector("button")
const inputEl= document.querySelectorAll("input")
const nameInput= document.getElementById("fullName").value
const contactInput= document.getElementById("contactNum").value
const emailInput= document.getElementById("email").value
const messageInput= document.getElementById("Message").value

button.addEventListener('click',(e)=>{
    e.preventDefault()
    checkValidation()
})

function checkValidation(){
    inputEl.forEach((input)=>{
        input.parentElement.querySelector("span").style.visibility="visible"
    })
}