const socket = io.connect('localhost:1991')
const send = color => {
  document.getElementsByTagName('BODY')[0].style.background = color
  document.getElementsByTagName('INPUT')[0].style.background = color
  socket.emit('color', color)
}

socket.on('response', color => {
  document.getElementsByTagName('BODY')[0].style.background = color
  document.getElementsByTagName('INPUT')[0].style.background = color
  document.getElementById('picker').value = color
})
