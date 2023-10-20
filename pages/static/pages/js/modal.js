const buttonEntry = document.getElementById('entry')
const buttonWrite = document.getElementById('message')
const buttonCall = document.getElementById('call')

const close = document.getElementById('')

const modalEntry = document.getElementById('modal_entry')
const modalWrite = document.getElementById('modal_message')
const modalCall = document.getElementById('modal_call')

const overlayEntry = document.getElementById('overlay-entry')
const overlayWrite = document.getElementById('overlay-write')
const overlayCall = document.getElementById('overlay-call')

buttonEntry.addEventListener('click', () => {
    modalEntry.classList.add('active')
    overlayEntry.classList.add('show')
})

buttonWrite.addEventListener('click', () => {
    modalWrite.classList.add('active')
    overlayWrite.classList.add('show')
})

buttonCall.addEventListener('click', () => {
    modalCall.classList.add('active')
    overlayCall.classList.add('show')
})

var listModal = {
    '1': modalEntry,
    '2': modalWrite,
    '3': modalCall
}

var listOverlay = {
    '1': overlayEntry,
    '2': overlayWrite,
    '3': overlayCall
}

function closeModal(id, obj) {
    object = listModal[id]
    overlay = listOverlay[id]
    object.classList.remove('active')
    overlay.classList.remove('show')
}