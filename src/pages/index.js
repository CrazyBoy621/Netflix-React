import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Home from "./Home"

function IndexPage() {
  return (
    <Layout>
      <Seo />
      <Home />
    </Layout>
  )
}

export default IndexPage
