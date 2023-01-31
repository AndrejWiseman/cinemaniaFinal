import React from 'react'
import TagList from './TagList'
import FilmoviList from './FilmoviList'
import { graphql, useStaticQuery } from 'gatsby'


 const query = graphql`
  query {
    allContentfulFilm {
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



const AllFilmovi = () => {

    const data = useStaticQuery(query)
    const filmovi = data.allContentfulFilm.nodes

    return (
        <section className='recipes-container'>

            <TagList filmovi={filmovi} />
            <FilmoviList filmovi={filmovi} />
        </section>
    )
}

export default AllFilmovi