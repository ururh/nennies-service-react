import styled from 'styled-components';
import { FiEyeOff } from "react-icons/fi";

export const Title = styled.h2`
color: var(--accent-color);
font-size: 40px;
font-weight: 500;
line-height: 48px; 
letter-spacing: -0.8px;
margin-bottom: 20px;
`

export const Paragraph = styled.p`
    color: var( --accent-color-05);
font-size: 16px;
font-weight: 400;
line-height: 20px;
margin-bottom: 40px;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap:18px;
    
`

export const InputEye = styled.div`
margin-bottom: 40px;
    position: relative;
`

export const EyeOff = styled(FiEyeOff)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--accent-color);
`