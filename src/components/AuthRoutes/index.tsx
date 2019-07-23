import React from "react"
import { Home } from "../Home"
import { Search } from "../Search"
import { Route, RouteComponentProps, Redirect, Switch } from "react-router-dom"
import { validateToken } from "../../utils/validateToken"

interface OtherProps {
  id: string
}

const home = ({ match }: RouteComponentProps<OtherProps>) => {
  return <Home id={match.params.id} />
}

export function AuthRoutes() {
  return validateToken(localStorage.jwtToken) ? (
    <Switch>
      <Route exact path="/search" component={Search} />
      <Route exact path={["/home/:id", "/"]} render={home} />
    </Switch>
  ) : (
    <Redirect to="/login" />
  )
}
