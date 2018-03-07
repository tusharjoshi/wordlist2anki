const fs = require('fs');
const fetchAndDisplay = require('./word-fetcher'); 
const Anki = require('./anki');

const wordfile = './src/wordlist.txt';
const delim = '<br />';
const builddir = './build';
const apkgName = 'DesiBoys';

fetchAndDisplay(delim, wordfile).then((dataarray)=>{

    if (!fs.existsSync(builddir)){
        fs.mkdirSync(builddir);
    }
    const ankifile = new Anki(apkgName);	
    for( var index = 0 ; index < dataarray.length; index++ ) {
        var data = dataarray[index]; 
        ankifile.addCard(data.word, data.text);
    }
    ankifile.saveFile(builddir + '/'); 
    console.log('Done');
});