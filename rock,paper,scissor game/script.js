const options= document.querySelectorAll(".options div")
let result=" "
let yourScore=0
let computerScore=0
const charset=[0,1,2]
const optionSet=["rock","paper","scissor"]


Array.from(options).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const random=charset[Math.floor(Math.random() * charset.length)]
        const computer=optionSet[random]
        const yourChoise=e.currentTarget.className
        console.log("computer : "+computer);
        console.log(yourChoise);
        //conditions from your prespective
        if((yourChoise=="rock")&&(computer=="paper")){
            result="you lose! paper beats rock"
            computerScore++
        }else if((yourChoise=="rock")&&(computer=="scissor")){
            result="you win! rock beats scissor"
            yourScore++
        }else if((yourChoise=="paper")&&(computer=="scissor")){
            result="you lose! scissor beats paper"
            computerScore++            
        }else if((yourChoise=="scissor")&&(computer=="paper")){
            result="you win! scissor beats paper"
            yourScore++
            // conditions from computer's prespective
        }else if((computer=="rock")&&(yourChoise=="paper")){
            result="you win! paper beats rock"
            yourScore++
        }else if((computer=="rock")&&(yourChoise=="scissor")){
            result="you lose! rock beats scissor"
            computerScore++
        }else{
            result="It's a tie"
        }
        // now it's time to show results
        const resultToShow=document.querySelector(".message")
        resultToShow.textContent=result
        const myScore=document.querySelector("#your-score span")
        const computersScore=document.querySelector("#computer-score span")
        myScore.innerHTML=yourScore
        computersScore.innerHTML=computerScore
        // creating computer choise alert
        const message=document.querySelector("h4 span")
        message.textContent=`${computer}`
    })
})