// screenX, screenY - tela
// pageX, pageY - página
// clientX, clientY - dentro da página, cliente

const sx = document.getElementById('sx')
const sy = document.getElementById('sy')
const px = document.getElementById('px')
const py = document.getElementById('py')
const cx = document.getElementById('cx')
const cy = document.getElementById('cy')

function showPosition(e) {
    sx.value = e.screenX
    sy.value = e.screenY
    px.value = e.pageX
    py.value = e.pageY
    cx.value = e.clientX
    cy.value = e.clientY
}

el = document.getElementById('body')
el.addEventListener('mouseover', showPosition, false)