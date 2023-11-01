import React from "react"
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import AllFilmovi from '../components/AllFilmovi'
import SEO from '../components/SEO'
import FilmoviList from "../components/FilmoviList";
import {graphql} from "gatsby";



const  Home = ({data}) => {

  const filmovi = data.allContentfulFilm.nodes

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
                          <p>Svi filmovi su sa prevodom.</p>
                      </div>
                  </div>
              </header>
              
              <section className="featured-recipes">

                {filmovi.length > 0 && (
                  <>
                    <h5 className='novi-film-naslov'>Novi naslovi</h5>
                    <FilmoviList filmovi={filmovi} />
                  </>
                )}

                <h5 className='novi-film-naslov'>Svi filmovi</h5>
                <AllFilmovi />

              </section>
          </main>
      </Layout >
  )
}

export const query = graphql`
  query {
    allContentfulFilm(filter: {noviFilm: {eq: true}}) {
      nodes {
        id
        imdbOcena
        godina
        naslov
        opisRadnje {
          opisRadnje
        }
        originalniNaslov
        tags {
          linkPreuzimanje
          zanr
        }
        vrstaFilma
        slikaFilma {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`
export default Home
