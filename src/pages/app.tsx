import React from "react"

import { Router } from "@reach/router"

import Layout from "../components/Layout"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Profile from "../components/Profile"
import Register from "../components/Register";
import Reset from "../components/Reset";
import DailyShuffle from "./DailyShuffle"
import Homescreen from "./Homescreen"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} location={undefined} />
      <Homescreen path = '/app/' />
      <Login path="/app/login" />
      <DailyShuffle path='/app/daily-shuffle' />
      <Register path="/app/register" />
      <Reset path="/app/reset" />
    </Router>
  </Layout>
)

export default App
