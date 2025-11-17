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
const sunrise=document.querySelectorAll(".w")
const locationElement=document.querySelector("#i")
const time=document.querySelector("#time")
const div=document.querySelector(".d")
var days=document.querySelector(".x")
const but=document.querySelector(".y")
const back=document.querySelectorAll(".bodys")
const loader=document.querySelector("#loader")
const loaders=document.querySelector("#loaders")

// Forecast elements
const forecastBoxes = document.querySelectorAll("#firstday");
div.classList.add("new")



// input from user(day or night)
but.addEventListener("click",async()=>{
  if(days.value=="day" || days.value=="Day"){
    console.log(days.value)
    div.classList.remove("new");
    div.classList.remove("d")
    days.style.display="none"
    but.style.display="none"

    for (let i = 0; i < back.length; i++) {
      back[i].classList.remove("bodys")
      }

  }
   if(days.value=="night" || days.value=="Night"){
    console.log(days.value)
    div.classList.remove("new");
    div.classList.remove("d")
    days.style.display="none"
    but.style.display="none"}

    for (let i = 0; i < back.length; i++) {
      back[i].classList.remove("bodys")
      }
    
    }
)

const weatherExtraData = {
  "0-10": {
    airQuality: "Good",
    uvIndex: 1,
    uvLevel: "Low"
  },
  "11-20": {
    airQuality: "Moderate",
    uvIndex: 3,
    uvLevel: "Moderate"
  },
  "21-30": {
    airQuality: "Unhealthy",
    uvIndex: 6,
    uvLevel: "High"
  },
  "31-40": {
    airQuality: "very Unhealthy",
    uvIndex: 9,
    uvLevel: "Very High"
  }
}




// 🔹 Search button event
searchBtn.addEventListener("click", async() => {
  loader.classList.add("loader")
  loaders.classList.add("loaders")
  for (let i = 0; i < back.length; i++) {
      back[i].classList.add("bodys")
      }
  const city = searchInput.value.trim();
  let tempEI=document.querySelector("#temperature h1");
const wind=document.querySelectorAll(".win")
const rainEl = document.querySelector("#rain");
const body=document.querySelector(".body")


  if (city) {

   await getWeather(city);
   await getForecast(city);
    uv()
   if(days.value=="day" || days.value=="Day"){
    await background()
  }
   if(days.value=="night" || days.value=="Night"){
    await backgrounds()
  }
  }     
     
})
 

  function uv(){ 
let tempEI = document.querySelector("#temperature h1");

      const temp = parseInt(tempEI.textContent);
 // Convert text to number
console.log(temp)
if (temp > 0 && temp <= 10) {
  sunrise[2].innerHTML = weatherExtraData["0-10"].airQuality;
} else if (temp > 10 && temp <= 20) {
  sunrise[2].innerHTML = weatherExtraData["11-20"].airQuality;
} else if (temp > 20 && temp <= 30) {
  sunrise[2].innerHTML = weatherExtraData["21-30"].airQuality;
} else if (temp > 30 && temp <= 40) {
  sunrise[2].innerHTML = weatherExtraData["31-40"].airQuality;
}
if(days.value=="night" || days.value=="Night"){
sunrise[4].innerHTML="0"
 }

 }


    

// Keyboard event

searchInput.addEventListener("keydown", async(e) => {
  // loader.classList.add("loader")
  // loaders.classList.add("loaders")
  // for (let i = 0; i < back.length; i++) {
  //     back[i].classList.add("bodys")
  //     }
  const city = searchInput.value.trim();
  let tempEI=document.querySelector("#temperature h1");
const rainEl = document.querySelector("#rain");
const body=document.querySelector(".body")



  if(e.key==="Enter"){
    if (city) {

   await getWeather(city);
   await getForecast(city);
    uv();
  if(days.value=="day" || days.value=="Day"){
    await background()
  }
   if(days.value=="night" || days.value=="Night"){
    await backgrounds()
  }

  }
  
  }
 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();
    // console.log(data)
    dt=new Date(data.dt*1000)
    const d="11:34:42 am"
    console.log(d)


const weather = rainEl.textContent.toLowerCase();

 function uv(){ 
let tempEI = document.querySelector("#temperature h1");

const temp = parseInt(tempEI.textContent);
 // Convert text to number
console.log(temp)
if (temp > 0 && temp <= 10) {
  sunrise[2].innerHTML = weatherExtraData["0-10"].airQuality;
} else if (temp > 10 && temp <= 20) {
  sunrise[2].innerHTML = weatherExtraData["11-20"].airQuality;
} else if (temp > 20 && temp <= 30) {
  sunrise[2].innerHTML = weatherExtraData["21-30"].airQuality;
} else if (temp > 30 && temp <= 40) {
  sunrise[2].innerHTML = weatherExtraData["31-40"].airQuality;
}
if(days.value=="night" || days.value=="Night"){
sunrise[4].innerHTML="0"
 }}
})




