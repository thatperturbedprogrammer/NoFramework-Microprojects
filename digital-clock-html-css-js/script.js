setInterval(timer, 1000);

function timer() {
  const date = new Date();

  document.getElementById("digital-clock").innerHTML =
    date.toLocaleTimeString();
}
