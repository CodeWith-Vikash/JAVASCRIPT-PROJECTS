    const music=document.querySelector("audio")
const imageContainer=document.querySelector(".images")
const prebtn=document.querySelector(".pre")
const nextbtn=document.querySelector(".next")
const images=document.querySelectorAll("img")

let currentImage=1

setInterval(() => {
    currentImage++
    updateImage()
}, 3000);
nextbtn.addEventListener('click',()=>{
    music.play()
    currentImage++
    updateImage()
})

prebtn.addEventListener('click',()=>{
    if(currentImage>1){
        currentImage--
        updateImage()
    }
    })
    
    function updateImage(){
        if(images.length>=currentImage){
            imageContainer.style.transform=`translateX(-${(currentImage-1)*100}%)`
        }else if(currentImage>images.length){
            currentImage=1
        }
        imageContainer.style.transform=`translateX(-${(currentImage-1)*100}%)`
        console.log("currenimage= "+currentImage);
        console.log("imgelenth="+images.length);
    }

