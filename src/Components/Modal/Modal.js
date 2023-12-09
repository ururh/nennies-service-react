import React from 'react';
import { Close, ModalContent, ModalWrapper } from './ModalStyled';

const Modal = ({ children, onClose }) => {
  return (
    <ModalWrapper>
          <ModalContent>
              <Close onClick={onClose}/>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;