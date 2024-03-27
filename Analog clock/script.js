setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = (htime/12)*360+(mtime/60)*30
    mrotation = (mtime/60)*360+(stime/60)*6
    srotation =(stime/60)*360

    document.querySelector(".hour").style.transform = `rotate(${hrotation}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${mrotation}deg)`;
    document.querySelector(".second").style.transform = `rotate(${srotation}deg)`;
}, 1000);