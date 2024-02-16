const input=document.querySelector("input")
const button=document.querySelector("button")
button.addEventListener("click",function(){
    const dob=input.value
    if(dob==""){
        alert("Enter your birthday")
    }else{
    let birthday=new Date(dob).getFullYear()
    let now =new Date().getFullYear()
    let age = now-birthday
    
    const box=document.querySelector(".box")
    const h3=document.createElement("h3")
    h3.textContent=`You are ${age} years old`
    box.appendChild(h3)
    }
})