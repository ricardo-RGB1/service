import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Aos from "aos"
import "aos/dist/aos.css"

const Testimonials = () => {
  useEffect(() => {
    Aos.init({})
  }, [])

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["sean", "sarah"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <TestimonialsContainer>
      <TopLine
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        Testimonials
      </TopLine>
      <Description
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        What People are Saying
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="1200"
          >
            <h3>Sarah Kin</h3>
            <p>
              "It's been incredibly rewarding to serve my community. I am able
              to help once a week and get to help in a variety of different
              roles."
            </p>
          </Testimonial>
          <Testimonial
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            <h3>Sean Michaels</h3>
            <p>
              "It was so easy to sign up on Service Match. They knew exactly
              what I wanted and found a great place for me to volunteer."
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          {data.allFile.edges.map((image, key) => (
            <Images
              key={key}
              src={image.node.childImageSharp.fluid.src}
              fluid={image.node.childImageSharp.fluid}
            />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

// Styled Components ******************************************************

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #faf9eb;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`

const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
  font-family: "fenwick", sans-serif;
`

const Description = styled.h2`
  color: #201e20;
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(2.2rem, 5vw, 2rem);
  /* font-weight: bold; */
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ColumnOne = styled.div`
  display: grid;
  margin-bottom: 2rem;
  grid-template-rows: 1fr 1fr;
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    color: #3b3b3bc9;
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 400;
  }
`

const Images = styled.img`
  border-radius: 5px;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;

  // use media queries to make images responsive and smaller on laptop and desktop screens
`

// End Styled Components ******************************************************
