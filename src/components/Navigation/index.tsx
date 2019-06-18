import React from "react"

import { NavLink } from "react-router-dom"

export const Navigation = () => {
  return (
    <div>
      <NavLink to="/login" exact>
        Login
      </NavLink>
      <br />
      <NavLink to="/home" exact>
        Home
      </NavLink>
    </div>
  )
}
