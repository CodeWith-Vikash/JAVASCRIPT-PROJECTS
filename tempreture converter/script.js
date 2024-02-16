const c=document.getElementById("celcius")
const f=document.getElementById("farhenhiet")
const k=document.getElementById("kelvin")
const input=document.querySelectorAll("input")
let celcius
let farenhite
let kelvin
Array.from(input).forEach((item)=>{
    item.addEventListener("input",()=>{
        if(item.id=="celcius"){
            let cel=item.value
            farenhite=(cel*9/5)+32
            kelvin=cel+273.15
            f.value=farenhite
            k.value=kelvin
        }else if(item.id=="farhenhiet"){
            let far=item.value
            celcius=(far-32)*5/9
            kelvin=(far - 32) / 1.8 + 273.15
            c.value=celcius
            k.value=kelvin
        }else{
            let kel=item.value
            celcius=kel-273.15
            farenhite= 1.8* (kel-273) + 32
            c.value=celcius
            f.value=farenhite
        }
    })
})
// boooooooooooooooooooo
