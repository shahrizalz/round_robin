require('dotenv').config()
const isReachable = require('is-reachable');
const fs = require('fs');
var counter = fs.readFileSync('counter.txt','utf8')


var isSend = false
var url = [{
    url: process.env.URL1
},
{
    url: process.env.URL2
},{
    url: process.env.URL3
}]


module.exports.check = async() =>{

    do{
        if(await isReachable(url[counter%3].url)){
            console.log("server reached ",url[counter%3].url);
            counter++
            fs.writeFile('counter.txt', counter, function (err) {
                if (err) throw err;
              });
              isSend = true
        }
        else{
            

              counter++
            fs.writeFile('counter.txt', counter, function (err) {
                if (err) throw err;
              });
              return false;
            //   check()
            //   continue;
            
            
        }
        
    }while(!isSend)
    return url[(counter-1)%3].url
}

// console.log(check());

// module.exports.check







