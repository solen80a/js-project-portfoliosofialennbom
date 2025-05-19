import { H2 } from "../components/Typography";
import { MyWordsCard } from "../components/MyWordsCard";
import mywords from "../data/mywords.json";


export const MyWords = () => {
  return (    
    <section> 
    <H2>My words</H2>
    {mywords.mywords.map((item, index) => {
      return (
        <> 
        <MyWordsCard 
          key={item.name}
          index={index}
          name={item.name}
          image={item.image}
          alt={item.alt}                    
          tag={item.tag}           
          content={item.content}
          link={item.link}
          myWordsIcon="/assets/Ic-Web.svg"
          myWordsAlt="Icon of a globe to represent the live demo"
          myWordsTitle="Read article">                     
        </MyWordsCard>
        </>  
    )
    })}
    </section> 
  ) 
}
