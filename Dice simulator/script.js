const buttonEl=document.querySelector('button')
const dice=document.querySelector("i")
const diceParent=document.querySelector(".dice")
let roll=1
let numset=["one","two","three","four","five","six"]

buttonEl.addEventListener('click',()=>{
    diceParent.classList.add("dice-animation")
    setTimeout(() => {
        // for ranom dice value
        
        let random=Math.floor(Math.random()*5)
        if(random==0){
            diceParent.innerHTML=`<i class="fa-solid fa-dice-one"></i>`
        }else if(random==1){
            diceParent.innerHTML=`<i class="fa-solid fa-dice-two"></i>`
        }else if(random==2){
            diceParent.innerHTML=`<i class="fa-solid fa-dice-three"></i>`
        }else if(random==3){
            diceParent.innerHTML=`<i class="fa-solid fa-dice-four"></i>`
        }else if(random==4){
            diceParent.innerHTML=`<i class="fa-solid fa-dice-five"></i>`
        }else{
            diceParent.innerHTML=`<i class="fa-solid fa-dice-six"></i>`
        }
        diceParent.classList.remove("dice-animation")
        // creating history

        const history= document.createElement("div")
        history.className="history"
        const span=document.createElement("span")
        span.textContent=`Roll ${roll}`
        roll++
        const icon=document.createElement("i")
        icon.className=`fa-solid fa-dice-${numset[random]}`

        container.appendChild(history)
        history.appendChild(span)
        history.appendChild(icon)
        const box =document.querySelector(".box")
        box.appendChild(container)

    }, 1000);
})
const container=document.createElement("div")
container.className="history-container"