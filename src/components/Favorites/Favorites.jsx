import { connect } from "react-redux";
import styled from "styled-components";
import Card from "../Card";
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
const onClose = (id) => {};
export function Favorites({ myFavorites }) {
  return (
    <Container>
      {myFavorites.map((favorite) => {
        return (
          <Card
            key={favorite.id}
            id={favorite.id}
            name={favorite.name}
            status={favorite.status}
            species={favorite.species}
            gender={favorite.gender}
            origin={favorite.origin.name}
            image={favorite.image}
            onClose={onClose}
          />
        );
      })}
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
