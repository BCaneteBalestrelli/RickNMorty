import Card from '../card/Card';
import style from "./Cards.module.css"
const Cards = ({characters, onClose}) => {
   return (
      <div className={style.container} >
       {characters.map((char) => {
         return (
            <Card 
            id ={char.id}
            name ={char.name}
            species ={char.species}
            status ={char.status}
            origin ={char.origin.name}
            gender ={char.gender}
            image ={char.image}
            onClose={onClose}
            />
         )
       })
       }  
      </div>
   )
}
export default Cards;