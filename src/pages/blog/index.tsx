import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { Link, graphql } from "gatsby";

export default function Blog({ data }: any) {
  return (
    <Layout title="Blog">
      <p>The most recent new from my shop!</p>
      <article>
        <h4>My first post</h4>
        <section>
          {data.allMdx.nodes.map((file: any, index: any) => (
            <article key={index}>
              <Link to={`/blog/${file.frontmatter?.slug}`}>
                <h3>{file.frontmatter?.title}</h3>
                <h3>
                  {file.frontmatter?.author} in: {file.frontmatter?.category}
                </h3>
                <h3>{file.frontmatter?.date}</h3>
                <p>{file.ecerpt}</p>
              </Link>
            </article>
          ))}
        </section>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY.MM.DD")
          category
          author
          slug
        }
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
