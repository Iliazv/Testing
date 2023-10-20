const checkbox = document.getElementById('option1')
const checkbox_2 = document.getElementById('option2')
const checkbox_3 = document.getElementById('option3')

const button = document.getElementById('button')
const button_2 = document.getElementById('button-2')
const button_3 = document.getElementById('button-3')

const phoneBlock = document.getElementById('phone-block')
const phoneBlock2 = document.getElementById('phone-block-2')
const phoneBlock3 = document.getElementById('phone-block-3')

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        button.disabled = false
        button.classList.add('working')
    } else {
        button.disabled = true
        button.classList.remove('working')
    }
})

checkbox_2.addEventListener('click', () => {
    if (checkbox_2.checked) {
        button_2.disabled = false
        button_2.classList.add('working')
    } else {
        button_2.disabled = true
        button_2.classList.remove('working')
    }
})

checkbox_3.addEventListener('click', () => {
    if (checkbox_3.checked) {
        button_3.disabled = false
        button_3.classList.add('working')
    } else {
        button_3.disabled = true
        button_3.classList.remove('working')
    }
})

button.addEventListener('click', () => {
    phoneBlock.classList.remove('hidden')
})

button_2.addEventListener('click', () => {
    phoneBlock2.classList.remove('hidden')
})

button_3.addEventListener('click', () => {
    phoneBlock3.classList.remove('hidden')
})