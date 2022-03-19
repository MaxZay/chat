const io = require('socket.io')(5000, {
  cors: {
    origin: ['http://localhost:3000']
  }
})

io.on('connection', socket => {
  console.log('connected')

  socket.emit('get id', socket.id)

  socket.on('send message', obj => {
    io.emit('get message', {
      id: obj.id,
      message: obj.message,
      time: new Date().toLocaleTimeString().slice(0,-3).toString()
    })
  })
})


