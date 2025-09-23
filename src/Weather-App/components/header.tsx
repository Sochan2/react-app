import '../App.css';
import MainSection from './mainSection';
import {useState} from 'react';


type Props = {
  data: {
    city: string;
    temperature: number;
    weatherId: number;
    wind: number;
    humidity: number;
  };
  setCity: React.Dispatch<React.SetStateAction<string>>;
};



const Header = ({ data, setCity}: Props) => {

   const WeatherBackground= (id: number): string => {
    if (id === 800) return "/weather/background-clear.png";
    if (id >= 200 && id < 600) return "weather/background-rain.png";
    if (id >= 600 && id < 700) return "weather/background-snow.png";
    if (id > 800) return "weather/background-cloud.png";
    return "/weather/background-cloud.png";
  };


  const [inputCity, setInputCity] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCity(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity(inputCity);
  }


  return (
    <div className="container">
      <div
        style={{ backgroundImage: `url(${WeatherBackground(data.weatherId)})` }}
        className="header"
      >
        <div className="header-flex">
          <form className="search-bar" onSubmit={handleSubmit}>
            <input type="search" placeholder="enter country" value={inputCity}  onChange={handleChange} />
            <button className="search-button">go</button>
          </form>
        </div>

        <MainSection data={data} />
      </div>
    </div>
  );
};

export default Header;