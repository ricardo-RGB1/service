import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import GetStarted from "../components/GetStarted"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"




const IndexPage = () => (


  <Layout>
    <Seo title="Home" />
    <Hero />
    <GetStarted />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
