const accessKey="PYtty4g9IUJoUZ-Otaom9rMmSQg6dpCFF3DbxYgIwcQ"
const button=document.querySelector("button")
const input=document.querySelector("input")
const imageParent=document.querySelector(".image-section")
const showMoreButton=document.querySelector("#more button")
let inputValue=""
let page=1
async function searchImages(){
    inputValue=input.value
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${accessKey}`
    console.log(url);
    const response=await fetch(url)
    const data = await response.json()
    const results= data.results
    // console.log(result);
    if(page==1){
        imageParent.innerHTML=" "
    }
    results.map((result)=>{
        const imageContainer=document.createElement("div")
        imageContainer.classList.add("image")
        const image=document.createElement('div')
        image.classList.add("image-wrapper")
        image.style.backgroundImage=`url(${result.urls.small})`
        const description=document.createElement('a')
        description.textContent=result.alt_description
        description.href=result.links.html
        imageContainer.appendChild(image)
        imageContainer.appendChild(description)
        imageParent.appendChild(imageContainer)
    })
    page++
    if(page>1){
        showMoreButton.style.display="block"
    }
}
showMoreButton.addEventListener('click',function(){
    searchImages()
})
button.addEventListener('click',function(){
    page=1
    searchImages()
})