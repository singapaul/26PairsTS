import React from "react";
import { Helmet } from "react-helmet";

 
// @todo delete this page
const Layout = ({ children }: { children: any }) => (
  <div className="">
    <Helmet  title="26 Pairs" />
    {/* <Header /> */}
    <main className={"mt-0"}>{children}</main>
  </div>
);

export default Layout;
