import React from "react";
import styled from "styled-components";
import introBottomLeft from "../../src/assets/images/bg-pattern-intro-left-desktop.svg";
import introTopRight from "../../src/assets/images/bg-pattern-intro-right-desktop.svg";
import familyImg from "../../src/assets/images/image-intro-desktop.jpg";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header-container-left">
        <div className="header-container-left-text">
          <div className="line-top"></div>
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
          <div className="line-bottom"></div>
        </div>
      </div>

      <div className="header-container-right">
        <img src={familyImg} alt="" />
      </div>

      <div className="purple-background"></div>

      <div className="two-cover-images"></div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.section`
  display: flex;
  justify-content: space-between;
  color: white;
  height: 100%;
  position: relative;
  padding: 10rem 15rem;

  .header-container-left {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    line-height: 5.7rem;
    border-height: 3rem;
  }

  .purple-background {
    background-color: hsl(256, 26%, 20%);
    height: 65%;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 10rem);
    z-index: -1;
  }

  .two-cover-images {
    background-image: url(${introTopRight}), url(${introBottomLeft});
    background-repeat: no-repeat;
    background-position: top right, bottom left;
    position: absolute;
    height: 100%;
    width: calc(100% + 10rem);
    top: 0;
    left: 0;
  }

  .line-top {
    width: 13.5rem;
    height: 0;
    border-top: 0.1rem solid hsl(0, 0%, 98%);
  }

  .line-bottom {
    width: 13.5rem;
    height: 0;
    border-bottom: 0.15rem solid rgb(141, 134, 178);
    padding-bottom: 90%;
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

export default Header;
