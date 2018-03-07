const fs = require('fs');
const AnkiExport = require('anki-apkg-export').default;

const apkgExtension = '.apkg';

module.exports = function Anki(name) {
    this.name = name;
    const apkg = new AnkiExport(name);

    this.addCard = (front, back) =>{
        apkg.addCard(front, back);
    }

    this.saveFile = (path) => {
        apkg
        .save()
        .then(zip => {
            var filename = path + name + apkgExtension;
            fs.writeFileSync(filename, zip, 'binary');
            console.log('Deck has been generated:' + filename);
        })
        .catch(err => console.log(err.stack || err)); 
    }
}