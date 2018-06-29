import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Card from '../components/card'
import Layout from '../components/layout'
import styled from 'styled-components'

const Books = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, 200px);
  align-content: stretch;
`

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Books</h1>
    <Books>
      {data.allStrapiBook.edges.map(document => (
        <Link to={`/book/${document.node.id}`} key={document.node.id}>
          <Card
            title={`${document.node.title} - ${document.node.genre &&
              document.node.genre.genre}`}
            imgUrl={document.node.image && document.node.image.url}
          />
        </Link>
      ))}
    </Books>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiBook {
      edges {
        node {
          id
          title
          image {
            url
          }
          genre {
            genre
          }
        }
      }
    }
  }
`
