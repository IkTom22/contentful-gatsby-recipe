import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Gallery from '../examples/Gallery'

const testing = () => {
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}

export default testing
