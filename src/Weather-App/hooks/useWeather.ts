import { useState, useEffect } from "react";

interface WeatherData {
  city: string;
  temperature: number;
  weatherId: number;
  wind: number;
  humidity: number;
  pressure:number;
  cloud:number;
  sunrise: number; 
  sunset:number;
  timezone:number;
}

export const useWeather = (city:string) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const getResponse = await fetch(
        ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


        );
        const json = await getResponse.json();
        setData({
          city: json.name,
          temperature: Math.round(json.main.temp - 273.15),
          weatherId: json.weather[0].id,
          wind: json.wind.speed,
          humidity: json.main.humidity,
          pressure: json.main.pressure, 
          cloud:json.clouds.all,
          sunrise: json.sys.sunrise,
          sunset:json.sys.sunset,
          timezone: json.timezone,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [city]);

  return data;
};