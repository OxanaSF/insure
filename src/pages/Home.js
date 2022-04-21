import React from "react";
import styled from "styled-components";
import Header from "../components/Header"
import MiddleSection from "../components/MiddleSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <MainStyled>
      <Header />
      <MiddleSection />
      <Footer />
    </MainStyled>
  );
};

const MainStyled = styled.main`
  min-height: 150vh;
`;


export default Home;
