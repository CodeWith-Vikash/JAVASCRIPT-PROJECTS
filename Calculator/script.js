const butttons=document.querySelectorAll("button")
const input=document.querySelector("input")
const operator=document.querySelectorAll(".operators")
let arr=[]

Array.from(butttons).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(btn.id=="clear"){
            input.value=" "
        }else if(btn.id=="equal"){
            input.value=eval(input.value)
        }else if(btn.id=="delete"){
            arr.pop()
            input.value=arr.join("")
        }else{
            input.value+=btn.textContent
            arr.push(btn.textContent)
        }
        // console.log(arr);
    })
})


// failed to add disable and enable function on operators

// let operators=Array.from(operator)
// const numbers=document.querySelectorAll(".numbers")
// operators.forEach((btn)=>{
//     btn.addEventListener('click',()=>{
//         for (let index = 0; index < operators.length; index++) {
//             operators[index].setAttribute("disabled",true)
//         }
//     })
// })

// Array.from(numbers).forEach((btn)=>{
//     btn.addEventListener('click',()=>{
//         for (let index = 0; index < operators.length; index++) {
//             operators[index].setAttribute("disabled",false)
//         }
//     })
// })

// task to do{ add disable and enable function on buttons } 
