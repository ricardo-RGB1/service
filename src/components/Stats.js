import React, { useEffect } from "react"
import styled from "styled-components"
import { RiGovernmentFill } from "react-icons/ri"
import { BsGlobeAmericas } from "react-icons/bs"
import { IoSchool } from "react-icons/io5"
import { FaBuilding } from "react-icons/fa"
import Aos from "aos"
import "aos/dist/aos.css"

const StatsData = [
  {
    icon: <FaBuilding />,
    title: "501(c)(3)",
    desc: "Tax-exempt status pending organizations.",
  },
  {
    icon: <RiGovernmentFill />,
    title: "Gov't, Hospice, State-Level",
    desc: "Government Organizations, Hospices & Hospitals, State-Level Tax Exempt.",
  },
  {
    icon: <IoSchool />,
    title: "Schools",
    desc: "Public and Private K-12, Public and Private Universities.",
  },
  {
    icon: <BsGlobeAmericas />,
    title: "Non-US NGOs",
    desc: "Non-Governmental Organizations.",
  },
]

const Stats = () => {
  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <StatsContainer>
      <Heading
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        Recruiting Solutions for Businesses and Nonprofits
      </Heading>
      <Wrapper>
        {StatsData.map((item, index) => {
          return (
            <StatsBox
              key={index}
              data-aos="fade-right"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </StatsBox>
          )
        })}
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats

// STYLED COMPONENTS ********************************************

const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`

const Heading = styled.h1`
  color: #201e20;
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
  margin: 3rem 0;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 2rem 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #eea47f;
`

const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
  color: #201e20;
`

const Description = styled.p`
  font-size: 1 rem;
  color: #3b3b3bc9;
`