async function background(){
const body=document.querySelector(".body")
const weather = rainEl.textContent.toLowerCase();

  // remove all weather classes
  body.classList.remove("rain", "drizzle", "mist", "haze", "overcast", "clear","scattered","broken","few","overcast1","rain1","clear1","haze1","drizzle1","scattered1","broken1","mist1","few1");

  if (weather.includes("overcast clouds")) {
    body.classList.add("overcast");
  } else if (weather.includes("rain")) {
    body.classList.add("rain");
  } else if (weather.includes("clear")) {
    body.classList.add("clear");
  } else if (weather.includes("haze")) {
    body.classList.add("haze");
  } else if (weather.includes("drizzle")) {
    body.classList.add("drizzle");
  } else if (weather.includes("mist")) {
    body.classList.add("mist");
  }
  else if (weather.includes("scattered clouds")) {
    body.classList.add("scattered");
  }
  else if (weather.includes("broken clouds")) {
    body.classList.add("broken");
  }
  else if (weather.includes("few clouds")) {
    body.classList.add("few");
  }
    }



  async function backgrounds(){
  const body=document.querySelector(".body")
const weather = rainEl.textContent.toLowerCase();

  body.classList.remove("rain", "drizzle", "mist", "haze", "overcast", "clear","scattered","broken","few","overcast1","rain1","clear1","haze1","drizzle1","scattered1","broken1","mist1","few1");

  
    if(weather.includes("overcast clouds")){
    body.classList.add("overcast1")}
    
    else if (weather.includes("rain")) {
    body.classList.add("rain1");
    
  } 
  else if (weather.includes("clear")) {
    body.classList.add("clear1")
    
  } else if (weather.includes("haze")) {
    body.classList.add("haze1");
    
  } 
  else if (weather.includes("drizzle")) { 
    body.classList.add("drizzle1"); 
  } 
  else if (weather.includes("mist")) {
    
    body.classList.add("mist1");}

  else if (weather.includes("scattered clouds")) {
    body.classList.add("scattered1");}
    
  else if (weather.includes("broken clouds")) {
    
    body.classList.add("broken1");}

  else if (weather.includes("few clouds")) {
    body.classList.add("few1");} 
  }



// location button

locationElement.addEventListener("click", async () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    alert("Geolocation is not supported by your browser.");
  }
});

async function successCallback(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to get weather from coordinates");
    const data = await res.json();
    console.log(data);
    await getWeather(data.name)
    await getForecast(data.name)
    if(days.value=="day" || days.value=="Day"){
    await background()
  }
   if(days.value=="night" || days.value=="Night"){
    await backgrounds()
  }


    // Display weather data in UI here (optional)
  } catch (error) {
    alert("Error getting weather data from your location: " + error.message);
  }
}

function errorCallback(error) {
  alert("Unable to retrieve your location. Error: " + error.message);
}

// 🔹 Fetch current weather
async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();
    console.log(data)
    
    

    // Update current weather UI
   if( cityNameEl.textContent = `${data.name}, ${data.sys.country}`){
    loader.classList.remove("loader")
    loaders.classList.remove("loaders")
    loaders.style.display="none"
    for (let i = 0; i < back.length; i++) {
      back[i].classList.remove("bodys")
      }
   };
    rainEl.textContent = data.weather[0].description;
    
    tempEl.innerHTML = `${Math.round(data.main.temp)}&deg;`;
    feelsLikeEl.innerHTML = `${Math.round(data.main.feels_like)}&deg;`;

    sunrise[0].innerHTML=new Date(data.sys.sunrise*1000).toLocaleTimeString()

    sunrise[1].innerHTML=new Date(data.sys.sunset*1000).toLocaleTimeString()

    sunrise[3].innerHTML=data.main.sea_level+"hPa"
    wind[0].innerHTML=data.wind.speed+"m/s"
    wind[1].innerHTML=data.main.humidity+"%"
    wind[2].innerHTML=(data.visibility)/1000+"km"
    // console.log(data.visibility)
    wind[3].innerHTML=data.main.pressure+"hPa"
    wind[4].innerHTML=data.main.grnd_level+"hPa"
    const times=(new Date(data.dt*1000))
    time.innerHTML=times.toLocaleTimeString()


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

    const dailyForecast = data.list.filter(item=>
      item.dt_txt.includes("12:00:00")
    )
  
    

    dailyForecast.forEach((day, index) => {
      if (index < forecastBoxes.length) {
        const box = forecastBoxes[index];// helps to select each forecastboxes according to the index

        //  console.log(day) //here day is a value inside a array called dailyForecast and each day is an object(dictionaries in python)
       
        // console.log(dailyForecast)

        // console.log(box)

        const date = new Date(day.dt_txt);
        // console.log(date)
        
        const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
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
      }
    });


  } catch (error) {
    alert(error.message);
  }
}
