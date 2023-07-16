import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo" 
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"

const About = () => (
  <Layout>
    <Seo title="About Us" />
    <Testimonials />
    <Stats />
  </Layout> 
)


export default About
 