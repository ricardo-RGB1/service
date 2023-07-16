import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { FaTimes } from "react-icons/fa"
import { MenuData } from "../data/MenuData"
import { Link } from "gatsby"

const Dropdown = ({isOpen, toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle}>
        <CloseIcon  />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {MenuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" to="/volunteer">
            Get Started
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown

// STYLED COMPONENTS ******************************************************

const DropdownContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center; 
  top: 0;
  left: 0;
  transition: 0.4s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  
`

const CloseIcon = styled(FaTimes)`
  color: #79A7D3;

`

const DropdownWrapper = styled.div`
  color: #fff;
`

const DropdownLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #201E20;
  cursor: pointer;
  margin-bottom: 2rem;

`

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
