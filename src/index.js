import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WeatherProvider } from './context/WeatherContext'; // Import the WeatherProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>
);
