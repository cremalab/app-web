import React from "react"
import { Tabs, Tab, AppBar } from "@material-ui/core"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { validateToken } from "../../utils/validateToken"

interface LinkTabProps extends RouteComponentProps {
  label?: string
  href: string
  value: string
}

export const Navigation = () => {
  const [value, setValue] = React.useState()

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue)
    return event
  }
  function links(props: LinkTabProps) {
    const currentValue = props.location.pathname.includes("/home")
      ? "home/:id"
      : props.location.pathname
    setValue(currentValue)
    return (
      <div>
        <Tab
          onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault()
            if (
              validateToken(localStorage.jwtToken) &&
              props.href === "/home/:id"
            ) {
              props.history.push(`/home/${localStorage.userId}`)
            } else {
              props.history.push(props.href)
            }
            return event
          }}
          {...props}
        />
      </div>
    )
  }
  const LinkTab = withRouter(links)

  return (
    <div>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="home" href="/home/:id" value="home/:id" />
          <LinkTab label="Add a game" href="/addgame" value="/addgame" />
          <LinkTab label="Search Collection" href="/search" value="/search" />
        </Tabs>
      </AppBar>
    </div>
  )
}
