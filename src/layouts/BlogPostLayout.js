import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const BlogPostLayout = ({ data }) => {
  const post = data.wordpressPost;
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row justify-content-md-center">
          <h1 dangerouslySetInnerHTML ={{__html: post.title}} />
          <div>{post.featured_media.source_url}</div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />

        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BlogPostLayout

export const query = graphql`
  query($slug: String!) {
    wordpressPost( slug: { eq: $slug }) {
      content
      title
      featured_media {
        source_url
      }
    }
  }
`
