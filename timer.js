function countdown() {
  var today = new Date();
  var hour = today.getHours();
  if (hour < 10) godzina = "0" + godzina;
  var minute = today.getMinutes();
  if (minute < 10) minute = "0" + minute;
  var second = today.getSeconds();
  if (second < 10) second = "0" + second;
  document.getElementById("zegar").innerHTML = hour + ":" + minute + ":" + second;
  setTimeout("countdown()", 1000);
}
