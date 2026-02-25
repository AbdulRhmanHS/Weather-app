import './styles.css';
import weatherData from './example.json';
import { getDaysData, getHourlyData, getTodayData } from './core/data';
import { showTodayData, showHourlyData, showDailyData } from './dom/mainUI';

async function getPlaceName(lat, lon) {
  try {
    // This is a free reverse geocoding API
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;

    const response = await fetch(url);
    const data = await response.json();

    // You can choose how specific you want to be
    // data.city, data.locality, or data.principalSubdivision (Governorate)
    return `${data.city}`;
  } catch (error) {
    console.error('Could not find place name:', error);
    return 'Unknown Location';
  }
}

// async function getGPSLocation() {
//   return new Promise((resolve, reject) => {
//     // Check if the browser even supports Geolocation
//     if (!navigator.geolocation) {
//       reject(new Error("Your browser doesn't support GPS."));
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         // Success: Create the string format Visual Crossing likes
//         const coords = `${position.coords.latitude},${position.coords.longitude}`;
//         resolve(coords);
//       },
//       (error) => {
//         // Failure: User denied or GPS failed
//         reject(error);
//       }
//     );
//   });
// }

// async function getWeatherData(location) {
//   try {
//     const API_KEY = process.env.VC_API_KEY;
//     const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=metric&key=${API_KEY}&contentType=json`;

//     const response = await fetch(url);
//     if (!response.ok) throw new Error('Weather data could not be fetched.');

//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error('Oops! Something went wrong:', error);
//   }
// }

// (async () => {
//   let userLocation;

//   const useGPS = confirm('Would you like to use your current GPS location?');

//   if (useGPS) {
//     try {
//       userLocation = await getGPSLocation();
//     } catch (err) {
//       console.warn('GPS failed, falling back to manual entry.', err);
//       userLocation = prompt('GPS failed. Enter location manually:');
//     }
//   } else {
//     userLocation = prompt('Enter your location (e.g., Alexandria, Egypt):');
//   }

//   if (userLocation) {
//     let weatherData = await getWeatherData(userLocation);

//     const [lat, lon] = userLocation.split(',');
//     const humanReadableName = await getPlaceName(lat, lon);

//     if (weatherData) {
//       showTodayData(getTodayData(weatherData, humanReadableName));
//       showHourlyData(getHourlyData(weatherData));
//       showDailyData(getDaysData(weatherData));
//     }
//   }
// })();

console.log(weatherData);
const [lat, lon] = weatherData.address.split(',');
const humanReadableName = await getPlaceName(lat, lon);

console.log(getTodayData(weatherData, humanReadableName));
console.log(getHourlyData(weatherData));
console.log(getDaysData(weatherData));

showTodayData(getTodayData(weatherData, humanReadableName));
showHourlyData(getHourlyData(weatherData));
showDailyData(getDaysData(weatherData));
