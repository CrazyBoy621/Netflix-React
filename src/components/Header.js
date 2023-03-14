import React, { useState } from "react"
import styled from "styled-components"
import Logo from "./Logo"

const Header = () => {
  const [language, setLanguage] = useState("English")

  const handleLanguageChange = e => {
    setLanguage(e.target.value)
  }

  return (
    <HeaderContainer>
      <Logo />
      <DropDown value={language} onChange={handleLanguageChange}>
        <option value="English">English</option>
        <option value="Russian">Russian</option>
      </DropDown>
      <SignIn>Sign In</SignIn>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  height: 85px;
  margin: auto;
  gap: 25px;
`
const DropDown = styled.select`
  margin-left: auto;
  padding: 6px 36px;
  font-size: 1rem;
  font-weight: 400;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
`
const SignIn = styled.button`
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  transition-duration: 250ms;
  transition-property: background-color, border-color;
  transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);
  vertical-align: text-top;
  width: auto;
  font-size: 0.875rem;
  font-weight: 500;
  min-height: 2rem;
  padding: 0.25rem 1rem;
  background: rgb(229, 9, 20);
  color: rgb(255, 255, 255);

  &:hover {
    background: #9a0e14;
  }
`
