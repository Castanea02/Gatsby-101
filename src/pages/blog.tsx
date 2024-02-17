import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { graphql } from "gatsby";

export default function Blog({ data }: any) {
  return (
    <Layout title="Blog">
      <p>The most recent new from my shop!</p>
      <article>
        <h4>My first post</h4>
        <ul>
          {data.allFile.nodes.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
