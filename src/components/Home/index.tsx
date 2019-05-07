import React from "react"

type Props = Readonly<{ children?: React.ReactNode }>

export function Home({ children }: Props) {
  return <div className="Home">{children}</div>
}
