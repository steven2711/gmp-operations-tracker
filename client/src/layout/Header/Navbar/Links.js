import React from "react";
import styled from "styled-components";
import Ul from "../../../elements/Ul";
import Li from "../../../elements/Li";
import ReactLink from "../../../elements/ReactLink";

const Links = () => {
  return (
    <UL>
      <Li>
        <REACT_LINK to="/">login</REACT_LINK>
      </Li>
      <Li>
        <REACT_LINK to="/dashboard">dashboard</REACT_LINK>
      </Li>
      <Li>
        <REACT_LINK to="/admin">admin</REACT_LINK>
      </Li>
    </UL>
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
`;

export default Links;
