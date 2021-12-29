import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Eboard from "../../components/eboard"
import {
  hero,
  section,
  subtitle,
  eboards,
  description,
} from "../../page.module.css"

const EboardsPage = ({
  data: {
    allWpEboard: { edges: eboardsInfo },
    wpPage: { eboardsPage },
  },
}) => {
  const image = getImage(eboardsPage.headerEboards.image.localFile)

  console.log(image);

  //console.log(eboardsPage);


  return (

    <Layout pageTitle="Eboards of Y2Quakz">
      <GatsbyImage
        className={hero}
        image={image}
        alt={eboardsPage.headerEboards.image.altText}
      />
      <div className={section}>
        <h2 className={subtitle}>{eboardsPage.headerEboards.title}</h2>
        <div
          className={description}
          dangerouslySetInnerHTML={{
            __html: eboardsPage.headerEboards.description,
          }}
        />
        <div className={eboards}>
          {eboardsInfo.map(({ node: eboard }) => (
            <Eboard key={eboard.id} slug={eboard.slug} eboard={eboard} />
          ))}
        </div>
      </div>
    </Layout>
  )
}


export const query = graphql`
query{
  wpPage(slug: {eq: "eboards"}) {
    eboardsPage {
      headerEboards {
        description
        title
        image {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, quality: 100)
            }
          }
        }
      }
    }
  }
  allWpEboard {
    edges {
      node {
        eboardFields {
          name
          picture {
            localFile {
              childrenImageSharp {
                gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
              }
            }
            altText
          }
        }
        id
        slug
      }
    }
  }
}


`


export default EboardsPage