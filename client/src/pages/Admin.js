import React from "react";
import styled from "styled-components";
import Layout from "../layout";
import Main from "../elements/Main";
import Login from "../components/Login";

const Admin = () => {
  return (
    <Layout>
      <MAIN>
        <Login title="admin login" />
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

export default Admin;
