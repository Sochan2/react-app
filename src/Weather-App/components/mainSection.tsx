import { useState,useEffect } from "react";

const MainSection = ()=>{
    const [searchCity, setSearchCity]= useState<string>("");
    const [temperature, setTemperature]= useState<number>(0);
    const[weatherId,setWeatherId]= useState<number>(800);
    
    const getWeatherIcon =(id:number):string=>{
    if(id===800) return "/weather/icon/clear.png";
    if(id>=200&&id<600) return "weather/icon/rain.png";
    if(id>=600&&id<700) return "weather/icon/snow.png";
    if(id>800) return "weather/icon/cloud.png";


     return "/weather/icon/cloud.png";
    }



    useEffect(()=>{
       const fetchWeatherData = async() =>{
      try{
        const getResponse = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.6895&lon=139.692&appid=");
        const data = await getResponse.json();
        console.log(data);
        setSearchCity(data.name);
        setTemperature(Math.round(data.main.temp-273.15));
        setWeatherId(data.weather[0].id);
      }

      catch(error){
        console.error(error);
      }
      
    }
      fetchWeatherData();
    },[]);



   



  

    //if successful fetch, set searchCity and temperature

    return(
      <div>
        <div className= "main-grid">
          <section className= "place-temperature">
          <h2 className="place-text">{searchCity}</h2>
          <h1 className="temperature-text">{temperature}°C</h1>
        </section>
        <img src={getWeatherIcon(weatherId)} alt="Weather Icon" />
      </div>
    </div>

    )
}

export default MainSection;