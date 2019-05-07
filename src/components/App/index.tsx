import React from "react"
import "./index.css"

import { LoginWithFormik } from "../../components/Login"
import { createStyles, withStyles } from "@material-ui/core"

interface StyleProps {
  classes: {
    root: string
  }
}

const style = createStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
})

export const App = withStyles(style)((props: StyleProps) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <LoginWithFormik />
    </div>
  )
})
