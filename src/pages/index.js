import React from 'react'
import Link from 'gatsby-link'
import Intro from './../components/intro'

const IndexPage = ({data}) => (
  <div>
    <Intro content={data.site.siteMetadata.intro}/>
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteIntroContent {
    site {
      siteMetadata {
        intro {
          name, title, bio
        }
      }
    }
  }
`
