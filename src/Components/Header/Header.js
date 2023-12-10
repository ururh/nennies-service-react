import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavItem, HeaderContainer, ButtonRegister, Logo, ButtonContainer, ButtonLogIn, Nav, BurgerMenu, RedModal, Content } from './HeaderStyled';
import RegistrationForm from '../Registration/Registration';
import Modal from '../Modal';
import Login from '../Login';
import { selectIsAuth } from '../../redux/selector';
import { signOut } from 'firebase/auth';
import { authentication } from '../../firebase/firebase-config';
import { setAuthStatus } from '../../redux/authSlice';
import ModalHeader from '../ModalHeader';

const Header = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isRegistrationOpen, setRegistrationOpen] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [headerContent, setHeaderContent] = useState(null);

  const openBurgerMenu = () => {
    setBurgerMenuOpen(true);
  };

  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };

  const openModal = (content) => {
    setModalContent(content);
    setRegistrationOpen(true);
    closeBurgerMenu();
  };

  const closeModal = () => {
    setRegistrationOpen(false);
  };

  const handleLogout = () => {
    signOut(authentication);
    dispatch(setAuthStatus(false));
  };

  const openRedModal = () => {
    setHeaderContent(
      <div>
        <Nav>
          <NavItem to="/">Home</NavItem>
          {isAuth && <NavItem to="/favorites">Favorites</NavItem>}
          <NavItem to="/nannies">Nannies</NavItem>
        </Nav>
        <ButtonContainer>
          {isAuth ? (
            <ButtonRegister onClick={handleLogout}>Log Out</ButtonRegister>
          ) : (
            <>
              <ButtonLogIn onClick={() => openModal(<Login />)}>Log In</ButtonLogIn>
              <ButtonRegister onClick={() => openModal(<RegistrationForm />)}>Registration</ButtonRegister>
            </>
          )}
        </ButtonContainer>
      </div>
    );
    openBurgerMenu();
  };

  return (
    <HeaderContainer>
      <Logo>Nanny.Services</Logo>
      <BurgerMenu onClick={openRedModal}>☰</BurgerMenu>
      {isBurgerMenuOpen && <ModalHeader children={headerContent} onClose={closeBurgerMenu} />}
      <Content>
        <Nav>
          <NavItem to="/">Home</NavItem>
          {isAuth && <NavItem to="/favorites">Favorites</NavItem>}
          <NavItem to="/nannies">Nannies</NavItem>
        </Nav>
        <ButtonContainer>
          {isAuth ? (
            <ButtonRegister onClick={handleLogout}>Log Out</ButtonRegister>
          ) : (
            <>
              <ButtonLogIn onClick={() => openModal(<Login />)}>Log In</ButtonLogIn>
              <ButtonRegister onClick={() => openModal(<RegistrationForm />)}>Registration</ButtonRegister>
            </>
          )}
        </ButtonContainer>
      </Content>
      {isRegistrationOpen && <Modal children={modalContent} onClose={closeModal} />}
    </HeaderContainer>
  );
};

export default Header;
