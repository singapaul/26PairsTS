import React from "react"
import { navigate } from "gatsby"
import PropTypes from "prop-types"

import { useAuthValue } from './Auth/AuthContext'
// @ts-ignore
const PrivateRoute = ({ component: Component,path, location, ...rest }) => {

  const {currentUser} = useAuthValue()
  if(!currentUser){
    navigate("/app/login")
    return null
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
