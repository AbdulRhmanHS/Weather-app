import weatherData from './example.json';
import { getDaysData, getHourlyData, getTodayData } from './core/data';

// async function getWeatherData() {
//   try {
//     const response = await fetch('url');

//     if (!response.ok) throw new Error('File not found');

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Oops! Something went wrong:', error);
//   }
// }

console.log(weatherData);
console.log(getDaysData(weatherData));
console.log(getHourlyData(weatherData));
console.log(getTodayData(weatherData));
