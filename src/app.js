const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 3000
const publicDir = path.join(__dirname,'../public')
app.use(express.static(publicDir))
app.use(express.json())

app.get('/', (req,res) =>{
    res.send('Hi')
})

app.post('/signUp', (req,res ) => {
  console.log(req.body)
  res.send(req.body.username)
})


app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`)    
})
