import React from "react"

import { BrowserRouter as Router, NavLink } from "react-router-dom"

export const Navigation = () => {
  return (
    <div>
      <Router>
        <NavLink to="/login" exact>
          Login
        </NavLink>
        <br />
        <NavLink to="/home" exact>
          Home
        </NavLink>
      </Router>
    </div>
  )
}
