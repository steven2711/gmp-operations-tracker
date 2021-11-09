import styled from "styled-components";

const Nav = styled.nav`
  height: 4rem;
  padding: 0 4rem;
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 540px) {
    padding: 0 1rem;
  }
`;

export default Nav;
