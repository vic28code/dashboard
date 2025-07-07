// src/app.ts
import { OpenMeteoResponse } from './types/DashboardTypes';

const initializeApp = async () => {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true');
        const data: OpenMeteoResponse = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

initializeApp();