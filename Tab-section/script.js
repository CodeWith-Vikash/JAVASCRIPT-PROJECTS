const tabContent=document.querySelector(".tab-content")
const tabs=document.querySelectorAll(".text")
const lists =document.querySelectorAll("li")
const ul=document.querySelector("ul")
const button=document.querySelector(".btn")

ul.addEventListener('click',(e)=>{
    lists.forEach((li)=>{
        li.classList.remove("live")
    })
    e.target.classList.add("live")
    tabs.forEach((tab)=>{ 
        tab.classList.remove("hide")
        if(tab.id!=e.target.textContent){
            tab.classList.add("hide")
        }
    })
})
