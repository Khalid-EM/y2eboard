import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  nav,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'
import Footer from './footer'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      wpPage(slug: { eq: "contact-us" }) {
        contactPage {
          companyInformation {
            address
            city
            postcode
            socials {
              facebook
              instagram
            }
          }
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <nav className={nav}>
        <Link className={siteTitle} to="/">
          <header >{data.site.siteMetadata.title}</header>
        </Link>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/eboards">
              Eboards
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        companyInfo={data.wpPage.contactPage.companyInformation} />
    </div>
  )
}

export default Layout



