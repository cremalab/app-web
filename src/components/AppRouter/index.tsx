import React from "react"
import { Login } from "../Login"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { AuthRoutes } from "../AuthRoutes"
import { Navigation } from "../Navigation"

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={AuthRoutes} />
        </Switch>
      </Router>
    </div>
  )
}
