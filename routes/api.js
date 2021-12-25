const app = require('../server').Router()
const ws = require('../server').websocket

app.get('/api', (req, res) => {
    console.log({ 
        a: 1, 
        b: "c" 
    })
    res.json({ time: new Date() })
})

app.get('/get', (req, res) => {
    ws.broadcast(new Date().toISOString())
    res.json({ time: new Date(), data: req.query })
})
app.post('/post', (req, res) => {
    res.json({ time: new Date(), data: req.body })
})