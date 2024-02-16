const input=document.getElementById("kg")
const output=document.getElementById("pound")
input.addEventListener("input",()=>{
    const inputVal=input.value
    output.textContent=inputVal*2.2
})