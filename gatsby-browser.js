import React from "react"
import "./src/styles/global.css"

import AuthProvider from './src/components/Auth/AuthContext'

export const wrapRootElement = ({ element }) => (
    <AuthProvider >
        {element}
    </AuthProvider>
); 