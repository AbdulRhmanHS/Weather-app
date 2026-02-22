export function showTodayData(data) {
  const todaySection = document.querySelector('.today');

  const temp = document.createElement('p');
  const precip = document.createElement('p');
  const hum = document.createElement('p');
  const windSpeed = document.createElement('p');

  temp.textContent = `Temperature is: ${data[0].temperature}`;
  precip.textContent = `Precipitation: ${data[0].precipitation}`;
  hum.textContent = `Humidity: ${data[0].humidity}`;
  windSpeed.textContent = `Wind Speed: ${data[0].windSpeed}`;

  todaySection.append(temp, precip, hum, windSpeed);
}

export function showHourlyData(data) {
  const hourlySection = document.querySelector('.hourly');

  for (let i = 0; i < 24; i++) {
    const dayCard = document.createElement('div');
    dayCard.classList.add('day-card');
    const temp = document.createElement('p');
    const condition = document.createElement('p');
    const time = document.createElement('p');

    temp.textContent = `${data[i].temperature}`;
    condition.textContent = `${data[i].condition}`;
    time.textContent = `${data[i].time}`;

    dayCard.append(temp, condition, time);
    hourlySection.append(dayCard);
  }
}

export function showDailyData(data) {
  const dailySection = document.querySelector('.daily');

  for (let i = 0; i < 15; i++) {
    const dayTab = document.createElement('div');
    dayTab.classList.add('day-tab');
    const temp = document.createElement('p');
    const condition = document.createElement('p');
    const time = document.createElement('p');

    temp.textContent = `${data[i].temperature}`;
    condition.textContent = `${data[i].condition}`;
    time.textContent = `${data[i].time}`;

    dayTab.append(time, temp, condition);
    dailySection.append(dayTab);
  }
}
