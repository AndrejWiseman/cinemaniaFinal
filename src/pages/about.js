import React from 'react';
import Layout from '../components/Layout'
import { StaticImage} from "gatsby-plugin-image";
import { Link, graphql } from 'gatsby'
import FilmoviList from '../components/FilmoviList'
// import Filmovi from "./filmovi";
import SEO from '../components/SEO'



const About = ({data: {allContentfulFilm:{nodes:filmovi}}}) => {


    return (
        <Layout>
            <SEO title="O nama" description="Ovo je stranica O nama" />
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>O nama.</h2>
                        <p>Dobro došli na CineManiA!</p>
                        <p>Svi filmski klasici na jednom mestu.</p>
                        <p>Svakim danom je naša filmska baza sve veća i veća.</p>
                        <p>Potrudićemo se da ispunimo sve zahteve pravim filmoljupcima!</p>

                        <Link to="/contact" className='btn'>
                            Preporuči
                        </Link>
                    </article>
                    <StaticImage
                        src='../assets/images/main.jpg'
                        alt='about'
                        className='about-img'
                        placeholder='blurred'
                    />
                </section>
                <section className="featured-recipes">
                    <h5>Izabrano</h5>
                    <FilmoviList filmovi={filmovi} />
                </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
  query {
    allContentfulFilm(filter: {featured: {eq: true}}) {
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
        zanr
        linkZaPreuzimanje
        noviFilm
        vrstaFilma
        slikaFilma {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default About