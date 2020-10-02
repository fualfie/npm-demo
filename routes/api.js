const app = require('../server').Router()

app.get('/api', (req, res) => {
    console.info('Api is called')
    res.json({ time: new Date() })
})

app.get('/get', (req, res) => {
    console.info(req.query)
    res.json({ time: new Date(), data: req.query })
})
app.post('/post', (req, res) => {
    console.info(req.body)
    res.json({ time: new Date(), data: req.body })
})