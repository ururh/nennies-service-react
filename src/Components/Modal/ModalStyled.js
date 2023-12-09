import styled from 'styled-components'
import { IoMdClose } from "react-icons/io";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(11, 11, 11, 0.60);
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const ModalContent = styled.div`
  background-color: var(--title-text);
  max-width: 438px;
  padding: 64px;
  border-radius: 30px;
  box-shadow:rgba(0, 0, 0, 0.1);
  position: relative;
  max-height: 580px;
  overflow: auto;
`;

export const Close = styled(IoMdClose)`
    width: 32px;
height: 32px;
color: var(--accent-color);
position: absolute;
right: 20px;
top: 20px;
`