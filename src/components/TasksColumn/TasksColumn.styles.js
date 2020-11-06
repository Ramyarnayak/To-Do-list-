//Styled components
import styled from "styled-components"; 

//Template literal style
const Container=styled.section`
width: 350px;
background: ${props=>props.background};
border: 1px solid ${props=>props.borderColor};
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 2px;

`;
const ColumnNameSection=styled.div`
width: 100%;
height: 50px;
background: ${props=>props.nameBackground};
border-bottom: 1px solid ${props=>props.borderColor};
border-radius: 2px;
display:flex;
justify-content:space-around;
align-items:center;
font-weight: bold;
font-size: 17px;

`;

const CardsSection=styled.div`
width:100%;
height: 460px;
display:flex;
flex-direction:column;
align-items:center;
padding-top:5px;
margin-bottom:4px;

`;




export {Container,ColumnNameSection,CardsSection};


