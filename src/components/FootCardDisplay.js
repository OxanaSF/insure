import React from "react";
import { cards } from "./footerCompData";
import FooterCard from "./FooterCard";
import styled from "styled-components";

const FootCardDisplay = () => {
  return (
    <FootCardDisplayStyled>
      {cards.map((card) => (
        <FooterCard
          id={card.id}
          title={card.title}
          linkTitle1={card.linkTitle1}
          linkTitle2={card.linkTitle2}
          linkTitle3={card.linkTitle3}
          linkTitle4={card.linkTitle4}
        />
      ))}
    </FootCardDisplayStyled>
  );
};

const FootCardDisplayStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10rem;
  margin-top: 3.5rem;
  letter-spacing: 0.1rem;

  
`;

export default FootCardDisplay;
