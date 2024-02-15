const weatherForm = document.querySelector('.weatherForm');
const cityInput= document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "6558888b57ec3de7acd814d0a412b3e4";
//https://api.openweathermap.org/data/2.5/weather?q={city}&appid={23a20e3f999047ada269c1c8f9188413}
weatherForm.addEventListener("submit", async event=>{
    event.preventDefault();
    const city = cityInput.value;
    if(city){
        try {
           const weatherData= await getWeatherData(city);
           displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error);
        }
    }else{
        displayError("Enter a city");
    }
})

getWeatherData = async city=>{
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    if(!response.ok){
        throw new Error("Invalid city name");
    }
    return  await response.json();
}

displayWeatherInfo = data=>{
    const{name:city, main: {temp, humidity}, weather:[{description, id}]}=data;
    
    card.textContent="";
    card.style.display="flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descriptionDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent=city;
    tempDisplay.textContent=`${(temp -273.15).toFixed(2)} °C`;
    humidityDisplay.textContent= `humidity: ${humidity}%`;
    descriptionDisplay.textContent= description;
    weatherEmoji.textContent= getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descriptionDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji")

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descriptionDisplay);
    card.appendChild(weatherEmoji);
}

getWeatherEmoji = weatherId=>{
    switch(true){
        case(weatherId>=200 && weatherId<300):
            return "⛈";
        case(weatherId>=300 && weatherId<400):
            return "🌧";
        case(weatherId>=500 && weatherId<600):
             return "☔";
        case(weatherId>=600 && weatherId<700):
             return "❄❄❄";
        case(weatherId>=700 && weatherId<800):
            return "🌫";
        case(weatherId ===800):
             return "☀";
        case(weatherId>=801 && weatherId<810):
            return "🌫";
        default:
            return "❓";
    }
}

displayError = message =>{
    const errorDisplay= document.createElement("p");
    errorDisplay.textContent=message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent="";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
