import styled from "styled-components";

const Nav = styled.nav`
  height: 5rem;
  width: 100%;
  padding: 0 4rem;
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 540px) {
    padding: 0 1rem;
  }
`;

export default Nav;
