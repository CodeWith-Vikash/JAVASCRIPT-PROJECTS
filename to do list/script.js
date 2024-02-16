const input = document.querySelector("input")
const form=document.querySelector(".form")
const ul = document.querySelector("ul")


let list=JSON.parse(localStorage.getItem("list"))
console.log(list);
if(list){
    list.forEach((item)=>{
        toDoList(item)
    })
}

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    toDoList()
})


function toDoList(item){
    let newTask=input.value
    if(item){
        newTask=item.name
    }
    const task = document.createElement("li")

    if(item&& item.checked){
        task.classList.add("checked")
    }
    
    const span =document.createElement("span")
    span.textContent=newTask
    task.appendChild(span)


const iconsContainer= document.createElement("div")
iconsContainer.className="icons"
const check = document.createElement("i")
check.className ="fa-solid fa-square-check"
const trash = document.createElement("i")
trash.className ="fa-solid fa-trash"
iconsContainer.appendChild(check)
iconsContainer.appendChild(trash)

task.appendChild(iconsContainer)

ul.appendChild(task)
input.value=""

check.addEventListener('click',()=>{
    task.classList.toggle("checked")
    updateLocalStorage()
})

trash.addEventListener('click',()=>{
    ul.removeChild(task)
    updateLocalStorage()
})
updateLocalStorage()
}

function updateLocalStorage(){
    const liElements= document.querySelectorAll("li")
    list=[]
    liElements.forEach((li)=>{
        list.push({
            name: li.querySelector("span").textContent,
            checked: li.classList.contains("checked")
        })
    })
    localStorage.setItem("list",JSON.stringify(list))
}
// localStorage.clear()