import './App.css';
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';


const App = () => {
  const [account, setAccount] = useState('');

  useEffect(() => {
    const loadBlockchainData = async () => {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      const network = await web3.eth.net.getNetworkType();
      console.log("network: " +network);
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    };

    loadBlockchainData();

  }, []);
  return (
    <div className="container">
      <p>Your account: {account}</p>
      
    </div>
  );
}

export default App;
