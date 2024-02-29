import React from "react";
import { Link } from "gatsby";

import { Button } from "@/components/ui/button";

import Layout from "../components/Layout";
import Status from "../components/Status";
import View from "../components/View";

const Index = () => (
  <Layout>
    <Status />
    <View title="Simple Authentication Example">
      <p className="text-text-main">
        This is a simple example of creating dynamic apps with Gatsby that
        require user authentication. It uses concepts from the
        <a href="https://www.gatsbyjs.com/docs/client-only-routes-and-user-authentication/">
          client-only routes section
        </a>
        {` `}
        of the “Building Apps with Gatsby” documentation.
      </p>
      <p>
        For the full experience, go to
        {` `}
        <Link to="/app/profile">your profile</Link>.
      </p>

      <Button variant="secondary">Click me</Button>
      <button>ALSO ME</button>
    </View>
    <div className="">
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <p>uglugiug</p>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  </Layout>
);

export default Index;
