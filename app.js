const express = require('express')
const { connectToDb, getDb } = require('./db')

// init app & middleware
const app = express()

// db connection
let db

connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log('app listenening on port 3000')
        })
        db = getDb()
    }
})

/* only listen to request after we connect to db
app.listen(3000, () => {
    console.log('app listenening on port 3000')
})
*/

// routes
app.get('/books', (req, res) => {
    res.json({ msg: "welcome to the api" })
})
