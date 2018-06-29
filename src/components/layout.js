import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import theme from '../utils/main-theme'
import './layout.css'

import Header from '../components/header'
import Container from '../components/container'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <main>
      <Helmet
        meta={[
          { name: 'description', content: 'Sample ' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header siteTitle="Gatsby" />
      <Container>{children}</Container>
    </main>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
