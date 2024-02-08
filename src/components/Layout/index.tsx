import React from "react";
import { Helmet } from "react-helmet";

import Header from "../Header";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

// @todo delete this page
const Layout = ({ children }: { children: any }) => (
  <div className="">
    <Helmet title="Gatsby Authentication With Firebase" />
    <Header />
    <ThemeToggle />
    <main className={"mt-0"}>{children}</main>
  </div>
);

export default Layout;
