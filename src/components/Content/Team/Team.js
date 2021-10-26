import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./Card";
import styled from "styled-components";
import picture from "../../../resources/gemesis_logo_purple.png";

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
        <div className="container" id="team">
            <div className="team" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <h2>Our Team</h2>
                <TeamContainer className="team-info"  >
                    <Column>
                        <Card member="Fazer" role="Developer" image={picture} twitter="https://twitter.com/Fazer_Crypto" />
                    </Column>
                    <Column>
                        <Card member="OmegaZero" role="Developer" image={picture} twitter="https://twitter.com/OmegaZeroCrypto" />
                    </Column>
                    <Column>
                        <Card member="Birdie" role="Designer" image={picture} />
                    </Column>
                    <Column>
                        <Card member="Deko" role="Designer" image={picture} />
                    </Column>
                </TeamContainer>
            </div>
        </div>
    )
}

export default Team;