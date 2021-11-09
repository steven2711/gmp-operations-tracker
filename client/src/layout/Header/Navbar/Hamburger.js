import React from "react";
import styled from "styled-components";

const Hamburger = ({ open, setOpen }) => {
  return (
    <Container open={open} onClick={() => setOpen(!open)}>
      <Div />
      <Div />
      <Div />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 3rem;

  div {
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      transform-origin: 3.5px 0.5rem;
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(1005)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      transform-origin: 0.4rem -0.05rem;
    }
  }

  @media (min-width: 810px) {
    display: none;
  }
`;

const Div = styled.div`
  margin: 0.3rem 0;
  width: 100%;
  background: white;
  height: 5px;
  border-radius: 10px;
  transition: all 0.2s linear;
`;

export default Hamburger;
