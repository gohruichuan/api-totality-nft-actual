const fs = require('fs');
const metadataJSON = require('./Merged Designs.json');

// create a JSON object
const obj = {};

// convert JSON object to string
// const data = JSON.stringify(user);

metadataJSON.forEach( metadata => {
    obj[metadata.index] = [];
    // console.log("metadata ", metadata);
    for (let key in metadata){
        // console.log("key ", key);
        // console.log("metadata[key] ",metadata[key]);
        if(key !== "index"){
            const traitObj = {
                trait_type: key, 
                value: metadata[key]
            };
            obj[metadata.index].push(traitObj);
        }
    }
});

// console.log("obj ", obj);
// write JSON string to a file
fs.writeFile('metadata.json', JSON.stringify(obj), (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});