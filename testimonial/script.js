const testimonial=[
    {
        author:{
            name: "jhon doe",
            image : "https://tse1.mm.bing.net/th?id=OIP.hLTThhxHPeGqFQVjpD1-hwHaE8&pid=Api&rs=1&c=1&qlt=95&w=182&h=121"
        },
        date : "1 jan 2006",
        about : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat, quaerat possimus voluptates assumenda consequuntur at similique id rerum nulla vitae explicabo perspiciatis, est molestias aliquid harum, impedit architecto? Fugiat."
        
    },
    {
        author:{
            name: "linda joe",
            image : "https://tse1.mm.bing.net/th?id=OIP.hEj_DJ2TeEyxMn6_cdnnYwHaE8&pid=Api&rs=1&c=1&qlt=95&w=182&h=121"
        },
        date : "10 jan",
        about : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat, quaerat possimus voluptates assumenda consequuntur at similique id rerum nulla vitae explicabo perspiciatis, est molestias aliquid harum, impedit architecto? Fugiat."
        
    },
    {
        author:{
            name: "Robert cupper",
            image : "https://tse1.mm.bing.net/th?id=OIP.Wkyqo4Y_JdfpY0Bgq8kWPwHaJR&pid=Api&rs=1&c=1&qlt=95&w=83&h=104"
        },
        date : "10 March",
        about : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat, quaerat possimus voluptates assumenda consequuntur at similique id rerum nulla vitae explicabo perspiciatis, est molestias aliquid harum, impedit architecto? Fugiat."
        
    },
    {
        author:{
            name: "chloe carter",
            image : "https://tse1.mm.bing.net/th?id=OIP.HL11Z-TAaxAoRT1WKS4ZVAHaIr&pid=Api&rs=1&c=1&qlt=95&w=96&h=112"
        },
        date : "31 jan",
        about : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat, quaerat possimus voluptates assumenda consequuntur at similique id rerum nulla vitae explicabo perspiciatis, est molestias aliquid harum, impedit architecto? Fugiat."
        
    },
    {
        author:{
            name: "chris junior",
            image : "https://sp.yimg.com/ib/th?id=OIP.rW080XkIgMlCHDfk5PVMbwAAAA&pid=Api&w=148&h=148&c=7&rs=1"
        },
        date : "1 jan 2006",
        about : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat, quaerat possimus voluptates assumenda consequuntur at similique id rerum nulla vitae explicabo perspiciatis, est molestias aliquid harum, impedit architecto? Fugiat."
        
    }
]
let currentTestimonial=Number(localStorage.getItem("testnum"))
const container = document.querySelector(".container")
console.log(container);

function createdata(param){
    return `
           <div class="box">
               <img src="${param.author.image}">
               <h2>${param.author.name}</h2>
               <p>${param.about}</p>
               <strong>Written on ${testimonial[currentTestimonial].date}</strong>
           </div>
           <nav>
              <button onclick="pretestimonial()">previous</button>
              <button onclick="nexttestimonial()">Next</button>
           </nav>
    `
}
function updatedata(){
    container.innerHTML=createdata(testimonial[currentTestimonial])
}
updatedata()

function pretestimonial(){
    if(currentTestimonial>0){
        currentTestimonial--
        updatedata()
        updateLocalstorage()
    }
}
function nexttestimonial(){
    if(currentTestimonial<testimonial.length-1){
        currentTestimonial++
        updatedata()
        updateLocalstorage()
    }
}

function updateLocalstorage(){
    localStorage.setItem("testnum",String(currentTestimonial))
}
updateLocalstorage()