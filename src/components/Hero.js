import React, { useEffect } from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Video from "../assets/videos/bg.mp4"
import Aos from "aos"
import "aos/dist/aos.css"

const Hero = () => {
  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            Find The Right Service Opportunity In Your Area
          </HeroH1>
          <Button
            to="/getstarted"
            big="true"
            primary="true"
            round="true"
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-duration="1000"
          >
            Get Started
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

// STYLED COMPONENTS ********************************************

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  height: 100vh;
  margin-top: -80px;
  position: relative;
  z-index: 1;
  color: #fff;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-width: 100%;
  position: absolute;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  font-weight: 400;
  letter-spacing: 1px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
`
