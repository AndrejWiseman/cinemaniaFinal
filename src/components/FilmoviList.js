import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'


const FilmoviList = ({ filmovi=[] }) => {
    return (
        <div className='recipes-list'>
            {
                filmovi.map((film) => {
                    const {id, naslov, slikaFilma, godina, imdbOcena} = film
                    const pathToImage = getImage(slikaFilma)
                    const slug = slugify(naslov, {lower:true})
                    return <Link key={id} to={`/${slug}`} className='recipe'>
                        <GatsbyImage image={pathToImage} className='recipe-img' alt={naslov} />
                        <h5>{naslov}</h5>
                        <p>{godina} | {imdbOcena}</p>
                    </Link>
                })
            }
        </div>
    )
}

export default FilmoviList