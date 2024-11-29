import React, { useState, useEffect } from 'react';
import v1 from '../resource/video/v1.mp4';
import v11 from '../resource/video/v11.mp4';
import v3 from '../resource/video/v3.mp4';
import v4 from '../resource/video/v4.mp4';
import v5 from '../resource/video/v5.mp4';


const capitalizeFirstLetter = (string) => {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const WeatherBox = ({ weatherData }) => {
    const { main, weather, wind, rain } = weatherData || {};

    const temp = main?.temp;
    const feels_like = main?.feels_like;
    const weatherMain = weather?.[0]?.main;
    const weatherDesc = weather?.[0]?.description;
    const windSpeed = wind?.speed;
    const rainProb = rain ? rain['1h'] : 0;

    const [video, setVideo] = useState("");
    useEffect(() => {
        console.log("Updating video based on temperature:", temp);
        if (temp !== undefined) {
            let newVideo = "";
            if (temp <= 0) {
                newVideo = v1;
            } else if (temp > 0 && temp <= 10) {
                newVideo = v11;
            } else if (temp > 10 && temp <= 25) {
                newVideo = v3;
            } else if (temp > 25 && temp <= 40) {
                newVideo = v4;
            } else if (temp > 40) {
                newVideo = v5;
            }

            if (newVideo !== video) {
                setVideo(newVideo);
            }
        }
    }, [temp]);

    return (
        <div className='text-white mx-4 bg-opacity-50 shadow-lg text-shadow'>
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                {video && (
                    <video
                        key={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
            <div className="weather-box flex justify-between sm:space-x-4 p-4 rounded-lg shadow-lg flex-col sm:flex-row relative z-10">
                <div className="left flex flex-col items-center text-center justify-center">
                    <h2 className="text-3xl font-extrabold">{temp ? temp : 'N/A'}°C</h2>
                    <p className="text-base font-semibold">Feels like: {feels_like ? feels_like : 'N/A'}°C</p>
                </div>
                <div className="right sm:border-l-[1px] sm:border-gray-300 sm:pl-4 flex flex-col sm:items-start mt-2 sm:mt-0 items-center space-y-2 text-xl">
                    <p className="font-semibold">{weatherMain || 'N/A'}</p>
                    <p>Description: {weatherDesc ? capitalizeFirstLetter(weatherDesc) : 'N/A'}</p>
                    <p>Wind Speed: {windSpeed || 'N/A'} m/s</p>
                    <p>Rain (last 1 hour): {rainProb || 'N/A'} mm</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherBox;
