import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { SiImdb } from "react-icons/si";
import Layout from '../components/Layout'
import slugify from 'slugify'
import SEO from '../components/SEO'


const FilmTemplate = ({data}) => {

    const {
        naslov,
        originalniNaslov,
        vrstaFilma,
        godina,
        imdbOcena,
        opisRadnje:{opisRadnje},
        zanr,
        slikaFilma,
    } = data.contentfulFilm

    const pathToImage = getImage(slikaFilma)

    // const {zanr, linkPreuzimanje} = tags

    return (
        <Layout>
            <SEO title={naslov} description={opisRadnje} />
            <main className='page'>
                <div className='recipe-page'>
                    {/*hero*/}
                    <section className="recipe-hero">
                        <GatsbyImage
                            image={pathToImage}
                            alt={naslov}
                            className='about-img'
                        />
                        <article className="recipe-info film-info">
                            <h2>{naslov}</h2>
                            <h5>{originalniNaslov}</h5>
                            <p>{godina} | <SiImdb /> {imdbOcena}</p>
                            <p>{vrstaFilma}</p>
                            <p>{opisRadnje}</p>

                            <a href={zanr} className="btn block">Preuzmi</a>

                            <div className="recipe-icons">

                            </div>
                        </article>
                    </section>

                    {/*rest of content*/}
                    <section className="recipe-content">

                    </section>
                </div>
            </main>
        </Layout>
    )
}

export const query = graphql`
  query ($naslov: String) {
    contentfulFilm(naslov: {eq: $naslov}) {
      naslov
      originalniNaslov
      vrstaFilma
      godina
      imdbOcena
      opisRadnje {
        opisRadnje
      }
      zanr
      tags {
        zanr
        radnja
        linkPreuzimanje
      }
      slikaFilma {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`


export default FilmTemplate