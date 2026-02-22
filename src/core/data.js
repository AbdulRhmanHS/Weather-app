import { format, parse, differenceInCalendarDays } from 'date-fns';

function getRemainingDays(date) {
  const today = new Date();
  const due = new Date(date);

  const remaining = differenceInCalendarDays(due, today);
  return remaining;
}

// 1. Getting data for 15 days
export function getDaysData(weatherData) {
  let results = [];
  for (let i = 0; i < 15; i++) {
    let temp = `${weatherData.days[i].tempmin} / ${weatherData.days[i].tempmax}`;

    let remaining = getRemainingDays(weatherData.days[i].datetime);
    let due = new Date(weatherData.days[i].datetime);
    let day = 'Today';
    if (remaining === 1) day = 'Tomorrow';
    if (remaining > 1 || remaining < 0) day = format(due, 'd MMM');

    results.push({
      condition: weatherData.days[i].conditions,
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
      condition: hourData.conditions,
      temperature: hourData.temp,
      time: hours,
    });
  }
  return results;
}

// 3. Getting today's data for now
export function getTodayData(weatherData) {
  let results = [];
  const now = new Date();
  let hours = now.getHours();

  results.push({
    temperature: weatherData.days[0].hours[hours].temp,
    precipitation: weatherData.days[0].hours[hours].precip,
    windSpeed: weatherData.days[0].hours[hours].windspeed,
    humidity: weatherData.days[0].hours[hours].humidity,
  });

  return results;
}
