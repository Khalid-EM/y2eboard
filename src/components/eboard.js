import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    wrapperContainer,
    eboardImageContainer,
    eboardInfo,
    eboardName,
} from "./eboard.module.css"


export const Eboard = ({ eboard, slug }) => {
    const profile = getImage(eboard.eboardFields.picture.localFile)

    console.log("Profile" ,profile);

    return (
        <Link className={wrapperContainer} to={slug} >
            <GatsbyImage
                className={eboardImageContainer}
                image={profile}
                alt={eboard.eboardFields.picture.altText}
            />
            <div className={eboardInfo} >
                <p className={eboardName}>
                    {eboard.eboardFields.name}
                </p>
            </div>
        </Link>
    )
}



export default Eboard;