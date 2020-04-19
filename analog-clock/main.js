
const clockBody = document.querySelector('.clock-wrap .body')
const hands = {
  hour: document.querySelector('.the-hour-hand'),
  minute: document.querySelector('.the-minute-hand'),
  second: document.querySelector('.the-second-hand'),
}
const centeringHands = 'translateX(-50%)'

const handMovement = () => {
  const date = new Date()
  const isPM = date.getHours() > 12
  const hours = isPM ? date.getHours() - 12 : date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const rotationValue = {
    hours: hours * 30 + minutes * .5 + seconds * 1 / 120,
    minutes: minutes * 6 + seconds * .1,
    seconds: seconds * 6
  }
  hands.hour.style.transform = `rotate(${rotationValue.hours}deg) ${centeringHands}`
  hands.minute.style.transform = `rotate(${rotationValue.minutes}deg) ${centeringHands}`
  hands.second.style.transform = `rotate(${rotationValue.seconds}deg) ${centeringHands}`
}

handMovement()
clockBody.style.opacity = 1

setInterval(() => {
  handMovement()
}, 1000)