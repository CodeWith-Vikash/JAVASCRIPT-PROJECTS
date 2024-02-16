const icons = document.querySelectorAll("i")

icons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        let grandparent= btn.parentElement.parentElement
        let qContainers= Array.from(grandparent.parentElement.children)
        qContainers.forEach((question)=>{
            question.classList.remove("hide")
        })
        grandparent.classList.add("hide")
        
    })
})
const minusElements= document.querySelectorAll(".minus")
minusElements.forEach((minus)=>{
    minus.addEventListener('click',()=>{
        minus.parentElement.parentElement.classList.remove("hide")
    })
})