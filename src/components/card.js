import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);
  height: 100%;
`
const CardImage = styled.div`
  width: 100%;
  height: 175px;
  background: url(${p => p.src}) bottom center no-repeat;
  background-size: contain;
  margin: 0;
`
const CardTitle = styled.h3`
  margin: 0;
  text-decoration: none;
  &:hover {
    color: inherit;
  }
`
const CardContent = styled.div`
  padding: ${p => p.theme.spacing.big};
  display: flex;
  align-items: flex-end;
  height: 100%;
`

const Card = ({ title, imgUrl }) => (
  <CardContainer>
    {imgUrl ? <CardImage src={imgUrl} alt={title} /> : ''}
    <CardContent>
      <CardTitle>{title}</CardTitle>
    </CardContent>
  </CardContainer>
)

export default Card
