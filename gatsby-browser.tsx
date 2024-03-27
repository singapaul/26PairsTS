import React from "react";
import { Provider } from "react-redux";

import "./src/styles/global.css";

import { Analytics } from "@vercel/analytics/react"

import AuthProvider from "./src/components/Auth/AuthContext";
import { resetMoves } from "./src/store/slices/finishedGameStats";
import { updateScore } from "./src/store/slices/finishedGameStats";
import { reset } from "./src/store/slices/timer";
import { stop } from "./src/store/slices/timer";
import store from "./src/store/store";
export const wrapRootElement = ({ element }) => (
  
  <AuthProvider>
    <Provider store={store}>{element}</Provider>
    <Analytics />
  </AuthProvider>
);

// gatsby-browser.js

 

export const onRouteUpdate = ({ location, prevLocation }) => {

  console.log('Navigating from', prevLocation?.pathname, 'to', location.pathname);
  store.dispatch(reset())
  store.dispatch(resetMoves());
  store.dispatch(updateScore(0));
  store.dispatch(stop());
  // You can also use location and prevLocation if you need details about the route change
};
