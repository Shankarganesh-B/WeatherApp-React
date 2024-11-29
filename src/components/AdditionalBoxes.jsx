import React, { useState, useEffect } from 'react';
import one from '../resource/svg/sunrises.svg';
import two from '../resource/svg/sunset.svg';
import three from '../resource/svg/clear.svg';
import four from '../resource/svg/few.svg';
import five from '../resource/svg/scattered.svg';
import six from '../resource/svg/cloudy.svg';
import seven from '../resource/svg/overcast.svg';
import initial from '../resource/svg/telescope.svg';  

const AdditionalBoxes = ({ weatherData }) => {
    const { sys, weather, clouds } = weatherData || {}; 
    const cloudCoverage = clouds?.all;  
    const [cimg, setCimg] = useState(initial); 

    useEffect(() => {
        if (cloudCoverage !== undefined) {
            let cloudCategory = 'N/A';
            if (cloudCoverage <= 10) {
                cloudCategory = 'Clear Sky';
                setCimg(three);  
            } else if (cloudCoverage <= 30) {
                cloudCategory = 'Few Clouds';
                setCimg(four);  
            } else if (cloudCoverage <= 60) {
                cloudCategory = 'Scattered Clouds';
                setCimg(five); 
            } else if (cloudCoverage <= 80) {
                cloudCategory = 'Mostly Cloudy';
                setCimg(six);  
            } else {
                cloudCategory = 'Overcast';
                setCimg(seven);  
            }
        }
    }, [cloudCoverage]);  

    const sunrise = sys?.sunrise;
    const sunset = sys?.sunset;

    return (
        <div className="additional-boxes flex-col sm:flex-row items-center gap-2 sm:items-center text-white  py-2">
            <div className='py-1 w-48 flex flex-col gap-2 rounded-md items-center bg-slate-500 backdrop-blur-lg shadow-lg border-solid border-black border-b-2 bg-opacity-20 hover:scale-110'>
                <img src={one} alt="Sunrise" className='w-20' />
                <p>Sunrise: {sunrise ? new Date(sunrise * 1000).toLocaleTimeString() : 'N/A'}</p>
            </div>
            <div className='py-1 w-48 flex flex-col gap-2 rounded-md items-center bg-slate-500 backdrop-blur-lg shadow-lg border-solid border-black border-b-2 bg-opacity-20 hover:scale-110'>
                <img src={two} alt="Sunset" className='w-20'/>
                <p>Sunset: {sunset ? new Date(sunset * 1000).toLocaleTimeString() : 'N/A'}</p>
            </div>
            <div className='py-1 w-48 flex flex-col gap-2 rounded-md items-center bg-slate-500 backdrop-blur-lg shadow-lg border-solid border-black border-b-2 bg-opacity-20 hover:scale-110'>
                <img src={cimg} alt="Cloud Coverage" className='w-20'/>
                <p>
                    Cloud Coverage: {cloudCoverage !== undefined ? `${cloudCoverage}%` : 'N/A'}
                </p>
            </div>
        </div>
    );
};

export default AdditionalBoxes;
