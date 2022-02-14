

//Holds all wallet and smart contract interaction functions
require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require('./contract-abi.json') //!!CHANGE THE CONTRACT ABI ALSO FITTIN FOR OUR CONTRACT IF CHANGE NEEDED!!
//const contractABI = require('./contract-abi2.json') //!!CHANGE THE CONTRACT ABI ALSO FITTIN FOR OUR CONTRACT IF CHANGE NEEDED!!
const contractAddress = "0xdcda9f1c23e53200CE8062928D6fACeb1A476361"; //HERE WE SHOULD ADD OUR CONTRACT ADDRESS
//const contractAddress = "0x901c68b98EDaD8A1d0a20aE9b0eFA75cb381c78F";

const contract = new web3.eth.Contract(contractABI, contractAddress)

//Connects the wallet to the site/blockchain
export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status: "👆🏽 Choose your Mint amount.",
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

export const getMaxMintAmount = async () => {
    const result = await contract.methods.maxMintAmount().call();
    return result;
};

export const getTotalSupply = async () => {
    const result = await contract.methods.totalSupply().call();
    return result;
};

export const getMaxSupply = async () => {
    const result = await contract.methods.maxSupply().call();
    return result;
};

export const getNftPrice = async () => {
    const result = await contract.methods.cost().call();
    const resultEther = web3.utils.fromWei(result, "ether");
    return resultEther;
};

export const getSaleState = async () => {
    const result = await contract.methods.paused().call();
    return result;
};



export const mintNFT = async (mintamount, price) => {
    //error handling
    //if not formated properly return false
    // if (url.trim() === "" || (name.trim() === "" || description.trim() === "")) {
    //     return {
    //         success: false,
    //         status: "❗Please make sure all fields are completed before minting.",
    //     }
    // }

    //
    // var mintUpdateEvent = window.contract.events.MintCooldownUpdated(function(error, result){
    //     if(error)
    //     {
    //         console.log(error);
    //         return
    //     }
    //     console.log(result);
    //     return result;
    // })

    let cost = (price * mintamount).toFixed(5);
    cost = cost.toString();
    console.log(cost);
 
    //set up your Ethereum transaction
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.   //SENDING ETH TO OUT ADDRESS
        from: window.ethereum.selectedAddress, // must match user's active address.
        value: parseInt(web3.utils.toWei(cost, "ether")).toString(16), // set mint price
        'data': contract.methods.mint(mintamount).encodeABI() //make call to NFT smart contract !! Change id on new mint
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
            status: "✅ Check out your transaction on Etherscan: https://rinkeby.etherscan.io/tx/" + txHash + "\n"
            // + "TimeStamp of mint: " + mintUpdateEvent.args.timeStamp + " Minter: " + mintUpdateEvent.args.minter

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
                    status: "Connected",
                };
            } else {
                return {
                    address: "",
                    status: "🦊 Connect to Metamask using the connect button.",
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
