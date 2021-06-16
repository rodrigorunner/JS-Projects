// checkUsername é disparado quando o elemento input perde o foco - "blur"
function checkUsername() {
    let username = el.value 
    if(username.length < 5) {
        elMsg.textContent = 'Not long enough, yet...'
    } else {
        elMsg.textContent = ''
    }
}

// tipUsername é disparado quando o elemento ganha o foco - "focus"
function tipUsername() {
    elMsg.textContent = 'Username must be at least 5 characters or more'
}

var el = document.getElementById('username')
var elMsg = document.getElementById('feedback')

el.addEventListener('focus', tipUsername, false)
el.addEventListener('blur', checkUsername, false)