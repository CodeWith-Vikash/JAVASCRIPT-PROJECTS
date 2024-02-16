let btn=document.querySelector('button')
let content=document.querySelector('.content')
let box=document.querySelector('.box')
let cut=document.querySelector('i')
btn.addEventListener('click',(e)=>{
    // content.style.display="block"
    // box.style.display="none"
    let parent=e.currentTarget.parentElement.parentElement
    parent.classList.add('open-modal')
})
cut.addEventListener('click',(e)=>{
    // content.style.display="none"
    // box.style.display="block"
    let parent=e.currentTarget.parentElement.parentElement
    parent.classList.remove('open-modal')
})