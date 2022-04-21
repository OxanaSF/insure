import React from 'react'
import styled from "styled-components";
import FootCardDisplay from './FootCardDisplay';
import patternFooter from "../../src/assets/images/bg-pattern-footer-desktop.svg";
import Logo from "./Logo"
import Icons from './Icons';

const Footer = () => {
  return (
    <FooterStyled>
        <div className="top-container">
            <Logo />
            <Icons />
        </div>
        <FootCardDisplay />
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
    min-height: 40vh;
    background-color: hsl(0, 0%, 98%);
    margin-top: 13rem;
    padding: 5rem 15rem;
    background-image: url(${patternFooter });
    background-repeat: no-repeat;
    background-position: left top;

    .top-container {
        display: flex;
        justify-content: space-between;
        padding-bottom: 3rem;
        border-bottom: 0.15rem solid rgb(228,228,228);
        
    }
`

export default Footer