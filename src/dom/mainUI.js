import clearDayImg from '../background/clear-day.webp';
import cloudyDayImg from '../background/cloudy-day.webp';
import rainyDayImg from '../background/rainy-day.webp';
import partlyCloudyDayImg from '../background/partly-cloudy-day.webp';
import snowyDayImg from '../background/snowy-day.webp';
import clearNightImg from '../background/clear-night.webp';
import rainyNightImg from '../background/rainy-night.webp';
import partlyCloudyNightImg from '../background/partly-cloudy-night.webp';

export function showTodayData(data) {
  updateBackground(data[0].icon);

  const todaySection = document.querySelector('.today');
  todaySection.innerHTML = '';

  const iconData = mapIcon(data[0].icon);
  const icon = document.createElement('span');
  icon.classList.add('material-symbols-rounded', iconData.colorClass);

  const temp = document.createElement('p');
  temp.classList.add('main-temp');

  const info = document.createElement('div');
  info.classList.add('today-info');
  const location = document.createElement('p');
  const precip = document.createElement('p');
  const hum = document.createElement('p');
  const windSpeed = document.createElement('p');

  icon.textContent = iconData.name;
  temp.textContent = `${data[0].temperature}`;
  location.textContent = `Location: ${data[0].location}`;
  precip.textContent = `Precipitation: ${data[0].precipitation}`;
  hum.textContent = `Humidity: ${data[0].humidity}`;
  windSpeed.textContent = `Wind Speed: ${data[0].windSpeed}`;

  info.append(location, precip, hum, windSpeed);
  createUnitsBtn(info);
  todaySection.append(icon, temp, info);
}

export function showHourlyData(data) {
  const hourlySection = document.querySelector('.hourly');
  hourlySection.innerHTML = '';

  for (let i = 0; i < 24; i++) {
    const iconData = mapIcon(data[i].icon);
    const icon = document.createElement('span');
    icon.classList.add('material-symbols-rounded', iconData.colorClass);

    const dayCard = document.createElement('div');
    dayCard.classList.add('day-card');

    const temp = document.createElement('p');
    const condition = document.createElement('p');
    const time = document.createElement('p');

    icon.textContent = iconData.name;
    temp.textContent = `${data[i].temperature}`;
    condition.textContent = `${data[i].condition}`;
    time.textContent = `${data[i].time}`;

    dayCard.append(icon, temp, condition, time);
    hourlySection.append(dayCard);
  }
}

export function showDailyData(data) {
  const dailySection = document.querySelector('.daily');
  dailySection.innerHTML = '';

  for (let i = 0; i < 15; i++) {
    const iconData = mapIcon(data[i].icon);
    const icon = document.createElement('span');
    icon.classList.add('material-symbols-rounded', iconData.colorClass);

    const dayTab = document.createElement('div');
    dayTab.classList.add('day-tab');

    const temp = document.createElement('p');
    const condition = document.createElement('p');
    const time = document.createElement('p');

    icon.textContent = iconData.name;
    temp.textContent = `${data[i].temperature}`;
    condition.textContent = `${data[i].condition}`;
    time.textContent = `${data[i].time}`;

    dayTab.append(icon, time, temp, condition);
    dailySection.append(dayTab);
  }
}

function mapIcon(apiIcon) {
  const iconMap = {
    'clear-day': { name: 'light_mode', colorClass: 'sunny' },
    'clear-night': { name: 'dark_mode', colorClass: 'night' },
    rain: { name: 'rainy', colorClass: 'rainy' },
    snow: { name: 'ac_unit', colorClass: 'snowy' },
    wind: { name: 'air', colorClass: 'windy' },
    fog: { name: 'foggy', colorClass: 'cloudy' },
    cloudy: { name: 'cloud', colorClass: 'cloudy' },
    'partly-cloudy-day': { name: 'partly_cloudy_day', colorClass: 'partial' },
    'partly-cloudy-night': { name: 'partly_cloudy_night', colorClass: 'night' },
  };

  return iconMap[apiIcon] || { name: 'help', colorClass: '' };
}

function updateBackground(iconCode) {
  const bgElement = document.querySelector('.bg');

  // Mapping the API strings to the imported variables
  const imageMap = {
    'clear-day': clearDayImg,
    cloudy: cloudyDayImg,
    rain: rainyDayImg,
    snow: snowyDayImg,
    'clear-night': clearNightImg,
    'rain-night': rainyNightImg,
    'partly-cloudy-day': partlyCloudyDayImg,
    'partly-cloudy-night': partlyCloudyNightImg,
  };

  // Updating the src of your <img> element
  bgElement.src = imageMap[iconCode] || clearDayImg;
}

function createUnitsBtn(container) {
  const unitsBtn = document.createElement('button');
  unitsBtn.classList.add('units-btn');
  unitsBtn.textContent = 'Change Units';
  container.append(unitsBtn);
}
