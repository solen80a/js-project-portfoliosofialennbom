import styled from "styled-components";
import { Media } from "../components/Media";
import { H2 } from "../components/Typography";
import { MyWordsCard } from "../components/MyWordsCard";
import mywords from "../data/mywords.json";

export const MyWords = ({title, mywords}) => {
  return (
    <>
    <section> <H2>My words</H2>
    
    {mywords.map((item) => {
      return (
        <MyWordsCard 
          key={item.name}
          name={item.name}
          image={item.image}
          alt={item.alt}
          tag={item.tag}          
          content={item.content}
          >          
        </MyWordsCard>
      )
      })}
      </section>
   
   </>
   
  ) 
}
