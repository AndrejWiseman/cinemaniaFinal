import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaImdb } from "react-icons/fa";
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import * as filmTemplate from '../assets/css/FilmTemplate.module.css'


const FilmTemplate = ({data}) => {
    const {
        naslov,
        originalniNaslov,
        vrstaFilma,
        godina,
        imdbOcena,
        opisRadnje:{opisRadnje},
        linkZaPreuzimanje,
        slikaFilma,
    } = data.contentfulFilm

    const pathToImage = getImage(slikaFilma)

    return (
        <Layout>
            <SEO title={naslov} description={opisRadnje} />
            <main className='page'>
                <div className='recipe-page'>
                    {/*hero*/}
                    <section className={filmTemplate.templateHero}>
                        <GatsbyImage
                            image={pathToImage}
                            alt={naslov}
                            className={filmTemplate.slikaTemplate}
                        />
                        <article className="recipe-info film-info">
                            <div className={filmTemplate.filmNaziv}>
                                <h2>{naslov}</h2>
                                <h5>Originalni naziv: <em>{originalniNaslov}</em></h5>
                            </div>

                            <div className={filmTemplate.godImdb}>
                                <p className={filmTemplate.godF}>{godina}</p>
                                <p className={filmTemplate.vrstaF}>{vrstaFilma}</p>
                                <p className={filmTemplate.imdbIkona}><FaImdb className="imdb-icon" /> {imdbOcena}</p>
                            </div>

                            <a href={linkZaPreuzimanje} className="btn block preuzmi-dugme">Preuzmi film</a>

                            <div className="recipe-icons">

                            </div>
                        </article>
                    </section>

                    {/*rest of content*/}
                    <section className={filmTemplate.opisFilma}>
                        <h5>Sadržaj:</h5>
                        <p>{opisRadnje}</p>
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
      linkZaPreuzimanje
      noviFilm
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






// const FilmTemplate = ({data}) => {
//
//     const {
//         naslov,
//         originalniNaslov,
//         vrstaFilma,
//         godina,
//         imdbOcena,
//         opisRadnje:{opisRadnje},
//         linkZaPreuzimanje,
//         slikaFilma,
//     } = data.contentfulFilm
//
//     const pathToImage = getImage(slikaFilma)
//
//     return (
//         <Layout>
//             <SEO title={naslov} description={opisRadnje} />
//             <main className='page'>
//                 <div className='recipe-page'>
//                     {/*hero*/}
//                     <section className="recipe-hero">
//                         <GatsbyImage
//                             image={pathToImage}
//                             alt={naslov}
//                             className='about-img templ-slika'
//                         />
//                         <article className="recipe-info film-info">
//                             <div className="film-naziv">
//                                 <h2>{naslov}</h2>
//                                 <h5>Originalni naziv: <em>{originalniNaslov}</em></h5>
//                             </div>
//
//                             <div className="god-imdb">
//                                 <p className="go-f">{godina}</p>
//                                 <p className="vr-f">{vrstaFilma}</p>
//                                 <p className="p-god-ocena"><FaImdb className="imdb-icon" /> {imdbOcena}</p>
//                             </div>
//
//                             <p>{opisRadnje}</p>
//
//                             {/*<a href={zanr} className="btn block">Preuzmi</a>*/}
//                             <a href={linkZaPreuzimanje} className="btn block">Preuzmi</a>
//
//                             <div className="recipe-icons">
//
//                             </div>
//                         </article>
//                     </section>
//
//                     {/*rest of content*/}
//                     <section className="recipe-content">
//
//                     </section>
//                 </div>
//             </main>
//         </Layout>
//     )
// }
//
// export const query = graphql`
//   query ($naslov: String) {
//     contentfulFilm(naslov: {eq: $naslov}) {
//       naslov
//       originalniNaslov
//       vrstaFilma
//       godina
//       imdbOcena
//       linkZaPreuzimanje
//       noviFilm
//       opisRadnje {
//         opisRadnje
//       }
//       zanr
//       tags {
//         zanr
//         radnja
//         linkPreuzimanje
//       }
//       slikaFilma {
//         gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
//       }
//     }
//   }
// `
//
//
// export default FilmTemplate