const minute=document.querySelector(".minute")
const second=document.querySelector(".second")
const startbtn=document.getElementById("start")
const stopbtn=document.getElementById("pause")
const resetbtn=document.getElementById("reset")

let sec=0
let min=25
let interval

startbtn.addEventListener('click',function(){
        interval=setInterval(() => {
            if(min==0 && sec==0){
                clearInterval(interval)
            }else if(sec>0){
                sec--
            }else{
                min--
                sec=60
            }
    
            const getmin=String(min).padStart(2,"0")
            const getsec=String(sec).padStart(2,"0")
            // console.log("interval");
            minute.innerHTML=`${getmin} : `
            second.innerHTML=`${getsec}`
            // console.log("working");
        }, 1000);
})

stopbtn.addEventListener('click',function(){
    clearInterval(interval)
})

resetbtn.addEventListener('click',function(){
    window.location.reload()
})
