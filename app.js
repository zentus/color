const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)

server.listen(1991, () => {
  console.log('Running on http://localhost:1991')
})

app.use(express.static('public'))

app.get('/noinput', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/noinput.html'))
})

io.sockets.on('connection', socket => {
  console.log(`${socket.id} connected`)

  socket.on('color', color => {
    console.log(color)
    socket.broadcast.emit('response', color)
  })

  socket.on('disconnect', socket => {
    console.log('Someone disconnected')
  })
})
