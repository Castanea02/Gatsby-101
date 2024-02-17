import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevStickers">
      <div></div>
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;
