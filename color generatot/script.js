const container=document.querySelector(".container")


for (let index = 0; index <30; index++) {
    const color=document.createElement("div")
    color.classList.add("color")
    container.appendChild(color)
}

const colorContainers=document.querySelectorAll(".color")
generateColor()
function generateColor(){
    Array.from(colorContainers).forEach((color)=>{
        const newColor=`#${randomcolor()}`
        color.style.backgroundColor=newColor
        color.textContent=newColor
    })
}


function randomcolor(){
    const charset=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"]
    const colorcodeLength=6
    let colorcode=""
    for (let index = 0; index <colorcodeLength; index++) {
        const random=Math.floor(Math.random()*(charset.length-1))
        colorcode+=charset[random]
    }
    return colorcode;
}