import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'


const query = graphql`
  query {
    site {
      siteMetadata {
        description
        title
        keywords
      }
    }
  }
`

const SEO = ({ title, description, keywords }) => {

    const {site} = useStaticQuery(query)
    const metaDescription = description || site.siteMetadata.description
    const metaKeywords = keywords || site.siteMetadata.keywords

    return (
        <Helmet
            htmlAttributes={{ lang:"sr" }}
            title={`${title} | ${site.siteMetadata.title}`}
            meta={[{name:`description`, content: metaDescription }, {name:`keywords`, content: metaKeywords }]}
            
        >

        </Helmet>
    )
}



export default SEO