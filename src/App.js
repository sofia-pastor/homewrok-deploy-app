import "./App.css";

import { useState } from "react";

import Weather from "./Weather";

export default function App() {
  const [city, setCity] = useState(null);
  const [finalInput, setFinalInput] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setFinalInput(city);
    console.log(city);
  }

  function showInfo(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          autoFocus={true}
          onChange={showInfo}
        />
        <input type="submit" value="Search" />
      </form>
      <Weather city={finalInput} />
    </div>
  );
}
