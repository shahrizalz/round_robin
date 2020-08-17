require('dotenv').config()
const axios = require('axios')
const isReachable = require('is-reachable');
const available =require('./availability')

const a = async () => {
    var b = await available.btc()
    console.log(b);
}

a()


