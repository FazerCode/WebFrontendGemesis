

require('dotenv').config();
const key = 'de2da5edbcc424a17f26'; //process.env.REACT_APP_PINATA_KEY;
const secret = '93f278315569c45ce2c8a4de48d651088dfa4832f1fedcd0fc7ece53556c1faf';//process.env.REACT_APP_PINATA_SECRET;
const axios = require('axios');

export const pinJSONToIPFS = async(JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    //making axios POST request to Pinata ⬇️
    return axios 
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }
        })
        .then(function (response) {
           return {
               success: true,
               pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
           };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }
           
    });
};