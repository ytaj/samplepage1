// 見る人の心に寄り添い、時間の経過を優雅に伝えるコード
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');
    
    hoursSpan.textContent = hours;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
}

// 時間の経過を感じる心、その流れに合わせてコードも流れる
updateClock(); // 最初の表示を即座に行う
setInterval(updateClock, 1000); // 1秒ごとに更新
