import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from "./components/nav/Nav.jsx";
import { useEffect, useState } from 'react';
// import characters from './data.js';
import axios from 'axios';
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form';

function App() {
   const [characters, setCharacters] = useState([])
   const { pathname } = useLocation();
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()
   useEffect(() => {
      !access && navigate("/");
      
   },[access]) 
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
   };
   const username = 'ejemplo@gmail.com';
   const password = 'unaPassword';
   const login = (userData) => {
      if (userData.password === password && userData.username === username) {
         setAccess(true);
         navigate('/home');
      } else {
         alert("Credenciales incorrectas")
      }
   }
   return (
      <div >
         {pathname !== "/" && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path="/" element={<Form  login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:detailId' element={<Detail />} />
         </Routes>


      </div>
   );
}

export default App;
