const container=document.querySelector(".imoji")
const image=document.createElement("img")
const p=document.querySelector("p")
const span=document.querySelector("span")
const apikey="7343ab2e7df1a3c9b007be3141f3771b363db2a0"
let num=0;

async function getimoji(){
    p.style.display="none"
    const url=`https://emoji-api.com/emojis?access_key=${apikey}`
    const response= await fetch(url)
    const data= await response.json()
    console.log(data);
    const emoji=data[num].character
    const name=data[num].unicodeName
    num++
    container.textContent=emoji
    span.textContent=name
    
}
container.addEventListener('click',getimoji)