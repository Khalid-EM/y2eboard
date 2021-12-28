import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const EboardPage = ({data: {wpEboard: {eboardFields: eboard}}}) => {
  const image = getImage(eboard.picture.localFile)
  

  return (
    <Layout pageTitle="Eboard Template">
    <div>
      <h1>{eboard.name}</h1>
      <GatsbyImage image={image} alt={eboard.picture.altText} />
      <div dangerouslySetInnerHTML={{__html: eboard.description}} />
      <p>board: {eboard.board}</p>
      <p>maxLoad: {eboard.maxLoad}</p>
      <p>maxSpeed: {eboard.maxSpeed}</p>
      <p>price: € {eboard.price}</p>
      <p>range: {eboard.range} km</p>
      <p>wheels: {eboard.wheels}</p>
    </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpEboard(id: {eq: $id}) {
      eboardFields {
        name
        discription
        board
        maxLoad
        maxSpeed
        price
        range
        wheels
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 500)
            }
          }
        }
      }
    }
  }
`

export default EboardPage

