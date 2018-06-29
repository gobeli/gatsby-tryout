import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const BookTemplate = ({ data }) => (
  <Layout>
    <h1>
      {data.strapiBook.title} - {data.strapiBook.author}
    </h1>
  </Layout>
)

export const query = graphql`
  query BookTemplate($id: String!) {
    strapiBook(id: { eq: $id }) {
      title
      author
    }
  }
`

export default BookTemplate
