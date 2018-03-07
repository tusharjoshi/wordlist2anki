module.exports = function (word, data, delimeter = '<br />') {
    var text = '';
    if( data && data.results ) {
        var result = data.results[0];
        var lexicalEntries = result.lexicalEntries;
  
        for(let index = 0 ; index < result.lexicalEntries.length; index++) {
            var item = result.lexicalEntries[index];
            text += (index+1) + ': ' + item.lexicalCategory + delimeter;
            for( var defindex = 0 ; defindex < item.entries[0].senses[0].definitions.length; defindex++) {
                var def = item.entries[0].senses[0].definitions[defindex];
                text += def + delimeter;
            }
            if( item.entries[0].senses[0].examples ) {
                text += 'Examples:' + delimeter;
                for( var exindex = 0 ; exindex < item.entries[0].senses[0].examples.length; exindex++) {
                    var ex = item.entries[0].senses[0].examples[exindex];
                    text += ex.text + delimeter;
                }
            }
            text += delimeter;
        }
    } else {
        text += 'no meaning found.' + delimeter;
    }
    return {"word": word, "text": text};
}