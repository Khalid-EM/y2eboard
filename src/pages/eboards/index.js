import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Eboard from "../../components/eboard"
import {
  bannerpicY2eboard,
  sectionBoard,
  subtitleBoard,
  eboards,
  descriptionBoard,
} from "../../page.module.css"

const EboardsPage = ({
  data: {
    allWpEboard: { edges: eboardsInfo },
    wpPage: { eboardsPage },
  },
}) => {
  const image = getImage(eboardsPage.headerEboards.image.localFile)
 // console.log("LonboardImg", image);

 
  //console.log("EboardsInfo", eboardsInfo);
  //console.log("EboardsPage", eboardsPage);
  return (

    <Layout pageTitle="Eboards of Y2Quakz">
      <GatsbyImage
        className={bannerpicY2eboard}
        image={image}
        alt={eboardsPage.headerEboards.image.altText}
      />
      <div className={sectionBoard}>
        <h2 className={subtitleBoard}>{eboardsPage.headerEboards.title}</h2>
        
        <summary className={descriptionBoard}>{eboardsPage.headerEboards.description}</summary>

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
              childImageSharp {
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