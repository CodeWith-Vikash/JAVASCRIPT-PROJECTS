const apikey="f59ee11aa6f84aa56b442ae4fcbbb4a3"
const inputValue=document.querySelector("input")
const parent=document.querySelector(".box")
const button=document.querySelector("button")
button.addEventListener("click",function(e){
    e.preventDefault()
    const cityname=inputValue.value
    getWeatherData(cityname)
})
async function getWeatherData(cityname){
    try {
        const apiResponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`)
        if(!apiResponse.ok){
            throw new Error("Network response was not ok");
        }
            const data=await apiResponse.json()
            console.log(data);
            const temperature=Math.floor(data.main.temp)
            const humidity=data.main.humidity
            const feels_like=Math.floor(data.main.feels_like)
            const weather=data.weather[0].description
            const windSpeed=data.wind.speed
            const icon = data.weather[0].icon
        // filling data to placeholders
        parent.querySelector(".tempreture").textContent=`${temperature}°C`
        parent.querySelector(".humidity").textContent=`Humidity : ${humidity}%`
        parent.querySelector(".fellslike").textContent=`Feels like : ${feels_like}°C`
        parent.querySelector(".weather").textContent=`${weather}`
        parent.querySelector(".windspeed").textContent=`Wind speed : ${windSpeed}m/s`
    } catch (error) {
        parent.querySelector(".tempreture").textContent=" "
        parent.querySelector(".humidity").textContent=" "
        parent.querySelector(".fellslike").textContent=" "
        parent.querySelector(".weather").textContent="An error occured please try again"
        parent.querySelector(".windspeed").textContent=" "
        parent.querySelector(
            ".icon"
          ).innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
    }
}