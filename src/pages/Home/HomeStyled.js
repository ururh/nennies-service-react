import styled from "styled-components";
import bgImg from "../../image/bg.png";
import { GoArrowUpRight } from "react-icons/go"; 

export const Container = styled.div`
    margin: 32px;
    background-color: var(--main-color);
    border-radius: 30px;
    min-height: calc(100vh - 64px);
`

export const BackgroundImg = styled.div`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: right top;
  min-width: calc(100vh - 50%);
  min-height: calc(100vh - 64px);
  background-size: contain;

  @media (max-width: 768px) {
background-size: cover;
border-radius: 30px;
  }
`;


export const HomeContainer = styled.div`
    margin-top: 163px;
    width: 517px;
    color: var(--title-text);
    padding-left: 96px;
`

export const Title = styled.h1`
font-size: 70px;
font-weight: 500;
line-height: 70px;
letter-spacing: -2.1px;
margin-bottom: 28px;
  @media (max-width: 768px) {
font-size: 40px;
    line-height: 48px;
    letter-spacing: -1px;
    margin-bottom: 16px;
  }
`

export const Paragraph = styled.p`
font-size: 28px;
font-weight: 400;
line-height: 30px;
letter-spacing: -0.56px;
margin-bottom: 64px;
word-wrap: break-word;
`

export const ButtonGetStarted = styled.button`
    border-radius: 30px;
border: 1px solid rgba(251, 251, 251, 0.40);
background-color: transparent;
color: var(--title-text);
font-size: 20px;
font-weight: 500;
letter-spacing: -0.2px;

display: flex;
padding: 18px 50px;
justify-content: center;
align-items: center;
gap: 18px;
`
export const ArrowUpRight=styled(GoArrowUpRight)`
    stroke-width: 1px;
`


