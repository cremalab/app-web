import React from "react"
import { Login } from "../Login"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { AuthRoutes } from "../AuthRoutes"
import { Navigation } from "../Navigation"
import dotenv from "dotenv"
dotenv.config()

export const HOST = process.env.REACT_APP_HOST
export const PORT = process.env.REACT_APP_APIPORT
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
