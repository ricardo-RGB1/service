import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight"
import Aos from "aos"
import "aos/dist/aos.css"

const GetStarted = () => {
  useEffect(() => {
    Aos.init({})
  }, [])

  const data = useStaticQuery(graphql`
    query MyQuery {
      allServicesJson {
        edges {
          node {
            alt
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getServices() {
    const servicesArray = []
    data.allServicesJson.edges.forEach((item, index) => {
      servicesArray.push(
        <ProductCard
          key={index}
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <ProductImg
            src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProductInfo>
            <TextWrap>
              <ProductTitle>{item.node.name}</ProductTitle>
              <ChevronRight />
            </TextWrap>
          </ProductInfo>
        </ProductCard>
      )
    })
    return servicesArray
  }

  return (
    <ProductsContainer>
      <ProductsHeading>Services</ProductsHeading>
      <ProductWrapper>{getServices(data)}</ProductWrapper>
    </ProductsContainer>
  )
}

export default GetStarted

// STYLED COMPONENTS ****************************************npm install react-icons --save****

const ProductsContainer = styled.div`
  min-height: 75vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #000;
`

const ProductsHeading = styled.div`
  font-size: clamp(2.2rem, 5vw, 3rem);
  text-align: center;
  color: #201e20;
  margin: 3rem 0;
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 5px;
  transition: 0.2s ease;
  color: #000;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
    transition: 0.3s ease;
    /* box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2); */
  }
`

const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 5px;
  filter: brightness(100%);
  -o-object-fit: cover;
  object-fit: cover;
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 360px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  padding: 3px 8px;
  top: 375px;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.13);
  border-radius: 5px;
`

const ProductTitle = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
  margin-left: 0.1rem;
  color: #fcf6f5;
  font-family: "articulat-cf", sans-serif;
  letter-spacing: 1px;
`

// style the BsChevronRight icon
const ChevronRight = styled(BsChevronRight)`
  color: #fcf6f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin-left: 0.5rem;
`

// END STYLED COMPONENTS ********************************************
