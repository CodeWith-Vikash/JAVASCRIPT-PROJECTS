const minute=document.querySelector(".minute")
const second=document.querySelector(".second")
const millisecond=document.querySelector(".millisecond")
const startbtn=document.getElementById("start")
const stopbtn=document.getElementById("pause")
const resetbtn=document.getElementById("reset")

let milli=0
let sec=0
let min=0
let interval

startbtn.addEventListener('click',function(){
     interval=setInterval(() => {
        if(milli<99){
            milli++
        }else if(sec>59){
            sec=0
            min++
        }else{
            milli=0
            sec++
        }

        const getmin=String(min).padStart(2,"0")
        const getsec=String(sec).padStart(2,"0")
        const getmilli=String(milli).padStart(2,"0")
        // console.log("interval");
        minute.innerHTML=`${getmin} : `
        second.innerHTML=`${getsec} : `
        millisecond.innerHTML=`${getmilli}`
        // console.log("working");
    }, 10);
})

stopbtn.addEventListener('click',function(){
    clearInterval(interval)
})

resetbtn.addEventListener('click',function(){
    window.location.reload()
})