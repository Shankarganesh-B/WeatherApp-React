import React, { useContext } from 'react';
import SearchBar from './components/SearchBar';
import CityTimeBox from './components/CityTimeBox';
import WeatherBox from './components/WeatherBox';
import AdditionalBoxes from './components/AdditionalBoxes';
import Footer from './components/Footer';
import { WeatherContext } from './context/WeatherContext';

const App = () => {
  const { weatherData, currentLocation, hourlyData, loading, error } = useContext(WeatherContext);

  return (
    <div className="App p-2 m-1 rounded-md">
      <SearchBar />
      <CityTimeBox />
      <WeatherBox weatherData={weatherData} />
      <AdditionalBoxes weatherData={weatherData} />
      <Footer/>
      {error && <div className="error-message text-red-500 p-4">{error}</div>}
      {loading && <div className="loading-message p-4">Loading...</div>}
      
    </div>
  );
};

export default App;
