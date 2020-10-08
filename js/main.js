const $btnNotify = document.querySelector('.notify')
const $btnClose = document.querySelector('.close')

const $day = document.getElementById('day')
const $hour = document.getElementById('hour')
const $minute = document.getElementById('minute')
const $second = document.getElementById('second')

setInterval(() => {
    let day = new Date().toString()
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()

    $day.innerText = day[8] + day[9]
    $hour.innerText = hour
    $minute.innerText = minute
    $second.innerText = second
}, 1000)

$btnNotify.addEventListener('click', toggle)
$btnClose.addEventListener('click', toggle)

function toggle(ev) {
    ev.preventDefault()
    const $newsletter = document.querySelector('.newsletter')
    $newsletter.classList.toggle('active')
}
