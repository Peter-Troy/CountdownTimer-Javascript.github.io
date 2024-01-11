document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("startBtn");
    const timerDisplay = document.getElementById("timer");

    startBtn.addEventListener("click", startCountdown);

    function startCountdown() {
        const hours = parseInt(document.getElementById("hours").value) || 0;
        const minutes = parseInt(document.getElementById("minutes").value) || 0;
        const seconds = parseInt(document.getElementById("seconds").value) || 0;

        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        let remainingTime = totalSeconds;

        function updateTimer() {
            const hoursRemaining = Math.floor(remainingTime / 3600);
            const minutesRemaining = Math.floor((remainingTime % 3600) / 60);
            const secondsRemaining = remainingTime % 60;

            timerDisplay.textContent = `${hoursRemaining.toString().padStart(2, '0')} : ${minutesRemaining.toString().padStart(2, '0')} : ${secondsRemaining.toString().padStart(2, '0')}`;

            if (remainingTime > 0) {
                remainingTime--;
                setTimeout(updateTimer, 1000);
            } else {
                timerDisplay.textContent = "Countdown Complete!";
            }
        }

        updateTimer();
    }
});
