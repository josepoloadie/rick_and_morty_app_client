import styled from "styled-components";
import { useState } from "react";

const Navigator = styled.div`
  padding-top: 20px;
  text-align: center;
`;

const Button = styled.button`
  --green: #1bfd9c;
  font-size: 15px;
  padding: 5px 10px;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid var(--green);
  background: linear-gradient(
    to right,
    rgba(27, 253, 156, 0.1) 1%,
    transparent 40%,
    transparent 60%,
    rgba(27, 253, 156, 0.1) 100%
  );
  color: var(--green);
  box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4),
    0 0 9px 3px rgba(27, 253, 156, 0.1);

  &:hover {
    color: #82ffc9;
    box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6),
      0 0 9px 3px rgba(27, 253, 156, 0.2);
  }

  &:before {
    content: "";
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      rgba(27, 253, 156, 0.1) 40%,
      rgba(27, 253, 156, 0.1) 60%,
      transparent 100%
    );
  }

  &:hover:before {
    transform: translateX(15em);
  }
`;

const InputText = styled.input`
  height: 34.63px;
  border-radius: 10px;
`;
export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  console.log(id);

  return (
    <Navigator>
      <InputText
        placeholder="Ingresa un ID"
        type="search"
        onChange={handleChange}
      />
      <Button onClick={() => onSearch(id)}>Agregar</Button>
    </Navigator>
  );
}
