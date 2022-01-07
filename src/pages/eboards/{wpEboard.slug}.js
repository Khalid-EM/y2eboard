import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  headerBoard,
  headerBoardInfo,
  headerBoardPicture,
  eboardName,
  fullEboardName,
  eboardTerms,
  eboardDescription,
  eboardInfo,
  eboardPictures,
  eboardPicture,
  eboardInfomation,
  eboardInfomation2,
  eboardImagetitle,
} from "../../page.module.css"


const EboardPage = ({
  data: {
    wpEboard: {
      eboardFields: eboard,
      terms: { nodes: terms },
    },
  },
}) => {
  const image = getImage(eboard.picture.localFile)
  const picture1 = getImage(eboard.pictures.picture1.localFile)
  const picture2 = getImage(eboard.pictures.picture2.localFile)
  const picture3 = getImage(eboard.pictures.picture3.localFile)


  return (
    <Layout pageTitle="Eboard Template">
      <h1 className={fullEboardName}>
        {eboard.name}
      </h1>
      <div className={headerBoard}>

        <div className={headerBoardInfo}>
          
          <summary className={eboardDescription}>{eboard.discription}</summary>

          <div className={eboardTerms}>
            <p>Motor peak wattage</p>
            {terms.map((term, i) => (
              <span key={term.name}>
                {term.name} {i + 1 < terms.length && "- "}
              </span>
            ))}
          </div>
        </div >

        <div className={eboardImagetitle}>
          <GatsbyImage
            className={headerBoardPicture}
            image={image}
            alt={eboard.picture.altText} 
          />
          {eboard.name && (
            <h1 className={eboardName}>{eboard.name}</h1>
          )}
        </div>
      </div>

      <div className={eboardInfomation}>
        <p>
          <span className={eboardInfo}>Price:</span> € {eboard.price}
        </p>
        <p>
          <span className={eboardInfo}>Max speed:</span> {eboard.maxSpeed} km/h
        </p>
        <p>
          <span className={eboardInfo}>Range:</span> {eboard.range} km
        </p>
      </div>

      <div className={eboardInfomation2}>
        <p>
          <span className={eboardInfo}>Max load:</span> {eboard.maxLoad} kg
        </p>
        <p>
          <span className={eboardInfo}>Board:</span> {eboard.board}
        </p>
        <p>
          <span className={eboardInfo}>Wheels:</span> {eboard.wheels} mm
        </p>
      </div>

      <div className={eboardPictures}>
        <GatsbyImage className={eboardPicture} image={picture1} alt={eboard.pictures.picture1.altText} />
        <GatsbyImage className={eboardPicture} image={picture2} alt={eboard.pictures.picture2.altText} />
        <GatsbyImage className={eboardPicture} image={picture3} alt={eboard.pictures.picture3.altText} />
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
      price
      range
      maxLoad
      maxSpeed
      board
      wheels
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
      pictures {
        picture1 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        picture2 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        picture3 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    terms {
      nodes {
        name
      }
    }
  }
}

`

export default EboardPage

