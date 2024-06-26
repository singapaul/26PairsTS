import React from "react";
import { Provider } from "react-redux";

import "./src/styles/global.css";

import AuthProvider from "./src/components/Auth/AuthContext";
import store from "./src/store/store";

export const wrapRootElement = ({ element }) => (
  <AuthProvider>
    <Provider store={store}>{element}</Provider>
  </AuthProvider>
);
