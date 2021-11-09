import React from "react";
import styled from "styled-components";
import Main from "../elements/Main";
import Layout from "../layout";
import Login from "../components/Login";

const Home = () => {
  return (
    <Layout>
      <MAIN>
        <Login title="employee login" />
      </MAIN>
    </Layout>
  );
};

const MAIN = styled(Main)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Home;
