import styled from "styled-components";
import Container from "../Container";

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  color: #fff;
  align-items: center;
  padding: 1rem;
  transition: all 0.3s ease;

  @media only screen and (max-width: 991px) {
    display: none;
  }

  > a {
    margin: 0 2rem;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  padding: 1rem;
  transition: all 0.3s ease;

  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export const NavbarWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 1rem;
  transition: all 0.3s ease;
`;

export const CustomContainer = styled.div`
  &.navbar-container {
    width: 100%;
  }

  &.sticky {
    width: 100vw;
    background-color: #fff;

    ${NavbarWrapper} {
      ${Menu} {
        color: #333;

        a {
          color: #333;
        }
      }
      ${MobileMenu} {
        color #333;
  
        a {
          color:#333;
        }
      }
    }
  }
`;
