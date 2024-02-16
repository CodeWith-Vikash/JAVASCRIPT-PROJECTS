const daysEl=document.querySelector(".days h4")
const hoursEl=document.querySelector(".hours h4")
const minutesEl=document.querySelector(".minutes h4")
const secondsEl=document.querySelector(".seconds h4")

const seconds=1000
const minutes=seconds*60
const hours = minutes*60
const days = hours*24

setInterval(() => {
    updateTime()
}, 1000);

function updateTime(){
    const newyearDate= new Date("Jan1,2024 00:00:00").getTime()
    const now=new Date().getTime()
    const gap=newyearDate-now

    const d= Math.floor(gap/days)
    const h= Math.floor((gap%days)/hours)
    const min=Math.floor((gap%hours)/minutes)
    const sec=Math.floor((gap%minutes)/seconds)
    
    daysEl.textContent=d
    hoursEl.textContent=h
    minutesEl.textContent=min
    secondsEl.textContent=sec
}