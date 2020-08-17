const axios = require('axios')

module.exports.btc = async() => {
    try {
        var a = await axios({
            method: 'post',
            url: 'https://btccore-main.bdnodes.net?auth=wzfMEj1xX8ZwrvjCXNelGtMl-tPrCjBgMiZBq8yZh3k',
            auth:{
                username: "blockdaemon",
                password: "blockdaemon",
            },
            
            data: {
                method:"getblockchaininfo",
                params:[],
                id:1,
                jsonrpc:"2.0"
            }
          })
          if(a.data)
              return true
          
        return false
        //   console.log(a.data);
    } catch (error) {
        return false
    }
    
}

module.exports.btc()