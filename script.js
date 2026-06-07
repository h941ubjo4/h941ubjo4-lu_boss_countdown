// 起始時間：2026/6/4 16:16
// 倒數 7 個月後：2027/1/4 16:16
// 注意：月份從 0 開始，所以 6 月是 5，1 月是 0。
const startDate = new Date(2026, 5, 4, 16, 16, 0);
const targetDate = new Date(2027, 0, 4, 16, 16, 0);

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const message = document.getElementById("message");

function pad(number, length = 2) {
  return String(number).padStart(length, "0");
}

function updateCountdown() {
  const now = new Date();
  const total = targetDate - startDate;
  const remaining = targetDate - now;
  const elapsed = now - startDate;

  if (remaining <= 0) {
    daysEl.textContent = "000";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    progressText.textContent = "100%";
    progressFill.style.width = "100%";
    message.textContent = "時間到，呂老闆重返的日子到了！";
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = pad(days, 3);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);

  let progress = 0;
  if (elapsed > 0) {
    progress = Math.min(100, Math.max(0, (elapsed / total) * 100));
  }

  progressText.textContent = `${progress.toFixed(4)}%`;
  progressFill.style.width = `${progress}%`;

  if (now < startDate) {
    message.textContent = "倒數尚未開始。";
  } else {
    message.textContent = "距離重返的日子越來越近。";
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
