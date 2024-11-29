import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const calculateLocalTime = (timezoneOffset) => {
    const utcTime = new Date();
    const localTime = new Date(
        utcTime.getTime() + 
        (timezoneOffset * 1000) + 
        (utcTime.getTimezoneOffset() * 60 * 1000)
    );

    return {
        fullDateTime: localTime.toLocaleString(),
        time: localTime.toLocaleTimeString([], {
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true
        }),
        date: localTime.toLocaleDateString(),
        hour: localTime.getHours(),
        minute: localTime.getMinutes(),
        dayPeriod: localTime.getHours() >= 12 ? 'PM' : 'AM',
        timestamp: localTime.getTime()
    };
};

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [localTime, setLocalTime] = useState(null);

    const fetchWeatherData = (cityName) => {
        const API_KEY = '37161b8991aead2552a7c36c69e64983';
        setLoading(true);
        setError(null);

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
            .then((response) => {
                const data = response.data;
                setWeatherData(data);
                setCurrentLocation(data.name);
                const localTimeInfo = calculateLocalTime(data.timezone);
                setLocalTime(localTimeInfo);
            })
            .catch((error) => {
                console.error('Error fetching weather data', error);
                setError('Error fetching weather data. Please try again.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        let intervalId;
        if (weatherData) {
            intervalId = setInterval(() => {
                const localTimeInfo = calculateLocalTime(weatherData.timezone);
                setLocalTime(localTimeInfo);
            }, 1000);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [weatherData]);

    return (
        <WeatherContext.Provider
            value={{
                weatherData,
                currentLocation,
                fetchWeatherData,
                loading,
                error,
                localTime
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};
