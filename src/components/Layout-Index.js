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
import Home from "./Home"
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
        <Home id="home"/>
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
