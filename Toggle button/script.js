const circle=document.querySelector(".circle")
const btn=document.querySelector("button")
const body=document.querySelector("body")
console.log(btn.offsetWidth);

btn.addEventListener("click",()=>{
    if(body.style.backgroundColor=="white"){
        circle.style.transform=`translateX(${(btn.offsetWidth-circle.offsetWidth)-10 }px)`
        body.style.backgroundColor="black"
        circle.style.backgroundColor="black"
        btn.style.backgroundColor="white"
    }else{
        circle.style.transform="translateX(0vw)"
        body.style.backgroundColor="white"
        circle.style.backgroundColor="white"
        btn.style.backgroundColor="grey"
    }
})