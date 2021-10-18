import styled from "styled-components";

const CardContainer = styled.div`
    background-color: black;
    resizeMode: 'cover';
    height: 420px;
    width: 290px;
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
    color: #B955C3;
    box-shadow: 5px 5px 8px 0 #B955C3;

`



const Card = ({member, role, image}) => {
    return (
        <div className="container">
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