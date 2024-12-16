# WeatherNow

WeatherNow is a simple web application that provides the current weather based on a city entered by the user or the user's current location. The app uses the OpenWeatherMap API to retrieve weather data and is built with Express, Axios, and EJS. No frontend framework was used, just plain CSS for styling.

## Features
- Get current weather information by entering a city name.
- Get weather information based on the user's current location (using IP geolocation).
- Displays weather details like temperature, humidity, and wind speed.
- Responsive design with minimal and clean user interface.

## Technologies Used
- **Backend**: Node.js, Express
- **Frontend**: HTML, CSS, EJS (No frontend frameworks used)
- **API**: OpenWeatherMap API for weather data
- **Geolocation**: IP-API for getting the user's location

## Setup Instructions
### 1. Clone the repository
You can clone this repository to your local machine by running the following command:
git clone https://github.com/JamalChemlalDEV/WeatherNow

### 2. Install npm dependencies
After cloning the repository, you need to install the required dependencies using npm. Run the following command in the project directory:
npm install

### 3. Get your own OpenWeatherMap API key
In order to fetch weather data, you need an API key from OpenWeatherMap. Follow these steps:
- Go to OpenWeatherMap.
- Sign up for an account and get your free API key.
- Once you have the API key, open the index.js file in your project and replace the following line:
const apiKey = "your-openweathermap-api-key";
