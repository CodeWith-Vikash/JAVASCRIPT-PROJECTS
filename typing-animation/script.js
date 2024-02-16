const h1= document.querySelector("h1")
const span=document.querySelector("span")
const carreer=["DEVELOPER","YOUTUBER","FREELANCER","INSTRUCTER"]

let carreerIndex=0
let textIndex=1

setInterval(() => {
    updateText()
    textIndex++
    if(carreer[carreerIndex].length<textIndex){
        carreerIndex++
        textIndex=1
    }

    if(carreerIndex==carreer.length){
        carreerIndex=0
    }
},400);
function updateText(){
    h1.innerHTML=`
    I can be ${carreer[carreerIndex].slice(0,1)=="I" ? "an" :"a"} <span>${carreer[carreerIndex].slice(0,textIndex)}</span>
    `
}