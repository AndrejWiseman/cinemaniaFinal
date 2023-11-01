import React, { useState } from 'react'
import TagList from './TagList'
import FilmoviList from './FilmoviList'
import { graphql, useStaticQuery } from 'gatsby'
import '../assets/css/pretraga.css'
import { BsSearch } from "react-icons/bs";


 const query = graphql`
  query {
    allContentfulFilm {
      totalCount
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

  const [searchTerm, setSearchTerm] = useState("");


    const data = useStaticQuery(query)
    const filmovi = data.allContentfulFilm.nodes


    const filteredFilmovi = filmovi.filter(
      (film) =>
        film.naslov.toLowerCase().includes(searchTerm.toLowerCase()) ||
        film.originalniNaslov.toLowerCase().includes(searchTerm.toLowerCase())
    );
    



    return (

      <>

        <div className="boxPretraga">
          
          <BsSearch className='ikona' />
          <input
            className='pretraga'
            id="searchbar"
            type="text"
            name="search"
            placeholder="Pretraži film po Naslovu ili Originalnom naslovu"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            
          />
        
          
          
        </div>

        <section className='recipes-container'>

          <TagList filmovi={filteredFilmovi} />
          <FilmoviList filmovi={filteredFilmovi} />


            {/* <TagList filmovi={filmovi} />
            <FilmoviList filmovi={filmovi} /> */}
        </section>
        </>
    )
}

export default AllFilmovi


















// import React from 'react'
// import TagList from './TagList'
// import FilmoviList from './FilmoviList'
// import { graphql, useStaticQuery } from 'gatsby'


//  const query = graphql`
//   query {
//     allContentfulFilm {
//       nodes {
//         id
//         imdbOcena
//         godina
//         naslov
//         opisRadnje {
//           opisRadnje
//         }
//         originalniNaslov
//         tags {
//           linkPreuzimanje
//           zanr
//         }
//         zanr
//         vrstaFilma
//         slikaFilma {
//           gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
//         }
//       }
//     }
//   }
// `



// const AllFilmovi = () => {

//     const data = useStaticQuery(query)
//     const filmovi = data.allContentfulFilm.nodes

//     return (
//         <section className='recipes-container'>

//             <TagList filmovi={filmovi} />
//             <FilmoviList filmovi={filmovi} />
//         </section>
//     )
// }

// export default AllFilmovi