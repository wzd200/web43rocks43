require('dotenv').config()
const express = require('express')
const server = express()
const PORT = process.env.PORT || 5000
server.get('/api', (req, res) => {
    res.json({
        message: 'web43 is working and ready to serve'
    })
})
server.listen(PORT, () => {
    console.log(`I am listening at ${PORT}`)
})

//change2
