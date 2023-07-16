import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>ServiceMatch</h1>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Company</FooterLinkTitle>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/careers">Careers</FooterLink>
          <FooterLink to="/press">Press</FooterLink>
          <FooterLink to="/livemap">Live Map</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Resources</FooterLinkTitle>
          <FooterLink to="/help">Help</FooterLink>
          <FooterLink to="/nlc">Nonprofit Learning Center</FooterLink>
          <FooterLink to="/blog">Blog - Engaging Volunteers</FooterLink>
          <FooterLink to="/contactus">Contact Us</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Top Causes</FooterLinkTitle>
          <FooterLink to="/community">Community</FooterLink>
          <FooterLink to="/childrenandyouth">Children & Youth</FooterLink>
          <FooterLink to="/seniors">Seniors</FooterLink>
          <FooterLink to="/health">Health & Medicine</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

// STYLED COMPONENTS ********************************************

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #faf9eb;
  height: 50vh;
`

const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #201e20;
    font-family: "fenwick", sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  align-items: center;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
  color: #201e20;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled.a`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #201e20;

  &:hover {
    color: #eea47f;
    transition: 0.3s ease-out;
  }
`

// Compare this snippet from src/components/Footer.js:
