import { React, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from '@mui/material/Button';
import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT
} from "../../utils/interact.js";
import NavbarComp from "../Header/NavbarCompMint";
import { TextField } from "@material-ui/core";
import { Alert, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { styled } from '@mui/material/styles';
import styles from "./styles.js";

const MintButton = styled(Button)(() => ({
  color: "white",
}));

const ConnectButton = styled(Button)(() => ({
  color: "rgb(120, 39, 130)",
  borderColor: "rgb(120, 39, 130)",
  "&:hover":{
    color: "rgb(149, 102, 164)",
    borderColor: "rgb(149, 102, 164)"
},

}));

const Minter = (props) => {
  const classes = styles();

  //State variables
  const [walletAddress, setWallet] = useState("");    //users wallet address
  const [status, setStatus] = useState("");  //User replies with string written to contract
  const [mintAmount, setMintAmount] = useState(1);
  const [errorText, setErrorText] = useState("");
  const [mintSuccess, setMintSuccess] = useState("");
  // the following attributes should be called from the contract
  const [totalSupply, setTotalSupply] = useState(9669);
  const [alreadyMinted, setAlreadyMinted] = useState(0);

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
    if (mintAmount > 0 && mintAmount <= 20) {
      setMintSuccess("true");
      console.log(mintAmount);
      // const { status } = await mintNFT(url, name, description);
      // setStatus(status);
    } else {
      setMintSuccess("false");
      console.log("cant mint");
    }
    console.log(mintSuccess)

  };

  const handleChange = (e) => {
    setMintSuccess("");
    e.preventDefault();
    if (e.target.value > 0 && e.target.value <= 20) {
      setErrorText("");
    } else {
      setErrorText('Amount should be between 1 and 20');
    }
    setMintAmount(e.target.value);

  }



  return (
    <div className="background" id="home">
      <NavbarComp walletAddress={walletAddress} />
      <div className="container mintpage" id="minter" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div style={{
          paddingTop: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <ConnectButton variant="outlined" size="large" id="walletButton" onClick={connectWalletPressed}>
            {walletAddress.length > 0 ? (
              "Connected: " +
              String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)
            ) : (
              <span>Connect Wallet</span>
            )}
          </ConnectButton>

          <Stack
            component="form"
            spacing={2}
            noValidate
            autoComplete="off"
            style={{
              width: "90%",
              paddingTop: 0,
              paddingBottom: 30,
              marginTop: 10,
              borderRadius: 30,
              backgroundColor: "rgba(0,0,0,0.6)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <h1 id="title">💎 Mint your GΞMΞSIS💎 </h1>
            <h4>Price: 0.08 ETH</h4>
            <h4>Amount: 1-20 per tx</h4>
            <h4>Already minted: {alreadyMinted}/{totalSupply}</h4>
            <TextField
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                width: 250,
              }}
              defaultValue={1}
              error={errorText.length > 0}
              id="mintAmount"
              required
              type="number"
              label="Mint Amount"
              InputLabelProps={{
                classes: {
                  root: classes.inputLabel,
                  focused: "focused"
                }
              }}
              InputProps={{
                classes: {
                  root: classes.root
                }
              }}
              onChange={handleChange.bind(this)}
              variant="filled"
              color="primary"
            />

            <MintButton className="glow-on-hover" id="mintButton" onClick={onMintPressed}>
              MINT (Coming soon...)
            </MintButton>

            {mintSuccess === "" &&
              <Alert style={{ backgroundColor: 'transparent', width: 350, color: 'transparent' }}
                icon={false}>Empty</Alert>
            }
            {mintSuccess === "true" &&
              <Alert style={{ backgroundColor: 'rgba(0,0,0,0.8)', width: 350, color: 'green' }}
                severity="success">Success! Mint is getting processed...</Alert>
            }
            {mintSuccess === "false" &&
              <Alert style={{ backgroundColor: 'rgba(0,0,0,0.8)', width: 350, color: 'red' }}
                severity="error">Error! Please check if the mint amount is between 1 and 20!</Alert>
            }
            <p id="status" style={{ marginTop: '25px' }}>
              {status}
            </p>
          </Stack>
        </div>
      </div>
    </div>
  );


  //Updates the UI if User does changes in wallet
  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("Connected");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using connect button.");
        }
      });
    }
  }
};

Minter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Minter);
