import { React, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT
} from "../../utils/interact";

//TODO: MAKE THE NEW HOME?
const Minter = () => {

  //State variables
  const [walletAddress, setWallet] = useState("");    //users wallet address
  const [status, setStatus] = useState("");  //User replies with string written to contract
  const [name] = useState("");
  const [description] = useState("");
  const [url] = useState("");

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  useEffect(() => {
    async function connect() {
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address)
      setStatus(status);
      addWalletListener();
    }
    connect();    
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => { 
    const { status } = await mintNFT(url, name, description);
    setStatus(status);
  };

  return (
    <div className="Minter" id="minter" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>🦊 Connect Wallet</span>
        )}
      </button>

      <br></br>
      <h1 id="title">🧙‍♂️ Gemesis NFT Minter</h1>
      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>
      <p id="status">
        {status}
      </p>
    </div>
  );


  //Updates the UI if User does changes in wallet
  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Mint a new NFT here");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`} rel="noreferrer">
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }
};
export default Minter;
