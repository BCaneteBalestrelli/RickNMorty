import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from "./components/nav/Nav.jsx";
import {useState} from 'react';
// import characters from './data.js';
import axios from 'axios';
import {Route, Routes} from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form';
function App() {
   const [characters, setCharacters] = useState([])
   const onSearch = id => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = id => {
      setCharacters(characters.filter(character => character.id !== id
      ))
   }
   const { pathname } = useLocation();
   return (
      <div >
       { pathname !== "/" && <Nav onSearch={onSearch}  />}
        <Routes> 
         <Route path="/" element= {<Form/>} />
         <Route path='/home' element = {<Cards characters={characters} onClose={onClose}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:detailId' element={<Detail/>}/>
        </Routes>
             
        
      </div>
   ); 
}

export default App;
 