import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <CardStyled>
      <img src={props.url} alt="" />
      <h2>{props.title}</h2>
      <p>{props.paragraph}</p>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & h2 {
    font-size: 2.2rem;
    color: hsl(270, 9%, 17%);
  }

  & p {
    line-height: 1.9;
    font-size: 1.3rem;
    letter-spacing: 0.15rem;
    color: hsl(273, 4%, 51%);
  }

  & img {
    width: 20%;
  }
`;

export default Card;
