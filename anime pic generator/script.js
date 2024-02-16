const button =document.querySelector("button")
const pic=document.querySelector(".pichide")
const artistname=document.querySelector("span")
const image=document.querySelector(".image")


async function getimage(){
    try {
        pic.style.display="block"
        button.disabled=true
        image.style.backgroundImage=`url(loader.svg)`
        button.textContent="loading..."
        artistname.textContent="updating..."
        const url='https://nekos.best/api/v2/neko'
        const response=await fetch(url)
        const data= await response.json()
        const imgUrl=data.results[0].url
        const name=data.results[0].artist_name
        image.style.backgroundImage=`url(${imgUrl})`
        artistname.textContent=name
        button.disabled=false
        button.textContent="Generate pic"
    } catch (error) {
        let p=document.createElement("p")
        p.textContent=error
        image.appendChild(p)
    }
}

button.addEventListener('click',getimage)