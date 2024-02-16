let allSongs=[
    {name:"Bones by imagine dragons",duration:"3.14",image:"https://tse1.mm.bing.net/th?id=OIP.zakfo3YcborKpEZQvsqFTAHaEK&pid=Api&P=0&h=220",id:"1",music:"Imagine Dragons - Bones (Official Music Video) (320 kbps).mp3"},
    {name:"Beliver by imagine dragons",duration:"5.43",image:"https://tse3.mm.bing.net/th?id=OIP.E4CLoOYddY-l9X4ss3Ui_gHaEK&pid=Api&P=0&h=220",id:"2",music:"Imagine Dragons - Believer (Official Music Video) (320 kbps).mp3"},
    {name:"Enemy by imagine dragons",duration:"4.22",image:"https://tse4.mm.bing.net/th?id=OIP.EhAMjl5y7r0tCAMrJQn8iwHaEK&pid=Api&P=0&h=220",id:"3",music:"Imagine Dragons x J.I.D - Enemy (from the series Arcane League of Legends) (320 kbps).mp3"},
    {name:"Changes by xxxtentasion",duration:"2.14",image:"https://tse3.mm.bing.net/th?id=OIP.XPFDvwV0L7qTrm323Vu_JwHaEK&pid=Api&P=0&h=220",id:"4",music:"XXXTENTACION - changes (320 kbps).mp3"}
]

let songContainer=document.querySelector(".songs")
function showSongs(){
    songContainer.innerHTML=allSongs.map((song)=>{
        return `
        <div class="song bg-black flex justify-between items-center py-2 px-4 text-[2vmax] active" id=${song.id}>
        <div class="flex gap-2 items-center">
        <img src="${song.image}" class="w-12 rounded-lg h-10">
        <b>${song.name}</b>
        </div>
        <audio controls style="display:none;">
        <source src="${song.music}">
       </audio>
        </div>
        `
    })
    let songs=document.querySelectorAll(".song")
    let poster=document.querySelector(".first")
    let mainsong=document.querySelector("#audio")
    mainsong.parentElement.style.display="none"

    function removeActive(){
        songs.forEach((item)=> item.classList.remove('active'))
        songs.forEach((item)=> item.querySelector('audio').pause())
    }

    songs.forEach((item,index)=>{
        item.classList.remove('active')
        item.querySelector("audio").pause()
        item.addEventListener('click',(e)=>{
            removeActive()
            e.currentTarget.classList.add('active')
            mainsong.src=e.currentTarget.querySelector("audio source").src
            mainsong.parentElement.style.display="block"
            mainsong.parentElement.load()
            mainsong.parentElement.play()
            console.log(mainsong);
            allSongs.forEach((elem)=>{
                 if(elem.id==e.currentTarget.id){
                    poster.style.backgroundImage=`url(${elem.image})`
                 }
            })
        })
    })
}
showSongs()