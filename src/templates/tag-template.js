import React from 'react'
import { graphql } from 'gatsby'
import FilmoviList from '../components/FilmoviList'
import Layout from '../components/Layout'
import SEO from '../components/SEO'


const TagTemplate = ({ data, pageContext }) => {
    const filmovi = data.allContentfulFilm.nodes

    return (
        <Layout>
            <SEO title={pageContext.tag} />
            <main className='page' >
                <h2>{ pageContext.tag }</h2>

                <div className="tag-recipes">
                    <FilmoviList filmovi={filmovi} />
                </div>
            </main>
        </Layout>
    )
}

export const query = graphql`
    query GetMovieByTag($tag:String) {
      allContentfulFilm(filter: {tags: {zanr: {eq: $tag}}}) {
        nodes {
          naslov
          vrstaFilma
          imdbOcena
          godina
          id
          slikaFilma {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
`

export default TagTemplate