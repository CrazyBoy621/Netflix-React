import React from "react"
import styled from "styled-components"
import Header from "../components/Header"

const Home = () => {
  return (
    <Container>
      <Header />
    </Container>
  )
}

export default Home

const Container = styled.div`
  background: #222;
`
