const bill= document.getElementById("bill-amount")
const tip= document.getElementById("tip")
const totalAmoount=document.querySelector("#total strong")
const button=document.querySelector("button")
button.addEventListener('click',()=>{
    const billAmount=Number(bill.value)
    const tipAmount=Number(tip.value)
    const total=(billAmount*tipAmount/100)+billAmount
    totalAmoount.textContent=`${total}$`
})
