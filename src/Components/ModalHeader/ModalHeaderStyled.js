import styled from 'styled-components'
import { IoMdClose } from "react-icons/io";

export const ModalContent = styled.div`
  display: none;
  position: fixed ;
  top: 32px;
  right: 32px;
  width: 60%;
  border-radius: 30px;
  height: calc(100vh - 64px);
  background-color: var(--title-text);
  justify-content: center;
  align-items: center;
  z-index: 999;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Close = styled(IoMdClose)`
    width: 32px;
height: 32px;
color: var( --accent-color);
position: absolute;
right: 20px;
top: 20px;
`