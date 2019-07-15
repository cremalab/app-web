import React from "react"

type Props = Readonly<{ children?: React.ReactNode }>

export function Search({ children }: Props) {
  return <div className="Search">{children}</div>
}
