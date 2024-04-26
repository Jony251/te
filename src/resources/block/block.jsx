import React, { useState } from 'react';
import '../block/block.css'
import Button from '../button/button';
import wind from "../img/wind.png";
import humidity from "../img/humidity.png";
import CityInput from "../input/input";
import * as Img from "../img/db";

const WeatherWidget = () => {

    const apiKey = "YOURAPIKEY";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";


    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(false);

    const searchWeather = async () => {
        try {
            const response = await fetch(`${apiUrl}q=${city}&appid=${apiKey}`);
            if (!response.ok) {
                setError(true);
                setWeatherData(null);
                return;
            }
            const data = await response.json();
            setWeatherData(data);
            setError(false);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError(true);
            setWeatherData(null);
        }
    };

return (
        <div className="card">
            <div className="search">
                <CityInput city={city} setCity={setCity}/>
                <Button onClick={searchWeather} />
            </div>

            {error && <div className="error">Invalid input</div>}

            {weatherData && (
                <div className="weather">
                    <img src={Img[`${weatherData.weather[0].main}`]} className="weather-icon"  alt="Weather icon" />
                    <h1 className="temp">{Math.round(weatherData.main.temp)}°C</h1>
                    <h2 className="city">{weatherData.name}</h2>




                    <div className="details">


                        <div className="col">
                            <img src={humidity} className='img' alt="Humidity icon" />
                            <div>
                                <p className="humidity">{weatherData.main.humidity}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={wind} className='img' alt="Wind icon" />
                            <div>
                                <p className="wind">{weatherData.wind.speed} km/h</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherWidget;
