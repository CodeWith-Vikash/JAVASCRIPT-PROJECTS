const instruments=document.querySelectorAll(".item")
instruments.forEach((item)=>{
    const audio=document.createElement("audio")
    audio.src=`${item.textContent}.mp3`
    item.appendChild(audio)
    item.addEventListener("click",()=>{
        audio.play()
        item.style.transform="scale(1.1)"
        setTimeout(() => {
            item.style.transform="scale(1)"
        }, 100);
    })
    window.addEventListener('keyup',(e)=>{
        if(item.textContent.slice(0,1)==e.key){
            audio.play()
            item.style.transform="scale(1.1)"
            setTimeout(() => {
                item.style.transform="scale(1)"
            }, 100);
        }
    })
})