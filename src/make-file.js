const fs = require('fs');
const fetchAndDisplay = require('./word-fetcher'); 
const delim = '\n';
const filename = './build/datafile.txt';
const wordfile = './src/wordlist.txt';

fetchAndDisplay(delim, wordfile).then((dataarray)=>{
    var dir = './build';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    var filetext = '';
    for( var index = 0 ; index < dataarray.length; index++ ) {
        var data = dataarray[index]; 
        filetext += 'Word ' + (index + 1) + ': ' + data.word + delim;
        filetext += data.text + delim;
    }
    fs.writeFileSync(filename, filetext, 'utf8');
    console.log('File written at ' + filename);
});