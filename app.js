const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
app.use(express.json())

dotenv.config({ path:'./config.env' })
require('./db/conn')

app.use(require('./router/auth'))

const PORT = process.env.PORT || 4000; 


app.get('/signin', (req, res) => {
  res.send('Hello World!')
})

if(process.env.NODE_ENV =="production"){
  app.use(express.static("client/build"));
}


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})