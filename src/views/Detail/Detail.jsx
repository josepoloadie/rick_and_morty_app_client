import styles from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <div>
      {console.log(character)}
      <div className={styles.container}>
        <div>
          <img className={styles.img} src={character.image} alt="" />
          <h2>{character.name}</h2>
        </div>
        <div>
          <div className={styles.divDatos}>
            <p>STAUS | {character.status}</p>
            <p>GENDER | {character.gender}</p>
            <p>SPECIE | {character.species}</p>
            <p>ORIGIN | {character.origin?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
