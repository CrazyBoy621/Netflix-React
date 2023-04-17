import React from "react"
import styled from "styled-components"
import Header from "../components/Header"

const Home = () => {
  return (
    <Container>
      <Background src={"/images/home background.jpg"} />
      <Header />
      <TitleContainer>
        <Title>Unlimited movies, TV shows, and more.</Title>
        <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
        <FormContainer>
          <FormTitle>
            Ready to watch? Enter your email to create or restart your
            membership.
          </FormTitle>
        </FormContainer>
      </TitleContainer>
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  height: 700px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) -10%,
    rgba(0, 0, 0, 0.3) 55%,
    rgba(0, 0, 0, 1) 105%
  );
`

const Background = styled.img`
  width: 100%;
  height: 700px;
  transform: scale(1.25) translateY(-10%);
  object-fit: cover;
  z-index: -1;
  position: fixed;
  left: 0;
  top: 0;
`

const TitleContainer = styled.div`
  color: white;
`
const Title = styled.h1``
const SubTitle = styled.p``
const FormContainer = styled.div``
const FormTitle = styled.h3``
