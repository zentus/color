const socket = io.connect('localhost:1991')

const body = document.getElementsByTagName('body')[0]
const input = document.getElementsByTagName('input')[0]
const picker = document.getElementById('picker')

const set = color => {
  body.style.background = color
  input.style.background = color
}

const send = color => {
  set(color)
  socket.emit('color', color)
}

socket.on('response', color => {
  set(color)
  picker.value = color
})
