import React from "react"

type Props = Readonly<{ children?: React.ReactNode }>

export function ResultListRow({ children }: Props) {
  return <div className="ResultListRow">{children}</div>
}
