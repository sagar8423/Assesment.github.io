var x, y, z;
function myClock() {
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let shifts = "AM";

  

  let hours = document.getElementById("hours");
  hours.innerText = hr;

  let mins = document.getElementById("min");
  mins.innerText = min;

  let secs = document.getElementById("sec");
  secs.innerText = sec;

  let shifting = document.getElementById("am");
  shifting.innerText = shifts;

  newsettime();
}

setInterval(myClock, 1000);