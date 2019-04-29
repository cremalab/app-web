import React from "react"
import { Provider as ProviderRedux } from "react-redux"
import { store } from "../../state"

type Props = Readonly<{ children: React.ReactNode }>

export function Initializer({ children }: Props) {
  return <ProviderRedux store={store}>{children}</ProviderRedux>
}
