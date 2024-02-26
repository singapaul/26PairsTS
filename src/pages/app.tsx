import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Register from "../components/Register";
import Reset from "../components/Reset";
import Homescreen from "./Homescreen"
import DailyShuffle from "./DailyShuffle"

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
