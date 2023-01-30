import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'


const query = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

const SEO = ({ title, description }) => {

    const {site} = useStaticQuery(query)
    const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{ lang:"sr" }}
            title={`${title} | ${site.siteMetadata.title}`}
            meta={[{name:`description`, content: metaDescription }]}
        >

        </Helmet>
    )
}



export default SEO