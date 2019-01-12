function isDataAvailable(data) {
    if( !data || !data.results) return false;
    if( !data.results[0]) return false;
    if( !data.results[0].lexicalEntries) return false;

    return true;
}

function extractDefinition(lexicalEntry, delimeter) {
    var text = '';
    var definitions = lexicalEntry.entries[0].senses[0].definitions;
    definitions.forEach(function(def) {
        text += def + delimeter;
    });
    return text;
}

function extractExamples(lexicalEntry, delimeter) {
    var text = '';
    var examples = lexicalEntry.entries[0].senses[0].examples;
    if (examples) {
        examples.forEach(function (example) {
            text += example.text + delimeter;
        });
    }
    return text;
}

function createTextForEntry(lexicalEntry, index, delimeter) {
    var text = '';
    try {
        text += (index + 1) + ': ' + lexicalEntry.lexicalCategory + delimeter;
        text += extractDefinition(lexicalEntry, delimeter);
        text += extractExamples(lexicalEntry, delimeter);
        text += delimeter;
    } catch(ex) {
        text += 'error in parsing.' + delimeter;
    }
    return text;
}

function createWordEntry(word, data, delimeter = '<br />') {
    var text = '';
    if( isDataAvailable(data) ) {
        var lexicalEntries = data.results[0].lexicalEntries;
        lexicalEntries.forEach(function(lexicalEntry, index){
            text += createTextForEntry(lexicalEntry, index, delimeter);
        });
    } else {
        text += 'no meaning found.' + delimeter;
    }
    return {"word": word, "text": text};
}


module.exports = createWordEntry; 