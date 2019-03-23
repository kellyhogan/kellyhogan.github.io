import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout-Index.js"
import SEO from "../components/Seo"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>1 Now go build something great.</p>
      <p>2 Now go build something great.</p>
      <p>3 Now go build something great.</p>
      <p>4 Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </>
)

export default IndexPage
