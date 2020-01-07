import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet"

export default ({ data }) => {
  console.log(data)
  return (
    <PrimaryLayout column="col-xs-6">
        <Helmet>
            <title>Gatsby Project</title>
            <meta name="description" content="A website created with gatsby and wordpress data sourced." />
            <meta name="keywords" content="gatsby, gatsbyjs, gatsby bootstrap, wordpress, pwa, headlessCMS" />
            <meta name="robots" content="index, follow" />
        </Helmet>
      {data.allWordpressPost.nodes.map(node => (
        <Post
          key={node.id}
          image={node.featured_media.source_url}
          title={node.title}
          readMore={node.slug}
        ></Post>
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        id
        title
        featured_media {
          source_url
        }
        slug
      }
    }
  }
`
