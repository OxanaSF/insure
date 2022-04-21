import React from 'react'
import logo from "../assets/images/logo.svg";
import styled from "styled-components";

const Logo = () => {
  return (
    <LogoStyled src={logo} className="logo" alt="insure" />
  )
}

const LogoStyled = styled.img`
  width: 10rem;
`

export default Logo