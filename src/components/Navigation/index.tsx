import React from "react"
import { Tabs, Tab, AppBar } from "@material-ui/core"
import { RouteComponentProps, withRouter } from "react-router-dom"

interface LinkTabProps extends RouteComponentProps {
  label?: string
  href: string
}

function Links(props: LinkTabProps) {
  return (
    <div>
      <Tab
        component="a"
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          props.history.push(props.href)
          event.preventDefault()
        }}
        {...props}
      />
    </div>
  )
}
const LinkTab = withRouter(Links)

export const Navigation = () => {
  // const classes = useStyles()
  const [value, setValue] = React.useState(0)

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue)
    return event
  }
  return (
    <div>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="home" href="/home" />
          <LinkTab label="login" href="/login" />
        </Tabs>
      </AppBar>
      {value === 0}
      {value === 1}
      {value === 2}
    </div>
  )
}
