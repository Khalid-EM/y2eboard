import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
const EboardPage = ({data: {allWpEboard: {edges}}}) => {
    return (
        <Layout pageTitle="Eboards of Y2Quakz">
            {edges.map((item) => {
        const eboard = item.node.eboardFields;
        return <p key={item.node.id}>{eboard.name}</p>
        
            })}
        </Layout>
    )
}

export const query = graphql`
  query {
    allWpEboard {
      edges {
        node {
          id
          eboardFields {
            board
            discription
            fieldGroupName
            maxLoad
            maxSpeed
            name
            price
            wheels
            range
          }
        }
      }
    }
  }

`


export default EboardPage