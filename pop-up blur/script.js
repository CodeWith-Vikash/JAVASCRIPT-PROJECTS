const button=document.querySelector(".main button")
const cut =document.querySelector("i")
const container=document.querySelector(".container")
console.log(container);

const card=document.querySelector(".card")
button.addEventListener("click",()=>{
     container.classList.add("remove")
})

cut.addEventListener("click",()=>{
    container.classList.remove("remove")
})