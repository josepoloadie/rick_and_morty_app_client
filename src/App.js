import axios from "axios";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import background from "./img/background.jpg";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About/About.jsx";
import Detail from "./views/Detail/Detail.jsx";
import Form from "./components/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  const EMAIL = "jpolo990206@gmail.com";
  const PASSWORD = "josepolo1";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }

  function logout() {
    setAccess(false);
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    const newCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(newCharacters);
  }

  const location = useLocation();

  return (
    <div style={{ backgroundImage: `url(${background})` }} className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
