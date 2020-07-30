// First Express Server
const express = require("express")
const app = express();

// Middleware
app.use(express.json())

app.use('/bounties', require('./routes/bountiesRouter'))

// 1: port   2: callback function
app.listen(8000, () => {
    console.log('The server is running on port 8000')
})

