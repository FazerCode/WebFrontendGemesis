import styled from "styled-components";
import { FaTwitter } from 'react-icons/fa';


const CardContainer = styled.div`
    background-color: black;
    resizeMode: 'cover';
    height: 240px;
    width: 100%;
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
    margin-top: 20px;
    margin-left: 15px;
    max-width: 100%;
    max-height: 100%;     
    border-radius: 40px;
    color: #B955C3;
    box-shadow: 2px 2px 8px 3px #B955C3;

`



const Card = ({member, role, image, twitter}) => {
    return (
        <div className="container">
            <CardContainer>
                <Image src={image} alt="member"></Image>
                <Description>
                    <h3>{member}</h3>
                    <h5>{role}</h5>
                    {twitter !== undefined ?
                    <a href={twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a> : <> <FaTwitter color="transparent" /> </>
                    }
                </Description>
            </CardContainer>

        </div>
    )
}

export default Card;