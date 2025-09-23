type Props = {
  data: {
    city: string;
    temperature: number;
    weatherId: number;
  };
};

const MainSection = ({ data }: Props) => {
  const getWeatherIcon = (id: number): string => {
    if (id === 800) return "/weather/icon/clear.png";
    if (id >= 200 && id < 600) return "weather/icon/rain.png";
    if (id >= 600 && id < 700) return "weather/icon/snow.png";
    if (id > 800) return "weather/icon/cloud.png";
    return "/weather/icon/cloud.png";
  };

  return (
    <div className="main-grid">
      <section className="place-temperature">
        <h2 className="place-text">{data.city}</h2>
        <h1 className="temperature-text">{data.temperature}°C</h1>
      </section>
      <img className="weather-icon"src={getWeatherIcon(data.weatherId)} alt="Weather Icon" />
    </div>
  );
};

export default MainSection;
