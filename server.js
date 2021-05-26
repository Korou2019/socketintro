
const express=require('express')
const http=require('http')
const socketio=require('socket.io')


const app=express()

const SERVER_PORT=process.env.PORT || 4142

const server=http.createServer(app)

const io=socketio(server)

app.use('/',express.static(__dirname +'/public'))

io.on('connection',(socket)=>{
   console.log('Connection ',socket.id)

   socket.on('colorit',(data)=>{
       io.emit('colorit',data)
   })
})



server.listen(SERVER_PORT,()=>{
    console.log('Server started on http://localhost:4142')
})



