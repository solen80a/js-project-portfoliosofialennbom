import styled from "styled-components";
import { Media } from "../components/Media";
import { H3, Body } from "../components/Typography";
import { Button } from "./Button";

const MyWordsCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

const MyWordsImage = styled.img`
  width: 479px;  
`;


export const MyWordsCard = ({image, alt, tag, name, content, link, myWordsIcon, 
  myWordsAlt, 
  myWordsTitle}) => {
  return (
    <>    
    <MyWordsImage src={image} alt={alt} />    
    <MyWordsCardContainer>      
      <Body>{tag}</Body>
      <H3>{name}</H3>
      <Body>{content}</Body>
      <Button 
        url={link} 
        icon={myWordsIcon} 
        alt={myWordsAlt} 
        title={myWordsTitle} 
        />        
      </MyWordsCardContainer>
    </>
  )


};