import React, { useState } from "react";
import styled from "styled-components";
import Ul from "../../../elements/Ul";
import Li from "../../../elements/Li";
import ReactLink from "../../../elements/ReactLink";
import Hamburger from "./Hamburger";

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <UL open={open}>
        <LI>
          <REACT_LINK to="/">login</REACT_LINK>
        </LI>
        <LI>
          <REACT_LINK to="/dashboard">dashboard</REACT_LINK>
        </LI>
        <LI>
          <REACT_LINK to="/admin">admin</REACT_LINK>
        </LI>
      </UL>
      <Hamburger open={open} setOpen={setOpen} />
    </>
  );
};

const REACT_LINK = styled(ReactLink)`
  color: white;
  text-transform: uppercase;
`;

const UL = styled(Ul)`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-evenly;

  @media (max-width: 809px) {
    flex-direction: column;
    overflow: hidden;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    justify-content: center;
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    transition: transform 0.3s;
    transform: ${({ open }) => (open ? "scale(1)" : "scale(0)")};
  }
`;

const LI = styled(Li)`
  @media (max-width: 809px) {
    margin: 2rem 0;
  }
`;

export default Links;
