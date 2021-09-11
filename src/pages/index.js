import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import AllRecepies from '../components/AllRecepies'

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="flour and eggs"
            layout="fullWidth"
            placeholder="tracedSVG"
            className="hero-img"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecepies />
      </main>
    </Layout>
  )
}
