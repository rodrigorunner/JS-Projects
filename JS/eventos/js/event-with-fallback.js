const elUsername = document.getElementById('username')
const elMsg = document.getElementById('feedback')

function checkUsername(minLength) {
    if(elUsername.value.length < 5) {
        elMsg.textContent = 'User name must be at least ' + minLength + ' or more'
    } else {
        elMsg.textContent = ''
    }
}

// Fallback Code (Código Alternativo)
if(elUsername.addEventListener) {
    elUsername.addEventListener('blur', function() {
        checkUsername(5)
    }, false)
} else {
    // IE5-8 - Fallback
    elUsername.attchEvent('onkeypress', function() {
        checkUsername(5)
    })
}



