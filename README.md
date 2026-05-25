# Weather Dashboard

A weather dashboard app that lets you search any city and get real-time weather data.
Built as a learning project to practice connecting a frontend to a backend API layer.

## What it does

- Takes a city name as input
- Sends the request to a Node.js/Express backend
- The backend fetches data from the OpenWeatherMap API and returns it
- Displays the temperature, weather description, and humidity

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript (Fetch API)
- **Backend:** Node.js, Express
- **External API:** OpenWeatherMap
- **Packages:** axios, dotenv, cors

## Project Structure

## Getting Started

1. Clone the repository
2. Install dependencies

   npm install

3. Create a `.env` file in the root folder

   API_KEY=your_openweathermap_api_key_here
   PORT=5000

4. Start the server

   node server.js

5. Open your browser and go to `http://localhost:5000`

## What I learned

- How to set up an Express server and define API routes
- How to use a backend as an API layer to keep secret keys off the frontend
- How to use the Fetch API on the frontend to communicate with a backend
- Handling loading states, errors, and async functions in JavaScript

## API Reference

OpenWeatherMap — https://openweathermap.org/api
