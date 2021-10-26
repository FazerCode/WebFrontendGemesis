import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//TODO: MAKE THE NEW HOME?
const Minter = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const onMintPressed = async () => {
    // const { status } = await mintNFT(url, name, description);
    // setStatus(status);
  };

  return (
    <div id="minter" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <div className="container Minter">

        <h1 id="title">💎 Minting soon on Ethereum 💎</h1>
        <button className="glow-on-hover" id="mintButton" onClick={onMintPressed}>
          MINT (Coming soon...)
        </button>
      </div>

    </div>
  );
};
export default Minter;
