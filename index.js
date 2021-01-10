const path = require('path')
const express = require('express')
const shortid = require('shortid')
var bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('./public'))

app.get('/', async (req, res, next) => {
  res.sendFile('./index.html')
});

const port = process.env.PORT || 4433
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
