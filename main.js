// CALCULATE BRIGHTNESS IPO CALCULATOR BY JONATHAN

//Event Listener on the Button
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let R = +document.getElementById("r-in").value;
  let G = +document.getElementById("g-in").value;
  let B = +document.getElementById("b-in").value;

  // Process
  let brightness = Math.sqrt(0.299 * R ** 2 + 0.587 * G ** 2 + 0.114 * B ** 2);

  // Output
  document.getElementById("output").innerHTML = brightness.toFixed(0);
  document.body.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}
