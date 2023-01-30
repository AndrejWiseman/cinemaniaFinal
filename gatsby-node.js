

const path = require('path')
const slugify = require('slugify')

exports.createPages = async({ graphql, actions }) => {
    const {createPage} = actions

    const result = await graphql(`
        query GetMovies {
          allContentfulFilm {
            nodes {
              tags {
                zanr
              }
            }
          }
        }
    `)

    result.data.allContentfulFilm.nodes.forEach(film => {
        film.tags.zanr.forEach(tag => {

            const tagSlug = slugify(tag, {lower:true})

            createPage({
                path: `/tags/${tagSlug}`,
                component: path.resolve(`src/templates/tag-template.js`),
                context: {
                    tag: tag,
                },
            })
        })
    })
}
