---
to: src/components/<%= name %>/index.tsx
---
<% if(useState) { -%>
import React, { useState } from "react"

type Props = Readonly<{ name: string }>

/**
 * <%= name %>
 * ------------------------------------------------
 * DESCRIPTION_HERE
 */

export function <%= name %>({ name }: Props) {
  const [count, setCount] = useState(0)
  return (
    <div className="<%= name %>">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>{name}</button>
    </div>
  )
}
<% } else { -%>
import React from "react"

type Props = Readonly<{ name: string }>

/**
 * <%= name %>
 * ------------------------------------------------
 * DESCRIPTION_HERE
 */

export function <%= name %>({ name }: Props) {
  return <div className="<%= name %>">{name}</div>
}
<% } -%>