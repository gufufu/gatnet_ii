import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <PrimaryLayout column="col-xs-6">
      {data.allWordpressPost.nodes.map(node => (
        <Post
          alt={node.featured_media.slug}
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
          slug
        }
      }
    }
  }
`
