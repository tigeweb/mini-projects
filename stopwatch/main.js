let startTime,
  elapsedTime = 0,
  timerInterval;

function startTimer() {
  stopTimer();

  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function () {
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    updateDisplay(elapsedTime);
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay(elapsedTime);
}

function updateDisplay(time) {
  let milliseconds = Math.floor((time % 1000) / 10);
  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / 1000 / 60) % 60);
  let hours = Math.floor((time / 1000 / 60 / 60) % 24);

  document.querySelector(".hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.querySelector(".minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.querySelector(".seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
  document.querySelector(".milliseconds").textContent = milliseconds
    .toString()
    .padStart(2, "0");
}
