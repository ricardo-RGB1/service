import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { MenuData } from "../data/MenuData"
import { Button } from "./Button"

const Header = ({toggle}) => {

  return (
    <Nav>
      <NavLogo to="/">ServiceMatch</NavLogo>
      <Bars onClick={toggle} />
      <NavMenu>
        {MenuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/signup" primary="true" round='true'>
          Get Started
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header



// STYLED COMPONENTS ********************************************

const Nav = styled.nav`
  height: 80px;
  margin-top: -80px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 9;
  /* padding: 0.5rem calc((100vw - 1300px) / 2); */


  @media screen and (max-width:960px) {
        transition: 0.8s all ease;
    }
`

const NavLogo = styled(Link)`
  color: #201E20;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  text-decoration: none;
  font-family: "fenwick", sans-serif;
  font-weight: 300;
  font-style: normal;

 

  @media screen and (max-width: 920px) {
    font-size: 1.3rem;
  }


`

const NavLink = styled(Link)`
  color: #201E20;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 400;



  &.active {
    color: #15cdfc;
  }
`

const Bars = styled(FaBars)`
  display: none;
  color: #79A7D3;

  @media screen and (max-width: 976px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }

`

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  width: 550px;


  @media screen and (max-width: 920px) {
    display: none;
  }

`

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  z-index: 999;

  

  @media screen and (max-width: 920px) {
    display: none;
  }

`

 