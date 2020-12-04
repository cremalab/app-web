import { useState } from "react"
import logo from "../../assets/logo.svg"
import "./styles.css"

export function App() {
  const [inputState, setInputState] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/components/App/index.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input
          type="text"
          className="App-input"
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
        />
      </header>
    </div>
  )
}
