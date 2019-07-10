// UTILITY FUNCTIONS
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// DRAWING FUNCTIONS
function drawStar(x, y, size, canvas) {
  canvas.strokeStyle = "whitesmoke";
  canvas.strokeRect(x, y, size, size);
}

function drawStarfield(canvas) {
  var canvas = document.getElementById("stars");
  var context = canvas.getContext("2d");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  // Draw stars
  for (i = 0; i < 100; i++) {
    drawStar(
      getRndInteger(0, canvas.width),
      getRndInteger(0, canvas.height),
      1,
      context
    );
  }
}

// Draw sun as either sunset or sunrise
function drawSun(time) {
  var canvasTarget;
  var startColor;
  var finalColor;

  if (time === "dawn") {
    // Draw sunrise on left side of screen
    canvasTarget = "sunrise";
    startColor = "#ff512f";
    finalColor = "#f09819";
  } else if (time === "dusk") {
    // Draw sunset on right side of screen
    canvasTarget = "sunset";
    startColor = "#f05053";
    finalColor = "#fc500c";
  } else {
    // Do not draw a sun
    canvasTarget = "";
  }

  var canvas = document.getElementById(canvasTarget);
  if (canvas.getContext) {
    var context = canvas.getContext("2d");
    var x = convertRemToPixels(2);
    var y = convertRemToPixels(2);
    var radius = convertRemToPixels(2);
    var startAngle = 0;
    var endAngle = Math.PI;
    var antiClockwise = true;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, antiClockwise);
    context.closePath();

    var gradient = context.createLinearGradient(16, 32, 16, 0);
    gradient.addColorStop(0, startColor);
    gradient.addColorStop(1, finalColor);

    context.fillStyle = gradient;
    context.fill();
  }
}

function drawMoon(phase) {}

// SKY LOGIC
// Establish time of day based off client
var bg = document.body;
var hour = new Date().getHours();

// Draw background sky color based off of time
if (hour >= 5 && hour <= 8) {
  bg.classList.add("dawn");
  drawSun("dawn");
} else if (hour > 8 && hour < 18) {
  bg.classList.add("day");
} else if (hour >= 18 && hour <= 21) {
  bg.classList.add("dusk");
  drawSun("dusk");
} else {
  bg.classList.add("night");
  // Draw starfield
  console.log("Night falls on sky.html");
  window.addEventListener("resize", drawStarfield);
  drawStarfield();
}
