import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Y2Eboard!">
      <p>Y2Comfyboard</p>
      <StaticImage
        alt="Y2Comfyboard"
        src="https://speedio.eu/image/cache/catalog/meepo/V4/1-800x800.png"
      />
      </Layout>
    </main>
  )
}

export default IndexPage