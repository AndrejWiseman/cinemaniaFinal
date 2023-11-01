import React from 'react'
import setupTags from '../utils/setupTags'
import { Link } from 'gatsby'
import slugify from 'slugify'

import { graphql, useStaticQuery } from 'gatsby'



const query = graphql`
query {
  allContentfulFilm {
    totalCount
  }
}
`


const TagList = ({ filmovi }) => {

    const data = useStaticQuery(query)
    const ukupno = data.allContentfulFilm.totalCount

    const newTags = setupTags(filmovi)
    

    return (
        <div className="tag-container">
            
            <h5>Broj filmova: {ukupno}</h5>
            <h4>Žanrovi</h4>
        

            <div className="tags-list">
                {newTags.map((tag, index) => {
                    const [text, value] = tag
                    const slug = slugify(text, {lower:true})



                    return (
                        <Link to={`/tags/${slug}`} key={index}>
                            {text} ({value})
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default TagList

