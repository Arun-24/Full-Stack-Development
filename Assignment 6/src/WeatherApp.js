import React, { useState} from 'react';
import './WeatherApp.css';

const API_KEY = "56fdcdb9427d4f408fb50854253006"; 

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('/images/clear.jpg');

  const getWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      setWeather(null);
      return;
    }

    try {
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}`);
      const data = await res.json();

      if (data.error) {
        setError(data.error.message);
        setWeather(null);
      } else {
        setWeather(data);
        setError('');
      }
    } catch (err) {
      setError('Error fetching weather data');
      setWeather(null);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className="weather-container">
        <h1>🌤️ Weather App</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <button onClick={getWeather}>Check Weather</button>
        </div>

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-info">
            <h2>{weather.location.name}, {weather.location.country}</h2>
            <p>🌡️ Temperature: {weather.current.temp_c}°C</p>
            <p>🌥️ Condition: {weather.current.condition.text}</p>
            <p>💧 Humidity: {weather.current.humidity}%</p>
            <p>💨 Wind: {weather.current.wind_kph} kph</p>
            <img src={weather.current.condition.icon} alt="weather icon" />
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;