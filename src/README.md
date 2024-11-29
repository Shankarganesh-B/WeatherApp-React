
# Weather App

A mobile-first weather application built with React 18, Tailwind CSS, and the OpenWeatherMap API. The app allows users to check weather conditions, including local time for searched cities and detailed weather parameters.

## Features

- **City Search**: Users can search for any city to view the current weather details and local time.
- **Dynamic Cloud Coverage Icons**: A visual representation of the cloud coverage percentage.
- **Dynamic Background Videos**: Background videos change according to the weather condition, creating an immersive experience for users.
- **Share Option**: Users can capture the current weather report as a PNG image and save it for easy sharing across various platforms.
- **Weather Report Details**:
  - Temperature and "Feels Like" temperature
  - Weather condition and description
  - Wind speed
  - Rain volume (in mm) for the last hour (if applicable)
  - Sunrise and sunset times
  - Local time of the searched city and the current IST (Indian Standard Time)

## Live Demo

Explore the app live: [Weather App on Vercel](https://weather-app-react-lilac-one.vercel.app/)

## Project Structure

```
src/
├── components/
│   ├── AdditionalBoxes.jsx   # Displays additional weather data
│   ├── CityTimeBox.jsx       # Displays city name and local time
│   ├── SearchBar.jsx         # Search bar for city lookup
│   ├── WeatherBox.jsx        # Displays main weather information
├── context/
│   ├── WeatherContext.js     # Handles API calls and state management
├── resources/
│   ├── video/                # Contains weather-related video files
│   ├── svg/                  # Contains weather-related SVG icons
├── App.js                    # Main application entry point
├── index.js                  # React DOM rendering
├── index.css                 # Tailwind CSS styles
public/
├── assets/                   # Static assets like images and logos
│   ├── logo/                 # Contains app logos
```

## Technologies Used

- **React 18**: JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework used for styling.
- **OpenWeatherMap API**: Provides real-time weather data.
- **React Context API**: Used for state management to handle weather data and city search.

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/yourusername/weather-app.git
```

### Install Dependencies

In the project directory, run:

```bash
npm install
```

### Start the Application

Run the app with:

```bash
npm start
```

Visit `http://localhost:3000` in your browser to view the app.

## Contributions

Feel free to contribute! Open a pull request if you'd like to add more features or fix bugs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
