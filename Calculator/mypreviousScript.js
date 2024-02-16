const input = document.querySelector("input")
const btn = document.querySelectorAll('.button')
const clear=document.querySelector('#clear')
const delet =document.querySelector('#delete')
let string=""
// function to get button value
Array.from(btn).forEach((button) => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string)
            input.value=string
        }else{
            
            string=string+e.target.innerHTML
            input.value=string
        }
    })
});
// function for clear button
clear.addEventListener('click',()=>{
    window.location.reload()
})
// function for delete button
// delet.addEventListener('click',()=>{
//    let inputValue=input.value
// //    we use split to convert string to array 
//    let arr=inputValue.split('')
//    arr.pop()
//    input.value=arr.join('')
// })

// *****************TO DO*****************************

/*
1. Add a delete button to delete single characters
2. add disable and enable option after clicking operators(+,-,*,/,=) 
*/


