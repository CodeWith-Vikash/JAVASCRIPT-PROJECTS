const nav=document.querySelector("nav")
const aboutSection=document.querySelector("#about")
console.log(aboutSection.offsetTop);

window.addEventListener("scroll",()=>{
    if(window.scrollY>aboutSection.offsetTop-nav.offsetHeight){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active")
    }
})