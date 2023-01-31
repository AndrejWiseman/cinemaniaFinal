import React from 'react'
import { Link } from 'gatsby'
import { FaImdb } from "react-icons/fa";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

// import { imdb_icon } from '../assets/css/FilmoviList.module.css'
import * as filmoviListStyle from '../assets/css/FilmoviList.module.css'


const FilmoviList = ({ filmovi=[] }) => {
    // return (
    //     <div className='recipes-list'>
    //         {
    //             filmovi.map((film) => {
    //                 const {id, naslov, slikaFilma, godina, imdbOcena} = film
    //                 const pathToImage = getImage(slikaFilma)
    //                 const slug = slugify(naslov, {lower:true})
    //                 return (
    //                     <Link key={id} to={`/${slug}`} className='recipe'>
    //                         <GatsbyImage image={pathToImage} className='recipe-img pocetna-slika-film' alt={naslov} />
    //                         <h5 className="film-pocetni-naslov">{naslov}</h5>
    //                         <p className="p-god-ocena">{godina} | <FaImdb className="imdb-icon" /> {imdbOcena}</p>
    //                     </Link>
    //                 )
    //             })
    //         }
    //     </div>
    // )



        return (
            <div className={filmoviListStyle.filmList}>
                {
                    filmovi.map((film) => {
                        const {id, naslov, slikaFilma, godina, imdbOcena} = film
                        const pathToImage = getImage(slikaFilma)
                        const slug = slugify(naslov, {lower:true})
                        return (
                            <Link key={id} to={`/${slug}`} className={filmoviListStyle.filmLink}>
                                <GatsbyImage image={pathToImage} className={filmoviListStyle.filmSlika} alt={naslov} />
                                <h5 className={filmoviListStyle.filmNaslov}>{naslov}</h5>
                                <p className={filmoviListStyle.pGodOcena}>{godina} | <FaImdb className={filmoviListStyle.imdbIcon} /> {imdbOcena}</p>
                            </Link>
                        )
                    })
                }
            </div>
        )

}

export default FilmoviList