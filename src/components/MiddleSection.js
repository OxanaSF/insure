import React from "react";
import styled from "styled-components";
import patternWeWork from "../../src/assets/images/bg-pattern-how-we-work-desktop.svg";
import CardDisplay from "./CardDisplay";

const MiddleSection = () => {
  return (
    <MiddleSectionStyled>
      <h1>We're different</h1>
      <CardDisplayStyled>
        <CardDisplay />
      </CardDisplayStyled>
      <BannerStyled>
        <div className="banner text">
          Find out more
          <br /> about how we work
        </div>
        <button>How we work</button>
      </BannerStyled>
    </MiddleSectionStyled>
  );
};

const MiddleSectionStyled = styled.section`
  margin: 0rem 15rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  h1 {
    font-size: 5.5rem;
    font: hsl(270, 9%, 17%);
  }
`;

const CardDisplayStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10rem;
`;

const BannerStyled = styled.div`
  background-color: hsl(256, 26%, 20%);
  color: white;
  font-size: 4.5rem;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  background-image: url(${patternWeWork});
  background-repeat: no-repeat;
  background-position: center right;

  button {
    width: 15%;
    background: transparent;
    border: none;
    color: hsl(0, 0%, 98%);
    border: 0.15rem solid hsl(0, 0%, 98%);
    padding: 1rem 2rem;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
`;

export default MiddleSection;
