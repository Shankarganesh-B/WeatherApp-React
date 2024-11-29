import React, { useState, useEffect, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';  

const CityTimeBox = () => {
    const { currentLocation, localTime } = useContext(WeatherContext); 
    const city = currentLocation || 'Loading...';
    
    return (
        <div className="city-time-box p-4 rounded-lg flex flex-col items-center bg-slate-900 bg-opacity-50 text-white shadow-md mx-4 my-2">
            <h1 className="text-2xl font-bold">{city}</h1>
            <p className="text-lg">{new Date().toLocaleTimeString()} IST</p>
            {localTime && (
                <p className="text-sm text-gray-100">
                    {city} City Time: {localTime.time}
                </p>
            )}
        </div>
    );
};

export default CityTimeBox;