import styled from "styled-components";
import { Media } from "../components/Media";
import { H3, Body } from "../components/Typography";
import { Button } from "./Button";
import { TagButton } from "../components/TagButton";


const MyWordsCardContainer = styled.section`
  display: flex;
  justify-content: center;  
  align-items: center;
  gap: 128px;
  padding: 64px;
  margin: 24px;

  /* Tablet */
 @media ${Media.tablet}{ 
  flex-direction: row; 
  gap: 32px; 
}

/* Desktop Widescreen */
@media ${Media.desktop}{   
    flex-direction: row;
    justify-content: center;  
    height: 418px;       
    align-items: center; 
}

& p {
  width: 80%;  

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
    width: 479px;      
    
}
`

const MyWordsCardContent = styled.article`
  gap: 10px;
`


export const MyWordsCard = ({image, alt, tag, name, content, link, myWordsIcon, 
  myWordsAlt, 
  myWordsTitle}) => {
  return (
    <>  
      <MyWordsCardContainer>  
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