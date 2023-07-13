import { Link } from "react-router-dom";
import styled from "styled-components";
import { addFav, removeFav } from "../redux/actions/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`;

const CardDiv = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
  border-radius: 8px;
  box-shadow: 5px 2px 2px rgba(27, 253, 156, 0.9);
  overflow: hidden;
  margin: 20px;
  text-align: center;
  transition: all 0.25s;
  background-color: gray;

  &:hover {
    transform: translate(-15px);
    box-shadow: 12px 12px 16px rgba(27, 253, 156, 0.3);
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
`;

const Name = styled.h4`
  margin: auto;
  font-weight: bolder;
  text-align: center;
  position: absolute;
  top: 175px;
  left: 45px;
  background-color: yellow;
  display: inline;
  padding: 0 15px;
`;

const Texto = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 90%;
  height: 25px;
  max-width: 200px;
  margin: auto;
`;

const Parrafo = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: bold;
`;

const Cerrar = styled.button`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 3px;
  right: 3px;

  &:hover {
    background: red;
  }
`;

export function Card({
  onClose,
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  myFavorites,
  addFav,
  removeFav,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    let character = { id, name, status, species, gender, origin, image };
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(character);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  return (
    <Container>
      <CardDiv>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        <Image src={image} alt="" />
        <Link to={`/detail/${id}`}>
          <Name>{name}</Name>
        </Link>
        <Texto>
          <Parrafo>{status}</Parrafo>
          <Parrafo>{species}</Parrafo>
          <Parrafo>{gender}</Parrafo>
        </Texto>
        {/* <Origin>{props.origin}</Origin> */}
        <Cerrar onClick={() => onClose(id)}>X</Cerrar>
      </CardDiv>
    </Container>
  );
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
