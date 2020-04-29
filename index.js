const app = require('express')()
const http = require('http').createServer(app);
const socketIo = require('socket.io')(http)

app.get('/', (req,res) => {
    // res.send('<h1>Chat App</h1>')
    res.sendFile(__dirname + '/index.html')
})

socketIo.on('connection', (socket)=>{
    console.log('a user connected');
    

})

http.listen(4000, () => {
    console.log('listening on port 4000');
    
})