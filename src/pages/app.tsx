import React from "react"

import { Router } from "@reach/router"

import Layout from "../components/Layout"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Profile from "../components/Profile"
import Register from "../components/Register";
import Reset from "../components/Reset";
import Homescreen from "." 
import DailyShuffle from "./DailyShuffle"

const App = () => (
  <Layout>
    <Router>
      <Homescreen path='/'/>
      <PrivateRoute path="/profile" component={Profile} location={undefined} />
      <Login path="/login" />
      <DailyShuffle path='/daily-shuffle' />
      <Register path="/register" />
      <Reset path="/reset" />
    </Router>
  </Layout>
)

export default App
