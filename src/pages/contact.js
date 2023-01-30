import React from 'react';
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import FilmoviList from '../components/FilmoviList'
import SEO from '../components/SEO'


const Contact = ({data}) => {

    const filmovi = data.allContentfulFilm.nodes

    return (
        <Layout>
        <SEO title="Preporuka"/>
            <main className='page'>
                <section className='contact-page'>
                    <article className="contact-info">
                        <h3>Preporuka za Film</h3>
                        <p>Imate li neku želju za film?</p>
                        <p>Slobodno nam pošaljite!</p>
                        <p>Potrudićemo se da u najkraćemo roku ispunimo Vašu želju!</p>
                    </article>

                    <article>
                        <form className="form contact-form"
                              action="https://formspree.io/f/xbjedkoo"
                              method="POST">
                          <div className="form-row">
                            <label htmlFor="name">Vaše ime</label>
                            <input type="text" name="name" id="name" />
                          </div>
                          {/*<div className="form-row">*/}
                          {/*  <label htmlFor="email">your email</label>*/}
                          {/*  <input type="text" name="email" id="email" />*/}
                          {/*</div>*/}
                          <div className="form-row">
                            <label htmlFor="message">Film</label>
                            <textarea name="message" id="message"></textarea>
                          </div>
                          <button type="submit" className="btn block">
                            Pošalji
                          </button>
                        </form>
                    </article>
                </section>

                <section className="featured-recipes">
                    <h5>Pogledaj nove naslove</h5>
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
        vrstaFilma
        slikaFilma {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`




export default Contact