function charCounter(e) {
    let textEntered, charDisplay, counter, lastKey
    textEntered = document.getElementById('message')
    charDisplay = document.getElementById('charactersLeft')
    counter = (180 - (textEntered.length))
    charDisplay.textContent = counter

    lastKey = document.getElementById('lastKey')
    lastKey.textContent = 'Last key ASCII code: ' + e.keyCode
}

const el = document.getElementById('message')
el.addEventListener('keypress', charCounter, false)