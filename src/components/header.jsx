import React from "react";
import styled from "styled-components";
import BurgerMenu from "./common/burger";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo src="/logo.png" alt="Comber Logo" />

        <HeaderNav>
          <HeaderNavLink href="#" className="active">
            Inicio
          </HeaderNavLink>
          <HeaderNavLink href="#">
            Soluciones en Hormigón
          </HeaderNavLink>
          <HeaderNavLink href="#">
            Servicios de construcción
          </HeaderNavLink>
          <HeaderNavLink href="#">
            Contacto
          </HeaderNavLink>
        </HeaderNav>

        <BurgerContainer>
          <BurgerMenu />
        </BurgerContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

/* ================= ESTILOS ================= */

const HeaderWrapper = styled.header`
  background-color: var(--primary-color);
  box-shadow: var(--shadow-md);
  height: 90px;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 80px;

  @media (max-width: 600px) {
    padding: 0 20px; /* evita que el burger se corte en 320px */
    justify-content: space-around;
    }

`;

const Logo = styled.img`
  height: 34px;
  width: auto;
  object-fit: contain;

  @media (max-width: 600px) {
    height: 30px;
  }
  @media (max-width: 425px) {
    height: 25px;
  }
`;

const HeaderNav = styled.nav`
  display: flex;
  gap: 50px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const BurgerContainer = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;

const HeaderNavLink = styled.a`
  color: var(--text-light);
  text-decoration: none;
  font-weight: 600;
  font-family: var(--font-text);
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--secondary-color);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--secondary-color);

    &::after {
      width: 100%;
    }
  }

  &.active {
    &::before {
      content: "•";
      color: var(--secondary-color);
      position: absolute;
      left: -20px;
    }
  }
`;
