import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  headerHome,
  headerHomeInfo,
  headerHomePicture,
  headerHomeTitle,
  homeDiscription,
  CTAButton,
  sectionBoard,
  subtitleBoard,
  eboards,
} from "../../src/page.module.css"
import Eboard from "../components/eboard"


const IndexPage = ({
  data: {
    wpPage: { homePageFields },
  },
}) => {
  const image = getImage(homePageFields.headerHome.picture.localFile)


  console.log("LonboardImg" , image);
  
  return (
    <Layout>
      <h1 className={headerHomeTitle}>{homePageFields.headerHome.title}</h1>
      <div className={headerHome}>
        <div className={headerHomeInfo}>
          
          <summary className={homeDiscription}>{homePageFields.headerHome.description}</summary>

          <a className={CTAButton} target="__blank" href={homePageFields.callToAction.link}>
            {homePageFields.callToAction.linkText}
          </a>
        </div>
        <div>
          <GatsbyImage
            image={image}
            className={headerHomePicture}
            alt={homePageFields.headerHome.picture.altText}
          />
        </div>
      </div>


      <div className={sectionBoard}>
        <h2 className={subtitleBoard}>{homePageFields.featuredEboard.title}</h2>
        <p>{homePageFields.featuredEboard.description}</p>
        <div className={eboards}>
          {homePageFields.featuredEboard.eboards.map(eboard => (
            <Eboard key={eboard.id} slug={`eboards/${eboard.slug}`} eboard={eboard} />
          ))}
        </div>
      </div>

    </Layout>
  )
}

export const query = graphql`
query{
  wpPage(slug: {eq: "home"}) {
    homePageFields {
      headerHome {
        title
        description
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, height: 500)
            }
          }
        }
      }
      callToAction {
        link
        linkText
      }
      featuredEboard {
        eboards {
          ... on WpEboard {
            id
            slug
            eboardFields {
              name
              picture {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
                  }
                }
              }
            }
          }
        }
        title
        description
      }
    }
  }
}
`
export default IndexPage