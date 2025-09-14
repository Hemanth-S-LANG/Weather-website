const apiKey = "5fb339e25f0ba049846cec0e9eeb5ce5";

// Elements
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("button");

// Current weather elements
const cityNameEl = document.querySelector("#cityname h3");
const rainEl = document.getElementById("rain");
let tempEl = document.querySelector("#temperature h1");
const feelsLikeEl = document.getElementById("same");
const weatherIconEl = document.querySelector("#temperature img");
const wind=document.querySelectorAll(".win")

// Forecast elements
const forecastBoxes = document.querySelectorAll("#firstday");
const body=document.body


const weatherData = {
  10: { wind: "5 km/h",  humidity: "92%", visibility: "4 km",   pressure: "1016 hPa" },
  11: { wind: "5 km/h",  humidity: "90%", visibility: "5 km",   pressure: "1015 hPa" },
  12: { wind: "6 km/h",  humidity: "88%", visibility: "5.5 km", pressure: "1015 hPa" },
  13: { wind: "6 km/h",  humidity: "86%", visibility: "6 km",   pressure: "1014 hPa" },
  14: { wind: "7 km/h",  humidity: "83%", visibility: "6.5 km", pressure: "1013 hPa" },
  15: { wind: "7 km/h",  humidity: "80%", visibility: "7 km",   pressure: "1011 hPa" },
  16: { wind: "8 km/h",  humidity: "75%", visibility: "7.5 km", pressure: "1010 hPa" },
  17: { wind: "8 km/h",  humidity: "72%", visibility: "8 km",   pressure: "1009 hPa" },
  18: { wind: "8 km/h",  humidity: "70%", visibility: "8.5 km", pressure: "1008 hPa" },
  19: { wind: "9 km/h",  humidity: "67%", visibility: "9 km",   pressure: "1007 hPa" },
  20: { wind: "9 km/h",  humidity: "65%", visibility: "9.5 km", pressure: "1006 hPa" },
  21: { wind: "10 km/h", humidity: "62%", visibility: "9.8 km", pressure: "1006 hPa" },
  22: { wind: "10 km/h", humidity: "60%", visibility: "10 km",  pressure: "1005 hPa" },
  23: { wind: "11 km/h", humidity: "57%", visibility: "10 km",  pressure: "1005 hPa" },
  24: { wind: "11 km/h", humidity: "55%", visibility: "10 km",  pressure: "1005 hPa" },
  25: { wind: "12 km/h", humidity: "52%", visibility: "10 km",  pressure: "1004 hPa" },
  26: { wind: "12 km/h", humidity: "50%", visibility: "10 km",  pressure: "1004 hPa" },
  27: { wind: "13 km/h", humidity: "48%", visibility: "10 km",  pressure: "1004 hPa" },
  28: { wind: "14 km/h", humidity: "45%", visibility: "10 km",  pressure: "1004 hPa" },
  29: { wind: "14 km/h", humidity: "42%", visibility: "10 km",  pressure: "1004 hPa" },
  30: { wind: "15 km/h", humidity: "40%", visibility: "10 km",  pressure: "1004 hPa" },
  30: { wind: "15 km/h", humidity: "40%", visibility: "10 km", pressure: "1004 hPa" },
  31: { wind: "16 km/h", humidity: "38%", visibility: "10 km", pressure: "1003 hPa" },
  32: { wind: "16 km/h", humidity: "36%", visibility: "10 km", pressure: "1003 hPa" },
  33: { wind: "17 km/h", humidity: "34%", visibility: "10 km", pressure: "1002 hPa" },
  34: { wind: "17 km/h", humidity: "32%", visibility: "10 km", pressure: "1002 hPa" },
  35: { wind: "18 km/h", humidity: "30%", visibility: "10 km", pressure: "1001 hPa" },
  36: { wind: "18 km/h", humidity: "28%", visibility: "10 km", pressure: "1001 hPa" },
  37: { wind: "19 km/h", humidity: "26%", visibility: "10 km", pressure: "1000 hPa" },
  38: { wind: "19 km/h", humidity: "24%", visibility: "10 km", pressure: "1000 hPa" },
  39: { wind: "20 km/h", humidity: "22%", visibility: "10 km", pressure: "999 hPa" },
  40: { wind: "20 km/h", humidity: "20%", visibility: "10 km", pressure: "999 hPa" }

};

