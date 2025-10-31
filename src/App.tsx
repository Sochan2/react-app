import Header from './Weather-App/components/header';
import WeatherForecast from './Weather-App/components/weather-forecast';
import { useWeather } from './Weather-App/hooks/useWeather';
import Options from './Weather-App/components/options';
import {useState} from 'react';
import SimpleCounterApp from './Simple-counter/App';


function App() {
  const[city, setCity] = useState("Tokyo");
  const weatherData = useWeather(city);

  if (!weatherData) return <p>Loading...</p>;

  return (
    <div className="App">
      <SimpleCounterApp />
    </div>
  );
}

export default App;


//input city name
//city state 
//useWeather reload
//fetch new weather data

/*
  <Header data={weatherData} setCity={setCity} />
      <WeatherForecast  />
      <Options data={weatherData} />
      */