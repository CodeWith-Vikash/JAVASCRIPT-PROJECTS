const lists=document.querySelectorAll("li")
const rightBox= document.querySelector(".right-box")
const leftBox= document.querySelector(".left-box")
let selected
for (const list of lists) {
    list.addEventListener("dragstart",(e)=>{
        selected= e.currentTarget
    })
    rightBox.addEventListener("dragover",(e)=>{
        e.preventDefault()
    })
    rightBox.addEventListener("drop",()=>{
        rightBox.appendChild(selected)
    })
    leftBox.addEventListener("dragover",(e)=>{
        e.preventDefault()
    })
    leftBox.addEventListener("drop",()=>{
        leftBox.appendChild(selected)
    })
}