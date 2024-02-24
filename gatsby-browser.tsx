import React from "react";
import { Provider } from "react-redux";
import "./src/styles/global.css";
import store from "./src/store/store";
import AuthProvider from "./src/components/Auth/AuthContext";

export const wrapRootElement = ({ element }) => (
  <AuthProvider>
    <Provider store={store}>{element}</Provider>
  </AuthProvider>
);
