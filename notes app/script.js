const addnote=document.querySelector("i")
const box=document.querySelector(".box")
const textareaEl=document.querySelector("textarea")


let list=JSON.parse(localStorage.getItem("note"))
console.log(list);
if(list){
    list.forEach((item)=>{
        createNote(item)
    })
}

addnote.addEventListener('click',function(){
    createNote()
})

function createNote(item){
    let newNote=textareaEl.value
    const textarea=document.createElement("textarea")
    if(item){
        newNote=item.text
    }
    textarea.placeholder="Empty note"
    textarea.value=newNote
    box.prepend(textarea)

    textarea.addEventListener("dblclick",(e)=>{
        const warning=confirm("do you want delete this note")
        if(warning){
            box.removeChild(textarea)
        }
    })
    updateLocalstorage()
}

function updateLocalstorage(){
    const notes= document.querySelectorAll("textarea")
    list=[]
    notes.forEach((note)=>{
        list.push({
            text:note.value
        })
    })
    localStorage.setItem("note",JSON.stringify(list))
}
// localStorage.clear()
