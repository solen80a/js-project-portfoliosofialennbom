import styled from "styled-components";
import { Media } from "../components/Media";
import { H3, Body } from "../components/Typography";
import { Button } from "./Button";
import { TagButton } from "../components/TagButton";


const MyWordsCardContainer = styled.section`
  display: flex;
  justify-content: center;  
  align-items: center; 

  /* Tablet */
 @media ${Media.tablet}{   
  gap: 32px; 
}

/* Desktop Widescreen */
@media ${Media.desktop}{   
    flex-direction: ${({ $reverse}) => ($reverse ? "row-reverse" : "row")};
    justify-content: center;  
    height: 418px;       
    align-items: center; 
}



& p {
  width: 60%;  

  /* Desktop Widescreen */
  @media ${Media.desktop}{   
      width: 100%; 
  }

}
`

const TagWrapper = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  border-radius: 12px;

 & button {
  width: 142px;
 } 
`

const MyWordsImage = styled.img`
  width: 200px;
  
  
  /* Tablet */
 @media ${Media.tablet}{ 
  min-width: 200px; 
  width: 300px;
   
}

/* Desktop Widescreen */
@media ${Media.desktop}{      
    width: auto; 
    max-width: 479px;     
    
}
`

const MyWordsCardContent = styled.article`
  gap: 10px;
`


export const MyWordsCard = ({
  index, 
  image, 
  alt, 
  tag, 
  name, 
  content, 
  link, 
  myWordsIcon, 
  myWordsAlt, 
  myWordsTitle}) => {
    const isreversed = index % 2 === 0;

  return (
    <>  
      <MyWordsCardContainer $reverse={isreversed}>  
        <MyWordsImage src={image} alt={alt} />    
        <MyWordsCardContent>   
        <TagWrapper>
          <TagButton $projtag>{tag}</TagButton>
        </TagWrapper>
          <H3>{name}</H3>
          <Body>{content}</Body>
          <Button 
            url={link} 
            icon={myWordsIcon} 
            alt={myWordsAlt} 
            title={myWordsTitle} 
            />
        </MyWordsCardContent>         
      </MyWordsCardContainer>
    </>
  )


};