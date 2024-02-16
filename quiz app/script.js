const scoreel=document.querySelector("strong")
const question=document.querySelector("h3")
const button=document.querySelector("button")
let score=JSON.parse(localStorage.getItem("score"))

let random1=Math.floor((Math.random()*10)+1)
let random2=Math.floor((Math.random()*10)+1)
question.textContent=`What is ${random1} multiply by ${random2} ?`

button.addEventListener('click',()=>{
    const inputvalue=document.querySelector("input").value
    if(inputvalue==" "){
        alert("please enter your answer")
    }else{
        if(random1*random2==inputvalue){
            score++
            updateLocalstorage()
        }else{
            score--
            updateLocalstorage()
        }
    }
    console.log(inputvalue);
    window.location.reload()
})
scoreel.textContent=`Score : ${score}`

function updateLocalstorage(){
    localStorage.setItem("score",JSON.stringify(score))
}