
let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

function toggleTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    Startbutton.textContent = 'Start'
  } else {
    timerInterval = setInterval(updateTimer, 1000);
    isRunning = true;
    Startbutton.textContent = 'Pause'
  }
}


function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  updateTimerDisplay();
}


function updateTimerDisplay() {
  const timerElement = document.getElementById('timer');
  timerElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}


function pad(value) {
  return value < 10 ? '0' + value : value;
}

document.getElementById('Startbutton').addEventListener('click', toggleTimer);