import React from "react"
import { Home } from "../Home"
import { Search } from "../Search"
import { Route, RouteComponentProps, Redirect, Switch } from "react-router-dom"
import { verifyToken } from "../../utils/validateToken"

const verifiedObj = verifyToken(localStorage.jwtToken)
//const path = `/home/${verifiedObj.userId}`
interface OtherProps {
  id: string
}

const home = ({ match }: RouteComponentProps<OtherProps>) => {
  console.log("Render home!")
  return <Home id={match.params.id} />
}

export function AuthRoutes() {
  return verifiedObj.userId ? (
    <Switch>
      <Route path="/home/:id" render={home} />
      <Route path="/search" component={Search} />
    </Switch>
  ) : (
    <Redirect to="/login" />
  )
}
