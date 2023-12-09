import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavItem, HeaderContainer, ButtonRegister, Logo, ButtonContainer, ButtonLogIn, Nav } from './HeaderStyled';
import RegistrationForm from '../Registration/Registration';
import Modal from '../Modal';
import Login from '../Login';
import { selectIsAuth } from '../../redux/selector';
import { signOut } from 'firebase/auth';
import { authentication } from '../../firebase/firebase-config';
import { setAuthStatus } from '../../redux/authSlice';



const Header = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isRegistrationOpen, setRegistrationOpen] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const openModal = (content) => {
    setModalContent(content);
    setRegistrationOpen(true);
  };

  const closeModal = () => {
    setRegistrationOpen(false);
  };

  const handleLogout = () => {
    signOut(authentication);
    dispatch(setAuthStatus(false));

  }

  return (
    <HeaderContainer>
      <Logo>Nanny.Services</Logo>
      <div style={{ display: 'flex' }}>
        <Nav>
          <NavItem to="/">Home</NavItem>
          {isAuth && <NavItem to="/favorites">Favorites</NavItem>}
          <NavItem to="/nannies">Nannies</NavItem>
        </Nav>
        <ButtonContainer>
          {
  isAuth ? (
    <ButtonRegister onClick={handleLogout}>Log Out</ButtonRegister>
  ) : (
    <>
      <ButtonLogIn onClick={() => openModal(<Login />)}>Log In</ButtonLogIn>
      <ButtonRegister onClick={() => openModal(<RegistrationForm />)}>Registration</ButtonRegister>
    </>
  )
}
        
        </ButtonContainer>
      </div>
      {isRegistrationOpen && <Modal children={modalContent} onClose={closeModal} />}
    </HeaderContainer>
  );
};

export default Header;
