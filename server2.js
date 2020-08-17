const express = require('express')
const app = express()
const fetch = require('node-fetch')

app.get('/', function (req, res) {
  console.log("Incoming request");
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    console.log(json)
    res.json(json)
  })
})

app.listen(3001)