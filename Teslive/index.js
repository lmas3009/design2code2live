function getRandomColor() {
  color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  return color;
}


setInterval(function () {
  var launchdate = new Date("10-22-2022").getTime();
  var date = launchdate - new Date().getTime();
  var days = Math.floor(date / (1000 * 60 * 60 * 24));
  var hours =
    Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24;
  var minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((date % (1000 * 60)) / 1000);
  document.getElementById("hrs").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
  document.getElementById("flip").style.backgroundColor = getRandomColor()
  document.getElementById("flip2").style.backgroundColor = getRandomColor()
  document.getElementById("flip3").style.backgroundColor = getRandomColor()
}, 1000);

