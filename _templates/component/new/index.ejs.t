---
to: src/components/<%= name %>/index.tsx
---
<% const nameBase = connected ? name + "Base" : name -%>
<% if(useState) { -%>
import React, { useState } from "react"
<% if(connected) { -%>
import { connect } from "react-redux"
import { MapStateToProps } from "../../types/MapStateToProps"
<% } -%>

type Props = Readonly<{ name: string }>

export function <%= nameBase %>({ name }: Props) {
  const [count, setCount] = useState(0)
  return (
    <div className="<%= name %>">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {name}
    </div>
  )
}
<% } else { -%>
import React from "react"
<% if(connected) { -%>
import { connect } from "react-redux"
import { MapStateToProps } from "../../types/MapStateToProps"
<% } -%>

type Props = Readonly<{ name: string }>

export function <%= nameBase %>({ name }: Props) {
  return <div className="<%= name %>">{name}</div>
}
<% } -%>
<% if(connected) { -%>

interface PropsOuter {}

const mapStateToProps: MapStateToProps<Props, PropsOuter> = (/* state, propsOuter */) => {
  return {}
}

const mapDispatchToProps = {}

export const <%= name %> = connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= nameBase %>)
<% } -%>