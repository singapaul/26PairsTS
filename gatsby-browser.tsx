import React from "react";
import { Provider } from "react-redux";

import "./src/styles/global.css";

import { Analytics } from "@vercel/analytics/react"

import AuthProvider from "./src/components/Auth/AuthContext";
import store from "./src/store/store";

export const wrapRootElement = ({ element }) => (
  
  <AuthProvider>
    <Provider store={store}>{element}</Provider>
    <Analytics />
  </AuthProvider>
);

// gatsby-browser.js


export const onRouteUpdate = ({ location, prevLocation }) => {



  // You can also use location and prevLocation if you need details about the route change
};
