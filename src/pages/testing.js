import React from 'react'
import { graphql } from 'gatsby'

const testing = ({ data }) => {
  const author = data.site.info.author
  return (
    <div>
      <h2>author: {author}</h2>
    </div>
  )
}
export const data = graphql`
  query {
    site {
      info: siteMetadata {
        author
        title
        complexData {
          age
          name
        }
        description
        simpleData
        person {
          age
          name
        }
      }
    }
  }
`
export default testing
