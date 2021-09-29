import styled from "styled-components";

const CardContainer = styled.div`
    background-color: black;
    resizeMode: 'cover';
    box-shadow: 5px 10px 8px 0 rgba(0,0,0,0.7);
    height: 420px;
    width: 330px;
    display: table-cell;
    vertical-align: bottom;
    border-radius: 20px;
`;

const Description = styled.div`
    // background-color: rgba(255,255,255,0.4);
    color: white;
    margin: 15px;
    padding-left: 10px;
`

const Image = styled.img`
    margin-left: 15px;
    max-width: 90%;
    max-height: 100%;    
    border-radius: 40px;
    box-shadow: 5px 10px 8px 0 rgba(255,255,255,0.3);

`



const Card = ({member, role, image}) => {
    return (
        <div class="container">
            <CardContainer>
                <Image src={image} alt="member"></Image>
                <Description>
                    <h3>{member}</h3>
                    <h5>{role}</h5>
                </Description>
            </CardContainer>

        </div>
    )
}

export default Card;