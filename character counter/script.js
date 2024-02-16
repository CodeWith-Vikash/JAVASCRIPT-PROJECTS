const textarea=document.querySelector("textarea")

let remaining=50
function updateCounter(){
    const totalchar=document.getElementById("total-char")
    const remainingChar= document.getElementById("remaining")
    totalchar.textContent=`Total Character: ${textarea.value.length}`
    remaining=50-textarea.value.length
    remainingChar.textContent=`Remaining: ${remaining}`
}

textarea.addEventListener('keyup',(e)=>{
    updateCounter()
})