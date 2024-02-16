const p=document.querySelector("p")
const button=document.querySelector("button")
const loader=document.createElement("img")
const para=document.querySelector(".para")
loader.src="loader.svg"

async function getquote(){
    try {
        para.appendChild(loader)
        p.style.display="none"
        const apiKey="https://api.quotable.io/random"
        const response= await fetch(apiKey)
        const data=await response.json()
        para.removeChild(loader)
        p.style.display="block"
        p.innerHTML=`<strong>"</strong> ${data.content} <strong>"</strong>`
        const author=document.getElementById("author")
        author.textContent=`~ ${data.author} ~`
    } catch (error) {
        p.textContent="some error happend please try again"
        console.log(error);
        author.textContent="sorry"
    }
}

button.addEventListener("click",getquote)


