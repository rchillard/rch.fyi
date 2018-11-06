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
