const fetchAndDisplay = require('./word-fetcher'); 
const wordfile = './src/wordlist2.txt';

const delim = '\n';

fetchAndDisplay(delim, wordfile).then((dataarray)=>{
    for( var index = 0 ; index < dataarray.length; index++ ) {
        var data = dataarray[index]; 
        console.log('Word ' + (index + 1) + ': ' + data.word);
        console.log(data.text);
    }
});