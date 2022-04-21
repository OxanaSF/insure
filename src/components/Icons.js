import React from "react";
import { icons } from "./iconsCompData";
import styled from "styled-components";

const Icons = () => {
  return (
    <IconsStyled>
      {icons.map((icon) => (
        <img src={icon.url} alt={icon.name} />
      ))}
    </IconsStyled>
  );
};

const IconsStyled = styled.div`
  display: flex;
  gap: 1rem;

  & img {
    width: 1.8rem;
  }
`;

export default Icons;
