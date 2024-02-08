import React from "react"
import { Helmet } from "react-helmet"

import Header from "../Header"

// Global styles and component-specific styles.
import "./global.css"
 
const Layout = ({ children }: {children: any}) => (
  <div>
    <Helmet title="Gatsby Authentication With Firebase" />
    <Header />
    <main className={'mt-0'}>{children}</main>
  </div>
)

export default Layout
