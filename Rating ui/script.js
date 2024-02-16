const star=document.querySelectorAll(".rating i")

star.forEach((rate,index)=>{
    rate.addEventListener('click',()=>{
        updateRating(index)
        rate.id.toggle("change")
    })
})