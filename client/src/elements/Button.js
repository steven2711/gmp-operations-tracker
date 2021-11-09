import styled from "styled-components";

const Button = styled.button`
  padding: 0.9rem;
  cursor: pointer;
  background: black;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100%;
  margin: 1rem 0;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  &:active {
    transform: scale(1);
  }
`;

export default Button;
