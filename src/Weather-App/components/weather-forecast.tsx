import{useState,useEffect} from 'react';


interface Forecast {
  id: number;
  temp: number;
  time: string;
  day: string;
}
const WeatherForecast= ()=>{
  const[forecasts, setForecasts] = useState<Forecast[]>([]);

   const getWeatherIcon =(id:number):string=>{
    if(id===800) return "/weather/icon/clear.png";
    if(id>=200&&id<600) return "weather/icon/rain.png";
    if(id>=600&&id<700) return "weather/icon/snow.png";
    if(id>800) return "weather/icon/cloud.png";
     return "/weather/icon/cloud.png";
    }




  const fetchWeatherForecast = async()=>{
    try{
      const getResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=35.6895&lon=139.692&appid=e19abe58031dcf8386e8f1f21f661e8f");
      const data = await getResponse.json();
      console.log(data);

      const selected = data.list.filter((_:any,index:number)=> index%2 ===0)
      .slice(0,5);
      console.log(selected);

      const formatted = selected.map((item:any) =>{
          const date= new Date(item.dt_txt);
          return{
            id:item.weather[0].id,
            temp: Math.round(item.main.temp - 273.15),
              time: date.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }),
              day: date.toLocaleDateString("en-US", { weekday: "short" }),

          };
      });
      setForecasts(formatted);
    }

    catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeatherForecast();
  }, []);

  return(
    <>
    <div className="container-forecast">
      {forecasts.map((forecast,index)=>(
       
        <div className="forecast-card"key={index}>
           <img className="forecast-weather-icon"src={getWeatherIcon(forecast.id)} alt="Weather Icon" />
           <div className="day-time-container">
           <div className="day-time">
            <p>{forecast.day}</p>
            </div>
              <div className="day-time">
           <p>{forecast.time}</p>
           </div>
           </div>
          
        
           <p>{forecast.temp}°C</p>
        </div>
        
      ))}
    </div>
    <div className="horizontal-line"></div>
    </>
  );
};
export default WeatherForecast;
