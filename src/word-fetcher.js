const Client = require('node-rest-client').Client;
const createWordEntry = require('./data-formatter');
const fs = require('fs');

var client = new Client();	
var delayMilis = 2000;
var delayIndex = 0;

async function fetchAsyncMeaning(word) {
    var args = { 
        path: {
            "word": word
        },
        headers: { 
            "Accept": "application/json",
            "app_id": process.env.OXFORD_DICTIONARIES_APP_ID,
            "app_key": process.env.OXFORD_DICTIONARIES_APP_KEY
        } 
    };
    var url = 'https://od-api.oxforddictionaries.com/api/v1/entries/en/${word}';
  
    delayIndex += 1;
    // Return new promise
    return new Promise(function(resolve, reject) {
      // Do async job
      setTimeout(()=>{
        client.get(url, args,
            function (data, response) {
                resolve(data);
            });
      }, delayMilis * delayIndex);
      
    })
}

function fetchAndDisplay(delim, wordfile) {
    words = fs.readFileSync(wordfile).toString().split("\n");
    words = words.filter((word)=>{
        if( word ) return true;
        else return false;
    });
    var mapdata = words.map(async (word, wordindex) => {
        var data = await fetchAsyncMeaning(word);
        return createWordEntry(word, data, delim);
    });

    return Promise.all(mapdata);
}

module.exports = fetchAndDisplay;