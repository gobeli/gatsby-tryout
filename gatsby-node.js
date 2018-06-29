const path = require(`path`)
const url = require('url')
var helpers = require('./lib/helpers')

const bookQuery = `
{
  allStrapiBook {
    edges {
      node {
        id
        image {
          url
        }
      }
    }
  }
}`

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const getBooks = helpers.makeRequest(graphql, bookQuery).then(result => {
    // Create pages for each article.
    result.data.allStrapiBook.edges.forEach(async ({ node }) => {
      createPage({
        path: `/book/${node.id}`,
        component: path.resolve(`src/templates/book.js`),
        context: {
          id: node.id,
        },
      })

      if (node.image && node.image.url) {
        const uri = url.parse(`http://localhost:1337${node.image.url}`)
        const filePath = path.join(__dirname, 'public', uri.pathname)
        helpers.ensureDirectoryExistence(filePath)
        await helpers.downloadImage(uri.href, filePath)
      }
    })
  })

  // Query for articles nodes to use in creating pages.
  return getBooks
}
