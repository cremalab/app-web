import React, { useState } from "react"

type Props = Readonly<{ children?: React.ReactNode }>

export function Home({ children }: Props) {
  const [count, setCount] = useState(0)
  return (
    <div className="Home">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {children}
    </div>
  )
}
