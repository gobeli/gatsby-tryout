import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  padding: ${p => p.theme.spacing.bigger} ${p => p.theme.spacing.small};
  box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);
`

const HeaderTitle = styled.h3`
  margin: 0;
`

const HeaderLink = styled(Link)`
  color: ${p => p.theme.colors.main};
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderTitle>
      <HeaderLink to="/">{siteTitle}</HeaderLink>
    </HeaderTitle>
  </HeaderContainer>
)

export default Header
