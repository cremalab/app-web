import React from "react"
//import { Typography } from "@material-ui/core"

//type Props = Readonly<{ children?: React.ReactNode }>
interface Props {
  title?: string
}
interface State {
  numberOfGames: number
}
export class Home extends React.Component<Props, State> {
  public state: State = {
    numberOfGames: 0,
  }

  public componentDidMount() {}
  public render() {
    return <div>Home</div>
  }
}
