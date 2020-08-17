require('dotenv').config()

var a = process.env.URLs
var b = []
b = a.split(',')
console.log(b);
console.log(b[2]);