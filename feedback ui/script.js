const selectedReview=document.querySelector(".selected")
const box=document.querySelector(".box")
const icon=document.querySelectorAll(".icon")
const button=document.querySelector("button")
button.addEventListener('click',function(){
    const review=document.querySelector(".selected span").textContent
    box.innerHTML=`
    <strong>Thank you!</strong>
    <strong>Feedback: ${review}</strong>
    <p>We will use your feedback to improve our coustemer support</p>
    `
})


icon.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.classList.toggle("selected")
    })
})