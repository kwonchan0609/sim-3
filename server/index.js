const bodyParser = require('body-parser')
const express = require('express')
const massive = require('massive')
const controller = require('./controller')

const app = express()
app.use(bodyParser.json())
require('dotenv').config()

const{SERVER_PORT,
    CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then(connection =>{
    app.set('db,connection')
})


app.post('/api/user', controller.create)
app.get('/api/user', controller.get)







const port=SERVER_PORT

app.listen(port, ()=>{console.log(`Server listening on port${port}`)})