function startTimer(duration, display) {
  var timer = duration, seconds;
  setInterval(function() {
    seconds = parseInt(timer % 60, 10);
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = "00:" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function() {
  var fiveMinutes = 60 * 30,
    display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};