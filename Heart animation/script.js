const body=document.querySelector("body")
body.addEventListener('mousemove',(e)=>{
    const posX=e.offsetX
    const posY=e.offsetY 
    const span=document.createElement("span")
    span.style.top=posY+"px"
    span.style.left=posX+"px"
    body.appendChild(span)
    const size=Math.random()*100
    span.style.width=size+"px"
    span.style.height=size+"px"
    setTimeout(() => {
        body.removeChild(span)
    }, 3000);
})