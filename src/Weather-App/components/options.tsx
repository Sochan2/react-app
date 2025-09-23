type Props = {
  data: {
    wind: number;
    humidity: number;
    pressure:number;
    cloud:number;
    sunrise:number;
    sunset:number;
    timezone:number;

  };
};

const Options = ({ data }: Props) => {
  const formatTime = (timestamp: number, timezone: number) => {
  return new Date((timestamp + timezone) * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC", 
  });
};
  return (
    <>
    <div className="options-grid">
      <div className="option-small-grid">
        <div className="left-card">
           <p>Humidity</p>
        <img src="/weather/humidity.png" alt="Humidity icon" />
        <p className="data-number">{data.humidity}%</p>
        </div>


         <div className="left-card">
           <p>Wind</p>
        <img src="/weather/wind-pressure.png" alt="Pressure icon" />
       <p className="data-number">{data.wind} m/s</p>
        </div>


      <div className="left-card">
        <p>Pressure</p>
        <img src="/weather/wind-speed.png" alt="Pressure icon" />
        <p className="data-number">{data.pressure} hPa</p>
      </div>
      

      <div className="left-card">
        <p>Cloud</p>
        <img src="/weather/cloud.png" alt="Cloud icon" />
        <p className="data-number">{data.cloud}%</p>
      </div>
  </div>

<div className="right-small-grid">
   <div className="right-card">
           <p>sun rise</p>
        <img src="/weather/sun-rise.png" alt="Sun rise icon" />
       <p className="data-number">{formatTime(data.sunrise, data.timezone)}</p>
        </div>

         <div className="right-card">
           <p>sun set</p>
        <img src="/weather/sun-set.png" alt="Sun set icon" />
         <p className="data-number">{formatTime(data.sunset, data.timezone)}</p>
        </div>
</div>
  
  </div>
     
   
    </>
    
  );
};

export default Options;