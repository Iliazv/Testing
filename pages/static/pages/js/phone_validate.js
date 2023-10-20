let inp = document.getElementById('phone');
const sendButton = document.getElementById('send-button')

// Проверяем фокус
inp.addEventListener('focus', _ => {
    // if (inp.value.length == 12) {
    //     button.disabled = false
    //     button.classList.add('active')
    // } else {
    //     button.disabled = true
    //     button.class.remove('active')
    // }
    // Если там ничего нет или есть, но левое
    if(!/^\+\d*$/.test(inp.value))
        // То вставляем знак плюса как значение
        inp.value = '+';
});

inp.addEventListener('keypress', e => {
    if (inp.value == '+' && (e.key != '7' && e.key != '8' )) {
        e.preventDefault();
    }
    // Отменяем ввод не цифр
    if(!/\d/.test(e.key))
        e.preventDefault();
});

inp.addEventListener('change', () => {
    if (inp.value.length == 12) {
        sendButton.disabled = false
        sendButton.classList.add('working')
    } else {
        sendButton.disabled = true
        sendButton.classList.remove('working')
    }
})