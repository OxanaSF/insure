import React from 'react'
import styled from "styled-components";

const FooterCard = (props) => {
  return (
    <FootCardStyled>
       <h3>{props.title}</h3>
       <h4>{props.linkTitle1}</h4>
       <h4>{props.linkTitle2}</h4>
       <h4>{props.linkTitle3}</h4>
       <h4>{props.linkTitle4}</h4>
    </FootCardStyled>
  )
}

const FootCardStyled = styled.div`
     text-transform: uppercase;
     width: 25%;
     line-height : 2;

  & :nth-child(1) {
    color: hsl(273, 4%, 51%);
    padding-bottom: 1.9rem;
  }
`

export default FooterCard