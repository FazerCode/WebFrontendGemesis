import styled from 'styled-components';

   
export const Box = styled.div`
  background: #333232;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 40px;
  margin-top: 350px;
  margin-bottom: 0px;

  @media (max-width: 1200px) {
    padding: 70px 30px;
    margin-top: 450px;
  }
  
  @media (max-width: 1000px) {
    padding: 70px 30px;
    margin-top: 800px;
  }

  @media (max-width: 768px) {
    padding: 70px 30px;
    margin-top: 1600px;
  }
`;
   
export const Container = styled.div`
  
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items :center;

  @media (max-width: 1000px) {
    margin-bottom: 50px;
  }
`;
   
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: #B955C3;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Image = styled.img`
  margin-bottom: 60px;
  width: 140px;
`;