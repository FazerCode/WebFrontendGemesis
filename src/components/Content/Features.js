import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const CardContainer = styled.div`
    &:hover {
        background-color: rgba(185,85,195,0.2);
    }
    padding: 20px;
    background: black;
    width: 280px;
    height: 280px;
    margin: 35px;
    color: white;
    text-align: center;
    border-radius: 20px;
    box-shadow: 2px 2px 8px 3px #B955C3;
`;

const FeatureContainer = styled.div`
    margin-top: 10%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 0;
    list-style: none;

`

const Header = styled.h2`
    color: #B955C3;
`

const Features = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div id="features" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className="features container text">
                <h1 className="header">FEATURES</h1>

                <FeatureContainer >
                    <CardContainer>
                        <Header>Supply</Header>
                        <h5>9669 GEMESIS </h5>
                        <p>unique and generatively created NFTs that provide holders with utility and make them eligable
                            to mint their metaverse models.</p>
                    </CardContainer>
                    <CardContainer>
                        <Header>Traits</Header>
                        <ul style={{textAlign: "left"}}>
                            <li style={{marginBottom: '20px'}}><h5>8 trait categories</h5></li>
                            <li style={{marginBottom: '20px'}}><h5>250+ traits</h5></li>
                            <li style={{marginBottom: '20px'}}><h5>1.5+ billion possible combinations</h5></li>
                        </ul>
                    </CardContainer>
                    <CardContainer>
                        <Header>Royalties</Header>
                        <h5>5%</h5>
                        <p>secondary market sales will be gathered in a pool and redistributed to holders!</p>
                        <h5>2.5%</h5>
                        <p>to the GEMESIS team.</p>
                    </CardContainer>
                </FeatureContainer>
            </div>
        </div>
    );
};
export default Features;
