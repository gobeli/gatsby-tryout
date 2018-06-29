import styled from 'styled-components'

export default styled.div`
  width: 80%;
  margin: 0 auto;
  padding: ${p => p.theme.spacing.small};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
