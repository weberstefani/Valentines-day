function runAway() {
  const btnNo = document.querySelector(".btn-no");

  const largeWindow = window.innerWidth;
  const heightWindow = window.innerHeight;

  const maxX = largeWindow - btnNo.offsetWidth;
  const maxY = heightWindow - btnNo.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  btnNo.style.left = randomX + "px";
  btnNo.style.top = randomY + "px";
}
