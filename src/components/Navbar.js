import { useState } from "react";
import { NavLink } from "react-router-dom";
import Humburger from "../assets/images/icon-hamburger.svg";
import Close from "../assets/images/icon-close.svg";
import { routes } from "./NavbarItems";
import styled from "styled-components";
import Logo from "./Logo"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <NavbarStyled>
        <NavLink to="/">
          <Logo />
        </NavLink>

        <div className="menu">
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name}>
              <div className="listItem">{route.name}</div>
            </NavLink>
          ))}
        </div>
      </NavbarStyled>

      <MobileMenuStyled onClick={() => toggle()}>
        {isOpen && <img src={Humburger} alt="humburger-menu" />}

        {!isOpen && <img src={Close} alt="close-menu" />}
      </MobileMenuStyled>
    </div>
  );
};

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 10rem;

  /* .logo {
    width: 10rem;
  } */

  .menu {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    & :nth-child(4) {
      padding: 0.8rem 1rem;
      border: 1.8px solid hsl(270, 9%, 17%);
      font-weight: 700;
    }
  }

  .listItem {
    display: inline-block;
    color: hsl(270, 9%, 17%);
    color: hsl(273, 4%, 51%);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    padding: 0rem 1rem;
  }
`;

const MobileMenuStyled = styled.button`
  display: none;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export default Navbar;
