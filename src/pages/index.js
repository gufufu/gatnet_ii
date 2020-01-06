import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"
import { graphql } from "gatsby"

export default ({ data }) => {
    console.log(data);
  return (
    <PrimaryLayout column="col-xs-6">
        {data.allMarkdownRemark.nodes.map(node => (
            <Post
            key={node.id}
            image={node.frontmatter.image}
            title={node.frontmatter.title}
            excerpt={node.excerpt}
            readMore={node.fields.slug}
          ></Post>
        ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          keywords
          title
          image
        }
        id
        excerpt
        html
        fields {
            slug
        }
      }
    }
  }
`
