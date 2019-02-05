---
to: src/components/<%= name %>/index.tsx
---
<% const nameBase = connected ? name + "Base" : name -%>
<% if(componentType === "class") { -%>
import React, { Component } from "react"
<% if(connected) { -%>
import { connect } from "react-redux"
import { ReduxMapStateToProps } from "../../types/ReduxMapStateToProps"
<% } -%>

interface Props {}
interface State {}

export class <%= nameBase %> extends Component<Props, State> {
  public static displayName = "<%= name %>"
  public static defaultProps = {}
  public state = {}
  public render() {
    const { children } = this.props
    return <div className="<%= name %>">{children}</div>
  }
}
<% } else { -%>
import React from "react"
<% if(connected) { -%>
import { connect } from "react-redux"
import { ReduxMapStateToProps } from "../../types/ReduxMapStateToProps"
<% } -%>

type Props = Readonly<{ children?: React.ReactNode }>

export function <%= nameBase %>({ children }: Props) {
  return <div className="<%= name %>">{children}</div>
}
<% } -%>
<% if(connected) { -%>

interface PropsOuter {}

const mapStateToProps: ReduxMapStateToProps<
  Props,
  PropsOuter
> = (/* state, propsOuter */) => {
  return {}
}

const mapDispatchToProps = {}

export const <%= name %> = connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= nameBase %>)
<% } -%>