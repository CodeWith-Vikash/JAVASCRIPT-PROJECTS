const button=document.querySelector("button")


button.addEventListener("mouseover",(e)=>{
    const x=(e.pageX-button.offsetLeft);
    const y=(e.pageY-button.offsetTop);

    button.style.setProperty("--xposition",x+"px")
    button.style.setProperty("--yposition",y+"px")
})