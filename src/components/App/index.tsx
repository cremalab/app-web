import React from "react"
import logo from "../../assets/logo.svg"
import classnames from "classnames"
import "./index.css"

type Props = Readonly<{
  children?: React.ReactNode
  notAnimated?: boolean
}>

export function App(props: Props) {
  const logoClasses = classnames("App-logo", {
    "App-logo--notAnimated": props.notAnimated,
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={logoClasses} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
