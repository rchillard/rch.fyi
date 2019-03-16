var bg = document.body;
var hour = new Date().getHours();

if (hour >= 5 && hour <= 8) {
  bg.classList.add("dawn");
} else if (hour > 8 && hour < 18) {
  bg.classList.add("day");
} else if (hour >= 18 && hour <= 21) {
  bg.classList.add("dusk");
} else {
  bg.classList.add("night");
}

// TESTING
// bg.classList.add("dusk");

// Check if night and draw stars
if (bg.className == "night") {
  console.log("Night falls on sky.html");
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function drawStar(x, y, size, canvas) {
    canvas.strokeStyle = "whitesmoke";
    canvas.strokeRect(x, y, size, size);
  }

  function redraw() {
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

  window.addEventListener("resize", redraw);
  redraw();
}

// This needs to be re-factored for simplicity
// Check if dawn and draw rising sun
if (bg.className == "dawn") {
  function convertRemToPixels(rem) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }

  function draw() {
    // Half circle
    var canvas = document.getElementById("sunrise");
    if (canvas.getContext) {
      var context = canvas.getContext("2d");
      var x = convertRemToPixels(2);
      var y = convertRemToPixels(2);
      console.log(y);
      var radius = convertRemToPixels(2);
      var startAngle = 0;
      var endAngle = Math.PI;
      var antiClockwise = true;
      context.beginPath();
      context.arc(x, y, radius, startAngle, endAngle, antiClockwise);
      context.closePath();

      var gradient = context.createLinearGradient(16, 32, 16, 0);
      gradient.addColorStop(0, "#ff512f");
      gradient.addColorStop(1, "#f09819");

      context.fillStyle = gradient;
      context.fill();
    }
  }

  draw();
}

// Check if dusk and draw setting sun
if (bg.className == "dusk") {
  function convertRemToPixels(rem) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }

  function draw() {
    // Half circle
    var canvas = document.getElementById("sunset");
    if (canvas.getContext) {
      var context = canvas.getContext("2d");
      var x = convertRemToPixels(2);
      var y = convertRemToPixels(2);
      console.log(y);
      var radius = convertRemToPixels(2);
      var startAngle = 0;
      var endAngle = Math.PI;
      var antiClockwise = true;
      context.beginPath();
      context.arc(x, y, radius, startAngle, endAngle, antiClockwise);
      context.closePath();

      var gradient = context.createLinearGradient(16, 32, 16, 0);
      gradient.addColorStop(0, "#f05053");
      gradient.addColorStop(1, "#fc500c");

      context.fillStyle = gradient;
      context.fill();
    }
  }

  draw();
}
