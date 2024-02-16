let data=[
    {name:"chair",price:10000,image:"https://up.yimg.com/ib/th?id=OIP.qTV_IpdYtTbw50pZHiX5JAHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121"},
    {name:"sofa",price:15000,image:"https://up.yimg.com/ib/th?id=OIP.iQGMfB0y5tdi3_vKKXD8tgHaHa&pid=Api&rs=1&c=1&qlt=95&w=111&h=111"},
    {name:"bed",price:20000,image:"https://up.yimg.com/ib/th?id=OIP.fU49WXsWMBmmfCKadWLqLgHaG7&pid=Api&rs=1&c=1&qlt=95&w=123&h=115"},
    {name:"lamp",price:1000,image:"https://up.yimg.com/ib/th?id=OIP.jK2rd_1bcmIvtxxRhcuywQHaHa&pid=Api&rs=1&c=1&qlt=95&w=105&h=105"}
]

let container=document.querySelector(".products")
let button=document.querySelector("i")
let cart=document.querySelector(".cart")
button.addEventListener('click',function(){
    cart.classList.toggle("hide")
})

function showProducts(){
    container.innerHTML= data.map((item,index)=>{
        
        return `
        <div class="product" id="${index}">
        <img src=${item.image}>
        <h3>${item.name}</h3>
        <br>
        <div class="content">
        <span>${item.price}</span>
        <i class="fa-solid fa-circle-plus add" id="${index}"></i>
        </div>
    </div>
        `
    })
    let allproducts=document.querySelectorAll(".product")
    let addbtns=document.querySelectorAll(".add")
    let totalPrice=0
    addbtns.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            allproducts.forEach((item)=>{
                let name =item.querySelector('h3').textContent
                let price=Number(item.querySelector('span').textContent)
                let image=item.querySelector("img").src
                if(item.id==e.target.id){
                    let div=document.createElement('div')
                    div.style.display="flex"
                    div.style.justifyContent="space-between"
                    div.style.padding='1vh 5vw'
                    div.innerHTML=`
                    <img src="${image}">
                    <div class="cart-content">
                        <h3>${name}</h3>
                        <b style="color: orangered;">${price}</b>
                        </div>
                        `
                    cart.appendChild(div) 
                    totalPrice+=price
                    document.querySelector(".cart h3").textContent=`Total price :${totalPrice}$`
                }
            })
        })
    })
}
showProducts()

 

// console.log(totalPrice);