// 🔹 Search button event
searchBtn.addEventListener("click", async() => {
  const city = searchInput.value.trim();
  let tempEI=document.querySelector("#temperature h1");
const wind=document.querySelectorAll(".win")
  if (city) {

   await getWeather(city);
   await getForecast(city);

  }
  if(parseInt(tempEI.textContent)){
    // console.log(tempEI.textContent)
    // console.log(parseInt(tempEI.textContent))
    wind[0].innerHTML=weatherData[parseInt(tempEI.textContent)].wind
    wind[1].innerHTML=weatherData[parseInt(tempEI.textContent)].humidity
    wind[2].innerHTML=weatherData[parseInt(tempEI.textContent)].visibility
    wind[3].innerHTML=weatherData[parseInt(tempEI.textContent)].pressure
     }


     if(rainEl.textContent.includes("cloud")){
      body.style.filter="brightness(75%)"
     }
     else if(rainEl.textContent.includes("rain")){
      body.style.filter="brightness(65%)"
     }
     else if(rainEl.textContent.includes("few clouds")){
      body.style.filter="brightness(85%)"
     }
     else if(rainEl.textContent.includes("clear")){
      body.style.filter="brightness(135%)"
     }
     else if(rainEl.textContent.includes("haze")){
      body.style.filter="brightness(95%)"
     }
     else if(rainEl.textContent.includes("broken clouds")){
      body.style.filter="brightness(95%)"
     }



}
);

// 🔹 Fetch current weather
async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    // Update current weather UI
    cityNameEl.textContent = `${data.name}, ${data.sys.country}`;
    rainEl.textContent = data.weather[0].description;
    // console.log(data)
    // console.log(data.weather[0])
    tempEl.innerHTML = `${Math.round(data.main.temp)}&deg;`;
  //  console.log( typeof(tempEl.innerHTML))
    feelsLikeEl.innerHTML = `${Math.round(data.main.feels_like)}&deg;`;

    const icon = data.weather[0].icon;
    weatherIconEl.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  } catch (error) {
    alert(error.message);
  }
}


// 🔹 Fetch 5-day forecast
async function getForecast(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Forecast not available");
    const data = await res.json();
    console.log(data.list)

    const dailyForecast = data.list.filter(item =>
      item.dt_txt.includes("12:00:00")
    );
  //  await console.log(dailyForecast)
    

    dailyForecast.forEach((day, index) => {
      if (index < forecastBoxes.length) {
        const box = forecastBoxes[index];// helps to select each forecastboxes according to the index
        // console.log(day)
        // console.log(box)

        const date = new Date(day.dt_txt);
        // console.log(day.dt_txt)
        // console.log(date)
        const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
        // console.log(dayName)
        box.querySelector(".pa").textContent = dayName;

        box.querySelector(".a .pa").textContent = date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric"
        });

        box.querySelector("#p").textContent = day.weather[0].main;

        const icon = day.weather[0].icon;
        box.querySelector("img").src = `https://openweathermap.org/img/wn/${icon}.png`;

        const temps = box.querySelectorAll("#sec p");
        temps[0].innerHTML=(day.main.humidity)+"%"
        temps[1].innerHTML = `${Math.round(day.main.temp_min)}&deg;`;
        temps[2].innerHTML = `${Math.round(day.main.temp_max)}&deg;`;
        console.log(day)
      }
    });

  } catch (error) {
    alert(error.message);
  }
}
