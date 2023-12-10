import React from 'react'
import Header from '../../Components/Header'
import { ArrowUpRight, ButtonGetStarted, Container,BackgroundImg, HomeContainer, Paragraph, Title } from './HomeStyled'


const Home = () => {
  return (

    <Container>
      <BackgroundImg>
      <Header />
      <HomeContainer>
       <Title>Make Life Easier for the Family:</Title>
      <Paragraph>Find Babysitters Online for All Occasions</Paragraph>
      <ButtonGetStarted>Get started<ArrowUpRight/></ButtonGetStarted>
        </HomeContainer>
        </BackgroundImg>
    </Container>
  )
}

export default Home