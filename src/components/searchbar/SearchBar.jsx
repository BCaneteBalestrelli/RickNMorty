import { useState } from "react";
import style from "./SearchBar.module.css"
export default function SearchBar(props) {
   const [id, setId] = useState("");
   const handleChange = event => {
      const {value} = event.target
      setId(value)
   }
   return (
      <div className={style.bar}>
          <input type='search' name="search" id="search" onChange= {handleChange} className={style.searchInput} />
         <button onClick={() => props.onSearch(id)} className={style.searchButton}>Agregar</button> 
      </div>
   );
}
  