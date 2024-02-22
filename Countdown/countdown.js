const daysEl = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minEl = document.getElementById("min");
const secondsEl = document.getElementById("seconds");
//
// const newYears = "1 Jan 2025";
const newYears = `1 Jan ${new Date().getFullYear() + 1}`;
function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const min = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  console.log(days, hours, min, seconds);

  daysEl.innerHTML = days;
  hoursEL.innerHTML = formatTime(hours);
  minEl.innerHTML = formatTime(min);
  secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);

document
  .getElementById("countdown-container")
  .appendChild((document.createElement("h2").innerText = newYears));
