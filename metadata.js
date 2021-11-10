const express = require('express');
const router = new express.Router();
// const ipfsAPI = require('ipfs-http-client');
// const pinataSDK = require('@pinata/sdk');
// const pinata = pinataSDK('b85b436c975bbfb35a3a', process.env.PINATA_SECRET_KEY);

const metadataJSON = require('./metadata.json');
// const pinataUrl = "https://gateway.pinata.cloud/ipfs/";
// const metadataFilter = {
//   name: ""
// }

// const pinataFilter = {
//   status: 'pinned'
// }


// const getPinataData = async (metaDataId) => {

// }


router.get('/metadata/:id', (req, res, next) => {
  var metaDataId = req.params['id'];
  // console.log("metadataJSON ", metadataJSON);


  // metadataFilter.name = metaDataId;
  // pinata.pinList(pinataFilter).then((result) => {
    //handle successful authentication here
    // console.log(JSON.stringify(result));

    // console.log(JSON.stringify(result.rows[metaDataId]));
    // console.log("pinataUrl ", pinataUrl);
    // console.log("result.rows[metaDataId].ipfs_pin_hash ", result.rows[0].ipfs_pin_hash);
    // const imgUrl = pinataUrl + result.rows[metaDataId].ipfs_pin_hash;
    // console.log("imgUrl ", imgUrl)
    // const directoryHash = result.rows[metaDataId].ipfs_pin_hash;
  const metaData = {
    "description": "TOTALITY is an active, generative NFT project with a collection of 1,919 uniquely generative art composed of 18 distinct chaotic systems that each develop their own characteristics of 3,840,000,000 combinations. TOTALITY's artwork synthesizes methodical art using trigonometry cipher written on R programming language typically used in statistical computing",
    // "image": "https://gateway.pinata.cloud/ipfs/QmcBquvotTkE9dZP9knD9PMHHm72mehyZftN8xG9i2iVDp/"+metaDataId+".jpg",
    "image": "https://ipfs.io/ipfs/QmbEX53JwWM9i6t4CVnscKwgQRhExvcwJQ2VmeHiVTMpZL/"+metaDataId+".gif",
    // "image": "ipfs://"+directoryHash+"/"+metaDataId+".jpg",
    "name": "Totality #"+metaDataId,
    "attributes": metadataJSON[metaDataId]
  };

  res.send(metaData);
  next();
  // }).catch((err) => {
  //   //handle error here
  //   console.log(err);
  // });
});




module.exports = router;