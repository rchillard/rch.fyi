var bg = document.body
var hour = new Date().getHours()

if (hour >= 5 && hour <= 7) {
  bg.classList.add('dawn')
} else if (hour > 7 && hour < 18) {
  bg.classList.add('day')
} else if (hour >= 18 && hour <= 20) {
  bg.classList.add('dusk')
} else {
  bg.classList.add('night')
}

// check if night and draw stars
if (bg.className == 'night') {
  console.log('Night falls on sky.html')
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
  function drawStar(x, y, size, canvas){
    canvas.strokeStyle = "whitesmoke";
    canvas.strokeRect(x,y,size,size);
  }
  
  function redraw() {
    var canvas = document.getElementById("stars");
    var context = canvas.getContext("2d");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  
    // Draw stars
    for(i = 0; i < 100; i++) {
      drawStar(getRndInteger(0, canvas.width), getRndInteger(0, canvas.height), 1, context)
    }
  }
  
  window.addEventListener("resize", redraw);
  redraw();
}
