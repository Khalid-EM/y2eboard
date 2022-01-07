import React from "react"
import {
  wrapperContainer,
  titlecopyright,
  copyRight,
  socialsBoards,
  instagramIcon,
  facebookIcon,
} from "./footer.module.css"

const Footer = ({ siteTitle, companyInfo }) => {
  return (
    <div className={wrapperContainer}>
      <div className={titlecopyright}>
        <p className={copyRight}>&copy; {new Date().getFullYear()} Y2EBOARD | All right reserved | Terms Of Service | Privacy</p>
        <p>Khalid EM | Student | Artesis Plantijn Hogeschool </p>
      </div>
      <div>
        <p>{`${companyInfo.address}, ${companyInfo.postcode} ${companyInfo.city}`}</p>
        <div className={socialsBoards}>
          Socials media:
          <a
            className={instagramIcon}
            href={companyInfo.socials.instagram}
          />
          <a
            className={facebookIcon}
            href={companyInfo.socials.facebook}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer