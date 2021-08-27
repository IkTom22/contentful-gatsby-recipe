import React from "react"
import Layout from "../components/Layout"
import * as aboutStyles from "../examples/about.module.css"

export default function about() {
  return (
    <Layout>
      <div className={aboutStyles.page}>
        <h1>about page</h1>
      </div>
    </Layout>
  )
}
