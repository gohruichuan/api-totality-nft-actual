const express = require('express');
const router = new express.Router();
// const ipfsAPI = require('ipfs-http-client');
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('b85b436c975bbfb35a3a', process.env.PINATA_SECRET_KEY);
const pinataUrl = "https://gateway.pinata.cloud/ipfs/";
const metadataFilter = {
  name: ""
}

const pinataFilter = {
  status: 'pinned'
}


const getPinataData = async (metaDataId) => {

}


router.get('/metadata/:id', (req, res, next) => {
  var metaDataId = req.params['id'];

  // metadataFilter.name = metaDataId;
  pinata.pinList(pinataFilter).then((result) => {
    //handle successful authentication here
    // console.log(JSON.stringify(result));

    // console.log(JSON.stringify(result.rows[metaDataId]));
    // console.log("pinataUrl ", pinataUrl);
    // console.log("result.rows[metaDataId].ipfs_pin_hash ", result.rows[0].ipfs_pin_hash);
    // const imgUrl = pinataUrl + result.rows[metaDataId].ipfs_pin_hash;
    // console.log("imgUrl ", imgUrl)
    // const directoryHash = result.rows[metaDataId].ipfs_pin_hash;
    const metaData = {
      "description": "TOTALITY is a collection of 1,919 uniquely generative Solar Eclipses with 3,840,000,000 combinations living in the blockchain. Each solar eclipse artwork is generated and animated using R programming",
      // "image": "https://gateway.pinata.cloud/ipfs/QmcBquvotTkE9dZP9knD9PMHHm72mehyZftN8xG9i2iVDp/"+metaDataId+".jpg",
      "image": "https://ipfs.io/ipfs/QmdRSNWpJZGjmqBTBNM9BkicUc8stc8QDL94LAgykbcVHv/"+metaDataId+".gif",
      // "image": "ipfs://"+directoryHash+"/"+metaDataId+".jpg",
      "name": "Totality #"+metaDataId,
      "attributes": [
      ]
    }
    res.send(metaData);
    next();
  }).catch((err) => {
    //handle error here
    console.log(err);
  });




    // res.send(metaData);
    // next();

});




module.exports = router;