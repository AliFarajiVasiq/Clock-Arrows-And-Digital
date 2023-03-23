// Get Arrow Clock
const hour = document.querySelector('.hour')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')
// Get Digital Clock
const hourDigi = document.querySelector('.digiHour')
const minDigi = document.querySelector('.digiMin')
const secDigi = document.querySelector('.digiSec')

function setData() {
    // SET TIME ARROWS CLOCK
    const myTime = new Date()
    const hours = myTime.getHours()
    const mins = myTime.getMinutes()
    const secs = myTime.getSeconds()
    // Deg
    const hourDeg = (hours / 12) * 360
    const minDeg = (mins / 60) * 360
    const secDeg = (secs / 60) * 360
    // inner HTML
    hour.style.transform = `rotate(${hourDeg}deg)`
    min.style.transform = `rotate(${minDeg}deg)`
    sec.style.transform = `rotate(${secDeg}deg)`

    // SET TIME DIGITAL CLOCK
    hourDigi.innerHTML = myTime.getHours()
    minDigi.innerHTML = myTime.getMinutes()
    secDigi.innerHTML = myTime.getSeconds()
}

setInterval(setData, 1000)