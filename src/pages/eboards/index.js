import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
const index = ({data: {allWpEboard: {edges}}}) => {
    return (
        <Layout pageTitle="Eboards of Y2Quakz">
            {edges.map((item) => {
        const eboard = item.node.eboardFields;
        const slug = item.node.slug;
        return <Link to = {`/eboards/${slug}`}><p key={item.node.id}>{eboard.name}</p></Link>
        
            })}
        </Layout>
    )
}

export const query = graphql`
  query {
    allWpEboard {
      edges {
        node {
          eboardFields {
            board
            discription
            maxLoad
            maxSpeed
            name
            price
            range
            wheels
          }
          id
          slug
        }
      }
    }
  }

`


export default index