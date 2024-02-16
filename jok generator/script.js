const apiKey="QEnfIyABpuRGf5mEJ7Xxvg==nMUUDn2pExtUMVvk"
const p=document.querySelector("p")
const para=document.querySelector(".para")
const image=document.createElement("img")
image.src="loader.svg"
const button =document.querySelector("button")

const url="https://api.api-ninjas.com/v1/jokes?limit=1"

async function getdata(){
    const options={
        method:"GET",
        headers:{
            "X-Api-Key":apiKey
        }
    }
    p.style.display="none"
    para.appendChild(image)
    button.textContent="Loading...."
    const response= await fetch(url,options)
    const data=await response.json()
    console.log(data);
    p.textContent=`" ${data[0].joke} "`
    para.removeChild(image)
    p.style.display="block"
    button.textContent="Tell me a joke"
}
button.addEventListener("click",getdata)