import React from 'react'
import Header from '../../Components/Header'
import { ArrowUpRight, ButtonGetStarted, Container, HomeContainer, Paragraph, Title } from './HomeStyled'


const Home = () => {
  return (

    <Container>
      <Header />
      <HomeContainer>
       <Title>Make Life Easier for the Family:</Title>
      <Paragraph>Find Babysitters Online for All Occasions</Paragraph>
      <ButtonGetStarted>Get started<ArrowUpRight/></ButtonGetStarted>
    </HomeContainer>
    </Container>
  )
}

export default Home