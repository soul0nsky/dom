export default function endGame() {
  const timer = document.getElementById('timer');
  timer.textContent = 5;

  setInterval(() => {
    timer.textContent--;
    if (Number(timer.textContent) === 0) {
      location.reload();
    }
  }, 1000);
}
