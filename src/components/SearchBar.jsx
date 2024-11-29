import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import html2canvas from 'html2canvas';

const SearchBar = () => {
    const { fetchWeatherData } = useContext(WeatherContext);
    const [cityName, setCityName] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (!cityName) return alert('Please enter a city name');
        fetchWeatherData(cityName); 
    };

    const savePageAsImage = () => {
        html2canvas(document.body).then((canvas) => {
            const imgData = canvas.toDataURL('image/png'); 
            const link = document.createElement('a'); 
            link.href = imgData;
            link.download = 'weather_page.png';  
            link.click();
        });
    };

    return (
        <div className="flex space-x-4 justify-center m-2">
            <input
                type="text"
                placeholder="Search city..."
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                className="border rounded px-4 py-2 focus:outline-none shadow-xl"
            />
            <button
                onClick={handleSearch}
                className="bg-slate-200 hover:text-white text-xl text-semibold px-4 py-2 rounded-md hover:bg-slate-600"
            >
                Search
            </button>
            <button 
            onClick={savePageAsImage}
            className="bg-slate-200 hover:text-white text-md text-semibold px-1 py-1 rounded-md hover:bg-slate-600">Share</button>
        </div>
    );
};

export default SearchBar;
