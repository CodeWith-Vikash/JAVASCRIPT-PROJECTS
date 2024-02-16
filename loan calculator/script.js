const output=document.querySelector("#monthly-payment")
const button=document.querySelector("button")

function calculate(){
    const amountel=document.getElementById("loan-amount").value
    const intrestel=document.getElementById("intrest-rate").value
    const timeel=document.getElementById("timetopay").value
    let amount=Number(amountel)
    let intrest=Number(intrestel)
    let time=Number(timeel)
    let myIntrest=((amount*intrest)/100)*time
    let totalAmout=myIntrest+amount
    const monthlypayment=totalAmout/time
    
    output.textContent=monthlypayment.toFixed(2)
}


button.addEventListener('click',calculate)