import axios from "axios";
import { useState } from "react";

export default function Weather(props) {
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  let imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  if (props.city) {
    const apiKey = "f81614abe2395d5dfecd45b9298041de";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return (
      <div className="Weather">
        <ul>
          <li>Temperature: {Math.round(temperature)}°</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} km/h</li>
          <li>
            <img src={imgUrl} alt="" />
          </li>
        </ul>
      </div>
    );
  }
}
