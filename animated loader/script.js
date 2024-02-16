const span= document.querySelector("span")
let limit=65
let load=0
function loader(){
        setInterval(() => {
            if(load<limit){
                load++
            }
            span.textContent=`${load}%`
        },20);
}
loader()