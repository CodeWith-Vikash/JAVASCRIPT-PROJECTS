const output=document.querySelector(".output input")
const firstInput=document.querySelector(".first input")
const firstselect=document.querySelector(".first select")
const outputSelect=document.querySelector(".output select")


const apiKey="0de1b9616d421afeb64b75c2"

async function getdata(){
    const outputvalue=outputSelect.value
    const url=` https://v6.exchangerate-api.com/v6/${apiKey}/latest/${firstselect.value}`
    const response= await fetch(url)
    const data= await response.json()
    console.log(data)
    const rate=data.conversion_rates[outputvalue]
    output.value=firstInput.value*rate
    const para=document.querySelector("p")
    para.textContent=`1 ${firstselect.value} = ${rate} ${outputvalue}`
}

firstInput.addEventListener("input",getdata)