import React from "react";
import { cards } from "./middleCompData";
import Card from "./Card";
import styled from "styled-components";

const CardDisplay = () => {
  return (
    <CardDisplayStyled>
      {cards.map((card) => (
        <Card
          id={card.id}
          title={card.title}
          url={card.url}
          paragraph={card.paragraph}
        />
      ))}
    </CardDisplayStyled>
  );
};

const CardDisplayStyled = styled.div`
  display: flex;
  gap: 5rem;
`;

export default CardDisplay;
