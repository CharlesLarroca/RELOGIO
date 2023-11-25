const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(){
  const now = new Date()
  const second = now.getSeconds()
  const secondDegree = ((second/60)*360) + 90
  secondHand.style.transform = `rotate(${secondDegree}deg)`
  const minute = now.getMinutes()
  const minuteDegree = ((minute/60)*360) + 90
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`
  const hour = now.getHours()
  const hourDegree = ((hour/12)*360) + 90
  hourHand.style.transform = `rotate(${hourDegree}deg)`
}
setInterval(setDate, 1000)

const time = new Date()
console.log(time)
