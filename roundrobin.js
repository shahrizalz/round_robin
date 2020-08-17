const express = require('express')
const app = express()
const axios = require('axios')
const provider = require('./reach')
const rateLimit = require("express-rate-limit");
 
// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);
 
const limiter = rateLimit({
  windowMs: 1000 *60*1, // 15 minutes
  max: 15, // limit each IP to 100 requests per windowMs,
  message: "woi dah lah tu"
});
 
//  apply to all requests
// app.use(limiter);
var port = 3004
var counter=0
var url = [{
    url: "http://localhost:3000"
},
{
    url: "http://localhost:3001"
},{
    url: "http://localhost:3002"
}]

console.log(
    "url 1: "+url[0].url
);
app.get('/',limiter, function (req, res) {
  res.send('Hello Server RR')
})

app.get('/call', async function(req, res) {
    axios.get('google.com')
    .then(function (response) {
      // handle success
      console.log(response.data);
      res.json(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    
    if(counter == 2){
        counter = 0
        res.send("called")
    counter++
}
    else{
        res.send("called")
        counter++
    }
     
})

app.get('/try', async function(req, res) {
  var a = await provider.check()
  console.log(a);
  while(!a){
    a = await provider.check()
  }
  res.send(a)
})

app.listen(port, ()=> console.log("server run on port: ",port))