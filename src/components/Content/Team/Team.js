import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./Card";
import styled from "styled-components";
import omegaPicture from "../../../resources/Ape.png";
import birdyPicture from "../../../resources/mutant.gif"
import dekoPicture from "../../../resources/pedgy.png"
import fazerPicture from "../../../resources/punk.png"
import advisor from "../../../resources/punk2.png"

const TeamContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Column = styled.div`
    @media (max-width: 800px) {
        margin: 10px;
        alignt-content: center;
    }
`;

const Team = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div id="team">
            <div className="container team text" >
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <h1 className="header">GEMESIS FAMILY</h1>
                    <TeamContainer  >
                        <Column>
                            <Card member="OmegaZero" role="Developer" image={omegaPicture} twitter="https://twitter.com/OmegaZeroCrypto" />
                        </Column>
                        <Column>
                            <Card member="Fazer" role="Developer" image={fazerPicture} twitter="https://twitter.com/Fazer_Crypto" />
                        </Column>
                        <Column>
                            <Card member="Birdy" role="Artist" image={birdyPicture} twitter="https://twitter.com/BirdyGemesis" />
                        </Column>
                        <Column>
                            <Card member="Deko" role="Artist" image={dekoPicture} />
                        </Column>
                        <Column>
                            <Card member="moonlanding" role="Advisor" image={advisor} opensea="https://opensea.io/moonlanding" />
                        </Column>
                    </TeamContainer>
                </div>

            </div>

        </div>
    )
}

export default Team;