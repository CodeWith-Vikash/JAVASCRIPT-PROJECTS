const nav= document.querySelector(".nav")
const hideBtn= document.querySelector(".fa-caret-down")
const optionsContainer = document.querySelector("ul")
const options= document.querySelectorAll("li")
const para = document.querySelector("p")


nav.addEventListener('click',()=>{
    optionsContainer.classList.toggle("hide")
    hideBtn.classList.toggle("rotate")
})

options.forEach((li)=>{
    li.addEventListener('click',()=>{
        para.innerHTML=li.innerHTML
        optionsContainer.classList.toggle("hide")
        hideBtn.classList.toggle("rotate")
    })
})