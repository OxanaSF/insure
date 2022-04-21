import React from "react";
import styled from "styled-components";
import Header from "../components/Header"
import MiddleSection from "../components/MiddleSection";

const Home = () => {
  return (
    <MainStyled>
      <Header />
      <MiddleSection />
    </MainStyled>
  );
};

const MainStyled = styled.main`
  min-height: 150vh;
`;


export default Home;
