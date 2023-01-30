import React from 'react';
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import setupTags from '../utils/setupTags'
import slugify from 'slugify'
import SEO from '../components/SEO'


const Tags = ({data}) => {
    const newTags = setupTags(data.allContentfulFilm.nodes)

    return (
        <Layout>
            <SEO title="Žanrovi" />
            <main className="page">
                <section className="tags-page">
                    {newTags.map((tag, index) => {
                        const [text, value] = tag

                        const slug = slugify(text, {lower:true})

                        return (
                            <Link to={`/tags/${slug}`} key={index} className='tag'>
                                <h5>{text}</h5>
                                <p>{value} film</p>
                            </Link>
                        )
                    })}
                </section>
            </main>

        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulFilm {
      nodes {
        tags {
          zanr
        }
      }
    }
  }
`

export default Tags