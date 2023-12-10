import React from 'react'
import { Close, ModalContent } from './ModalHeaderStyled';

const ModalHeader = ({ children, onClose }) => {
  return (
          <ModalContent>
              <Close onClick={onClose}/>
        {children}
      </ModalContent>
  );
}

export default ModalHeader