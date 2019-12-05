import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.node.id} className="post-list__item">
            <h2>{post.node.frontmatter.title}</h2>
            <p>{post.node.frontmatter.date}</p>
            <div className="post-list__excerpt">
              <p>{post.node.excerpt}></p>
            </div>
            <Link to={post.node.fields.slug}>Read More</Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
          html
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`;