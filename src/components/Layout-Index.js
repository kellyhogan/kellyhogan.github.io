/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import Image from "./Image"
import Footer from "./Footer"

import "./Layout-Index.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQueryIndex {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="wrapper">
        <Navbar />
        <div className="header-container">
          <div className="centered">
            <h1 className="intro">
              Hello, I'm <span style={{color:"#ff5b4d"}}>Kelly Hogan</span>.
              <br></br>
              I'm a Software Developer.
            </h1>        
          </div>
          <Image />
        </div>
        <div className="content">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
