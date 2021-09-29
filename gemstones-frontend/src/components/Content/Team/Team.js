import Card from "./Card";
import styled from "styled-components";
import logo from "../../../resources/babyFalco.png"
import logo2 from "../../../resources/babyFalco2.png"
import logo3 from "../../../resources/babyFalco3.png"
import logo4 from "../../../resources/babyFalco4.jpg"

const TeamContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column;
      }
`;

export const Column = styled.div`
    margin: 10px;

`;

// TODO: Flex alignment to mobile etc. missing - https://mdbootstrap.com/docs/react/utilities/flexbox/

const Team = () => {
    return (
        <div className="container team" id="team">
            <h1>Our Team</h1>
            <TeamContainer className="team-info">
                <Column>
                    <Card member="Fazer" role="Developer" image={logo}/>
                </Column>
                <Column>
                    <Card member="Omega" role="Developer" image={logo2}/>
                </Column>
                <Column>
                    <Card member="Birdie" role="Designer" image={logo3}/>
                </Column>
                <Column>
                    <Card member="Deko" role="Designer" image={logo4}/>
                </Column>
            </TeamContainer>
        </div>
    )
}

export default Team;