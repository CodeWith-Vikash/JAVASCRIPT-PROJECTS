const music=document.querySelector("audio")
const imageContainer=document.querySelector(".images")
const prebtn=document.querySelector(".pre")
const nextbtn=document.querySelector(".next")
const images=document.querySelectorAll("img")

let currentImage=1

nextbtn.addEventListener('click',()=>{
    music.play()
    if(images.length>currentImage){
        currentImage++
        nextImage()
    }
})

prebtn.addEventListener('click',()=>{
    if(currentImage>1){
        currentImage--
        preimage()
    }
    })
    
    function nextImage(){
        if(images.length>=currentImage){
            imageContainer.style.transform=`translateX(-${(currentImage-1)*100}%)`
        }
        console.log("currenimage= "+currentImage);
        console.log("imgelenth="+images.length);
    }
    
    function preimage(){
        if(currentImage>0){
            imageContainer.style.transform=`translateX(-${(currentImage-1)*100}%)`
    }
}