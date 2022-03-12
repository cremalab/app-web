---
to: src/components/<%= name %>/<%= name %>.tsx
---
<% if(!withExample) { -%>
export function <%= name %>() {
  return <></>
}
<% } else if(useState) { -%>
import { useState } from "react"

interface Props {
  name: string
}

export function <%= name %>({ name }: Props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Hi, my name is {name}!</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}
<% } else { -%>
interface Props {
  name: string
}

export function <%= name %>({ name }: Props) {
  return (
    <div>
      <p>Hi, my name is {name}!</p>
    </div>
  )
}
<% } -%>
