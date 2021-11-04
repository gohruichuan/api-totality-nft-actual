const fs = require('fs');
const metadataJSON = require('./Merged Designs.json');

// create a JSON object
const obj = {};

// convert JSON object to string
// const data = JSON.stringify(user);

metadataJSON.forEach( metadata => {
    obj[metadata.index] = {};
    obj[metadata.index] = metadata;
});

// write JSON string to a file
fs.writeFile('metadata.json', JSON.stringify(obj), (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});