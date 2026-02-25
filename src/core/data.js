import { format, parse, differenceInCalendarDays } from 'date-fns';

function getRemainingDays(date) {
  const today = new Date();
  const due = new Date(date);

  const remaining = differenceInCalendarDays(due, today);
  return remaining;
}

const units = {
  temp: (val) => `${Math.round(val)}°C`,
  shortTemp: (val) => `${Math.round(val)}°`,
  speed: (val) => `${Math.round(val)} km/h`,
  precip: (val) => `${Math.round(val)} mm`,
  percent: (val) => `${Math.round(val)}%`,
};

// 1. Getting data for 15 days
export function getDaysData(weatherData) {
  let results = [];
  for (let i = 0; i < 15; i++) {
    let icon = weatherData.days[i].icon;
    let condition = weatherData.days[i].conditions;
    let temp = `${units.shortTemp(weatherData.days[i].tempmin)} / ${units.shortTemp(weatherData.days[i].tempmax)}`;

    let remaining = getRemainingDays(weatherData.days[i].datetime);
    let due = new Date(weatherData.days[i].datetime);
    let day = 'Today';
    if (remaining === 1) day = 'Tomorrow';
    if (remaining > 1 || remaining < 0) day = format(due, 'd MMM');

    results.push({
      icon: icon,
      condition: condition,
      temperature: temp,
      time: day,
    });
  }
  return results;
}

// 2. Getting data of the day for up to 23 hours
export function getHourlyData(weatherData) {
  const now = new Date();
  let hours = now.getHours();
  let results = [];
  for (let i = hours; i < hours + 24; i++) {
    const dayIndex = i < 24 ? 0 : 1;
    const hourIndex = i % 24;
    const hourData = weatherData.days[dayIndex].hours[hourIndex];

    let hourObj = parse(hourData.datetime, 'HH:mm:ss', new Date());
    let hours = format(hourObj, 'h a');

    results.push({
      icon: hourData.icon,
      condition: hourData.conditions,
      temperature: units.shortTemp(hourData.temp),
      time: hours,
    });
  }
  return results;
}

// 3. Getting today's data for now
export function getTodayData(weatherData, locationName) {
  let results = [];
  const now = new Date();
  let hours = now.getHours();

  results.push({
    location: locationName,
    temperature: units.temp(weatherData.days[0].hours[hours].temp),
    precipitation: units.precip(weatherData.days[0].hours[hours].precip),
    windSpeed: units.speed(weatherData.days[0].hours[hours].windspeed),
    humidity: units.percent(weatherData.days[0].hours[hours].humidity),
  });

  return results;
}
