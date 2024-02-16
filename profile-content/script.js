const data = document.querySelectorAll("h1")
let Totalyear=10
let Totalwebsite=250
let Totalapp=100

let year=0
let website=0
let app=0

data.forEach((count)=>{
    if(count.id=="years"){
        setInterval(() => {
            if(year<Totalyear){
                year++
                count.textContent=year
            }
        },100);

    }else if(count.id=="Websites"){
        setInterval(() => {
            if(website<Totalwebsite){
                website++
                count.textContent=website
            }
        }, 5);
    }else{
        setInterval(() => {
            if(app<Totalapp){
                app++
                count.textContent=app
            }
        }, 5);
    }
})