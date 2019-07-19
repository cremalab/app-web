import React from "react"
import { Tabs, Tab, AppBar } from "@material-ui/core"
import { RouteComponentProps, withRouter } from "react-router-dom"

interface LinkTabProps extends RouteComponentProps {
  label?: string
  href: string
  value?: number
}

export const Navigation = () => {
  // const classes = useStyles()
  const [value = 2, setValue] = React.useState()

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue)
    return event
  }
  function Links(props: LinkTabProps) {
    return (
      <div>
        <Tab
          onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault()
            if (localStorage.userId && props.href === "/home/:id") {
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
  const LinkTab = withRouter(Links)

  return (
    <div>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="home" href="/home/:id" />
          <LinkTab label="Search Collection" href="/search" />
          <LinkTab label="login" href="/login" />
        </Tabs>
      </AppBar>
    </div>
  )
}
