import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
// import Status from "../components/Status"
import Register from "../components/Register";
import Reset from "../components/Reset";
import Homescreen from "./playground/Homescreen"

const App = () => (
  <Layout>
    {/* <Status /> */}
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} location={undefined} />
      <Homescreen path = '/app/' />
      <Login path="/app/login" />
      <Register path="/app/register" />
      <Reset path="/app/reset" />
    </Router>
  </Layout>
)

export default App
