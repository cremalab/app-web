import React from "react"
import { Home } from "../Home"
import { Login } from "../Login"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Navigation } from "../Navigation"

export const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  )
}
