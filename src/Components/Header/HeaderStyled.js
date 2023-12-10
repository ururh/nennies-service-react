import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 96px;
    background-color: transparent;
    color: var(--title-text);
    border-bottom: 1px solid rgba(251, 251, 251, 0.40);
`

export const Logo = styled.h2`
font-size: 24px;
font-weight: 500;
line-height: 28px;
letter-spacing: -0.48px;
margin-right: 10px;
`
export const Content = styled.div`
display:flex;
width: 533px;
justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`


export const Nav = styled.nav`
    display: flex;
    gap: 40px;
    margin-right: 12px;
    align-items: center;
      @media (max-width: 768px) {
    flex-direction: column;
    color: var( --title-text);
    gap:15px;
    margin-right: 0;
    margin-bottom: 15px;
  }
`

export const NavItem = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;  
  position: relative;

  &.active {
    &::after {
      content: '';
      position: absolute;
      margin-bottom: -10px;
      bottom: 0;
      left: 40%;
      width: 8px;
      height: 8px; 
      background-color: var(--title-text); 
      border-radius: 50%;
    }
  }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 8px;
      @media (max-width: 768px) {
    flex-direction: column;
  } 
`

export const ButtonLogIn = styled.button`
    display: flex;
padding: 14px 40px;
justify-content: center;
align-items: center;
border-radius: 30px;
background: transparent;
color: var(--title-text);
border: 1px solid rgba(251, 251, 251, 0.40);
font-size: 16px;
font-weight: 500;
line-height: 20px;
   &:hover,
  &:focus {
    transform: scale(0.9);
  }
`

export const ButtonRegister = styled.button`
    display: flex;
padding: 14px 40px;
border-radius: 30px;
font-weight: 500;
font-size: 16px;
background: var(--main-color);
color: var(--title-text);
line-height: 20px;
justify-content: center;
align-items: center;
   &:hover,
  &:focus {
    transform: scale(0.9);
  }
`

export const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

