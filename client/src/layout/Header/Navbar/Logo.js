import React from "react";
import styled from "styled-components";
import H1 from "../../../elements/H1";

const Logo = () => {
  return <H1_S>gmp manager</H1_S>;
};

const H1_S = styled(H1)`
  text-transform: uppercase;
  color: white;
`;

export default Logo;
