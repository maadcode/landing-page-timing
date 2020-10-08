const $btnNotify = document.querySelector('.notify')
const $btnClose = document.querySelector('.close')

function toggle(ev) {
    ev.preventDefault()
    const $newsletter = document.querySelector('.newsletter')
    $newsletter.classList.toggle('active')
}

$btnNotify.addEventListener('click', toggle)
$btnClose.addEventListener('click', toggle)