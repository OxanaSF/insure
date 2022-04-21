import React from "react";
import styled from "styled-components";
import introBottomLeft from "./bg-pattern-intro-left-desktop.svg";
import introTopRight from "./bg-pattern-intro-right-desktop.svg";
import familyImg from "./image-intro-desktop.jpg";

const Home = () => {
  return (
    <MainStyled>
      <TopSectionStyled>
        <div className="top-container-left">
          <div className="left-internal">
            <div className="line"></div>
            <h1>
              Humanizing <br />
              your insurance.{" "}
            </h1>
            <p>
              Get your life insurance easier and faster. We blend our expertise
              <br />
              and technology to help you find the plan that's right for you.
              Ensure you
              <br />
              and your loved ones are protected.
            </p>
            <button className="btn-view-plans"> VIEW PLANS</button>
          </div>
        </div>

        <div className="top-container-right"></div>
      </TopSectionStyled>
    </MainStyled>
  );
};

const MainStyled = styled.main`
  height: 150vh;
`;

const TopSectionStyled = styled.section`
  display: flex;
  color: white;
  height: 55vh;

  background: hsl(256, 26%, 20%);

  .top-container-left {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    line-height: 5.7rem;
    border-height: 3rem;
    background-image: url(${introBottomLeft});
    background-repeat: no-repeat;
    background-position: left bottom -340px;
  }

  .left-internal {
    padding: 10rem 0rem 10rem 15rem;
  }

  .top-container-right {
    width: 50%;
    background-color: hsl(256, 26%, 20%);
    background-image: url(${introTopRight}), url(${familyImg});
    background-repeat: no-repeat;
    background-position: right -30px top -80px, right 140px top 90px;
  }

  .line {
    width: 14rem;
    height: 0;
    border-top: 0.2rem solid hsl(0, 0%, 98%);
    margin: 3px;
    display: inline-block;
  }

  h1 {
    font-size: 6.5rem;
    font-weight: 700;
    color: hsl(0, 0%, 98%);
    margin-top: 4rem;
  }

  p {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 400;
    color: hsl(0, 0%, 98%);
    letter-spacing: 0.1rem;
    font-size: 1.3rem;
    line-height: 2.1rem;
    margin-top: 2rem;
  }

  .btn-view-plans {
    width: 25%;
    background: transparent;
    border: none;
    color: hsl(0, 0%, 98%);
    border: 0.15rem solid hsl(0, 0%, 98%);
    padding: 1rem 2rem;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    margin-top: 3rem;
  }
`;

export default Home;
