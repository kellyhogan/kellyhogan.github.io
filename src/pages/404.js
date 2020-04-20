import React from "react"

import "../components/404.css"
import SEO from "../components/Seo"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import NotFoundImage from "../components/NotFoundImage"

const NotFoundPage = () => (
  <div>
    <div className="not-found-wrapper">
      <SEO title="404: Not found" />
      <h1>Page not found</h1>
      <p>Oops, you just hit a route that doesn&#39;t exist...</p>
      <Link 
        to="/"
        id="return-home-box"
      >
        Click Here! 
      </Link>
    </div>
    <NotFoundImage />
    <Footer />
  </div>
)

export default NotFoundPage
