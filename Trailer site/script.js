const container=document.querySelector(".container")
const button =document.querySelector("button")
const video=document.querySelector(".trailer")
button.addEventListener('click',()=>{
    container.classList.add("active")
    container.classList.add("video")
})

const cut=document.querySelector("i")
cut.addEventListener("click",()=>{
    container.classList.remove("video")
    container.classList.remove("active")
})