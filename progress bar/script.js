const nxtBtn= document.querySelector(".next")
const preBtn= document.querySelector(".pre")
const icons= document.querySelectorAll(".icon")
const bar= document.querySelector(".front")
let barwidth=0
let currentStep=1


nxtBtn.addEventListener('click',()=>{
    currentStep++
   if(currentStep>icons.length){
      currentStep=icons.length
   }
   updateBar()
})

preBtn.addEventListener('click',()=>{
    if(currentStep>1){
        currentStep--
    }
    updateBar()
})

function updateBar(){
    icons.forEach((step,index)=>{
        if(currentStep>index){
            step.classList.add("checked")
            step.innerHTML=`
            <i class="fa-solid fa-check"></i>
            `
        }else{
            barwidth-=25
            step.classList.remove("checked")
            step.innerHTML=`
            <i class="fa-solid fa-xmark"></i>
            `
        }
    })
    const checked= document.querySelectorAll(".checked")
    bar.style.width=`${(checked.length-1)/(icons.length-1)*100}%`
}