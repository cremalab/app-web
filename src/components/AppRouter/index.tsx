import React from "react"
import { Home } from "../Home"
import { Login } from "../Login"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Navigation } from "../Navigation"

export const AppRouter = () => {
  return (
    <div>
      <Navigation />
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </Router>
    </div>
  )
}
