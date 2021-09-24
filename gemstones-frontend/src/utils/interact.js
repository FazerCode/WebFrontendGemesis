import { pinJSONToIPFS } from './pinata.js'

const metadata = require('../resources/metadata/nft-metadata2.json');
//Holds all wallet and smart contract interaction functions
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

// const contractABI = require('./contract-abi.json') //!!CHANGE THE CONTRACT ABI ALSO FITTIN FOR OUR CONTRACT IF CHANGE NEEDED!!
const contractABI = require('./contract-abi2.json') //!!CHANGE THE CONTRACT ABI ALSO FITTIN FOR OUR CONTRACT IF CHANGE NEEDED!!
// const contractAddress = "0x6D3bCd6C1E89956BD92bD4b679191abD7798174d"; //HERE WE SHOULD ADD OUR CONTRACT ADDRESS
const contractAddress = "0xC2717d0dB33Ca0CE41f25a2E35975cb0231F1F75";


//Connects the wallet to the site/blockchain
export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status: "👆🏽 Write a message in the text-field above.",
                address: addressArray[0],
            };
            return obj;
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a target="_blank" href={`https://metamask.io/download.html`} rel="noreferrer">
                            You must install Metamask, a virtual Ethereum wallet, in your
                            browser.
                        </a>
                    </p>
                </span>
            ),
        };
    }
};

export const mintNFT = async () => {
    //error handling
    //if not formated properly return false
    // if (url.trim() === "" || (name.trim() === "" || description.trim() === "")) {
    //     return {
    //         success: false,
    //         status: "❗Please make sure all fields are completed before minting.",
    //     }
    // }

    //make metadata
    // const metadata = {};
    // metadata.name = name;
    // metadata.image = url;
    // metadata.description = description;

    // TODO: metadata should be loaded randomly
    console.log(metadata);

    //make pinata call
    const pinataResponse = await pinJSONToIPFS(metadata);
    //parse for errors
    if (!pinataResponse.success) {
        return {
            success: false,
            status: "😢 Something went wrong while uploading your tokenURI.",
        }
    }
    //this is the metadata of the nft which needs to be stored in ipfs
    const tokenURI = pinataResponse.pinataUrl;

    //Set contract
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);
    console.log(window.contract);
    console.log(window.contract.methods.totalSupply());

    //set up your Ethereum transaction
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.   //SENDING ETH TO OUT ADDRESS
        from: window.ethereum.selectedAddress, // must match user's active address.
        value: parseInt(web3.utils.toWei("0.0001","ether")).toString(16), // set mint price
        'data': window.contract.methods.mint(window.ethereum.selectedAddress, tokenURI).encodeABI() //make call to NFT smart contract !! Change id on new mint
    };

    //sign the transaction via Metamask
    try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });
        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
        }
    } catch (error) {
        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }

    }

}

//Checks if there is already a wallet connected
export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_accounts",
            });
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: "👆🏽 Mint a new NFT here.",
                };
            } else {
                return {
                    address: "",
                    status: "🦊 Connect to Metamask using the top right button.",
                };
            }
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a target="_blank" href={`https://metamask.io/download.html`} rel="noreferrer">
                            You must install Metamask, a virtual Ethereum wallet, in your
                            browser.
                        </a>
                    </p>
                </span>
            ),
        };
    }
};
