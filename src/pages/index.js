import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout-Index.js"
import SEO from "../components/Seo"

import About from "../components/About.js"
import Projects from "../components/Projects.js"
import Contact from "../components/Contact.js"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <About id="about"/>
      <Projects id="projects"/>
      <Contact id="contact"/>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </>
)

export default IndexPage
