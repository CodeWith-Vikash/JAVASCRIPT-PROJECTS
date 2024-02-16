const input=document.querySelector("input")
const box=document.querySelector(".box")



input.addEventListener('keyup',(e)=>{
    let word=e.target.value
    if(e.key=="Enter"){
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        async function fetchapi(){
            const response =await fetch(url)
            const data= await response.json()
            console.log(data);
        }
        fetchapi()
    }
})