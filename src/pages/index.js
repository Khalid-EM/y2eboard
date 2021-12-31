import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  CTA,
  section,
  subtitle,
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
      <div className={header}>
        <div className={headerInfo}>
          <h1 className={headerTitle}>{homePageFields.headerHome.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homePageFields.headerHome.description,
            }}
          />
          <a className={CTA} target="__blank" href={homePageFields.callToAction.link}>
            {homePageFields.callToAction.linkText}
          </a>
        </div>
        <div>
          <GatsbyImage
            image={image}
            className={headerPicture}
            alt={homePageFields.headerHome.picture.altText}
          />
        </div>
      </div>


      <div className={section}>
        <h2 className={subtitle}>{homePageFields.featuredEboard.title}</h2>
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