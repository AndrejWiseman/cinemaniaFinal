import * as React from "react"
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import AllFilmovi from '../components/AllFilmovi'
import SEO from '../components/SEO'


export default function Home() {
  return (
      <Layout >
          <SEO title="Početna" />
          <main className='page'>
              <header className='hero'>
                  <StaticImage
                      src='../assets/images/main-1.jpg'
                      alt='hero'
                      className='hero-img'
                      placeholder='blurred'
                      layout='fullWidth'
                  />

                  <div className="hero-container">
                      <div className="hero-text">
                          <h1>CineManiA</h1>
                          <h4>Filmski klasici</h4>
                      </div>
                  </div>
              </header>

              <AllFilmovi />

          </main>
      </Layout >
  )
}
