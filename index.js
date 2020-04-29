const app = require('express')
const http = require('http').createServer(app);

app.get('/', (req,res) => {
    res.send('<h1>Chat App</h1>')
})

http.listen(4000, () => {
    console.log('listening on port 4000');
    
})