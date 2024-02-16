
let data=[
    {name:'rose',image:'https://tse2.mm.bing.net/th?id=OIP.B6eLSVN1lvkNljW--KaesQHaEo&pid=Api&P=0&h=220'},
    {name:'apple',image:'https://tse4.mm.bing.net/th?id=OIP.CXtrIMQqt9mUCPGMwV_n7QHaE8&pid=Api&P=0&h=220'},
    {name:'computer',image:'https://tse4.mm.bing.net/th?id=OIP.6T0Ktm_8qgua4Q59ohY5HgHaDt&pid=Api&P=0&h=220'},
    {name:'apple juice',image:'https://tse4.mm.bing.net/th?id=OIP.95JBLMXWwAMLfKoUZ2L4hAHaF7&pid=Api&P=0&h=220'},
    {name:'rose water',image:'https://tse4.mm.bing.net/th?id=OIP.kTKomniJJC_yADoAq7w5wQAAAA&pid=Api&P=0&h=220'},
    {name:'jungle',image:'https://tse4.mm.bing.net/th?id=OIP.kn-fScUEveasU0F2u96LawHaEo&pid=Api&P=0&h=220'},
    {name:'boat',image:'https://tse4.mm.bing.net/th?id=OIP.HdAp3se7fnm45BBr0LfNzgHaEc&pid=Api&P=0&h=220'},
    {name:'boat houce',image:'https://tse3.mm.bing.net/th?id=OIP.OuBkFLOEYxs43wvhLxcwYwHaE7&pid=Api&P=0&h=220'},
    {name:'car',image:'https://tse1.mm.bing.net/th?id=OIP.qNJ-3o_aLdtFRswCO9VLOgHaEK&pid=Api&P=0&h=220'},
    {name:'tree',image:'https://tse1.mm.bing.net/th?id=OIP.3XBCr4tx8dEPMPu2jKRaDwHaE8&pid=Api&P=0&h=220'},
    {name:'tree house',image:'https://tse1.mm.bing.net/th?id=OIP.9BHpvU09LFJt9GisohYRVwHaE8&pid=Api&P=0&h=220'},
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juicy", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]
let tempdata=data

const imageContainer=document.querySelector(".images")
function updateimage(){
    imageContainer.innerHTML=data.map((obj)=>{
        return `<img src=${obj.image}/>`
    })
}
updateimage()

const container=document.querySelector(".imgContainer")
const searchField=document.querySelector("input")
const box=document.querySelector('.suggetion')
const handleSearch=()=>{
    let sug=""
    searchField.addEventListener('input',()=>{
            let newdata=data.filter((obj)=> obj.name.toLowerCase().startsWith(searchField.value.toLowerCase()))
            function updateSugBox(){
                sug=newdata.map((ndata)=>`<div style="background-color:pink; padding:1vh 2vw;border-radius:10px;" class="list">${ndata.name}</div>`)
                container.style.opacity="0.1"
                box.style.display="block"
                box.innerHTML=sug
            }
            updateSugBox()
        // updating on suggetion click
        let list=document.querySelectorAll(".list")
        list.forEach((elem)=>{
            elem.addEventListener('click',()=>{
                searchField.value=elem.textContent
                newdata=data.filter((obj)=>obj.name.toLocaleLowerCase().startsWith(elem.textContent.toLowerCase()))
                updateSugBox()

                // updating images
               data=newdata
               updateimage()
               data=tempdata
                
            })
        })
    })
    searchField.addEventListener('blur',()=>{
        // updateimage()
        setTimeout(() => {
            box.style.display="none"
            container.style.opacity="1"
        },500);
    })
}
handleSearch()
