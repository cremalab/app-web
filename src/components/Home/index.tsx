import React from "react"
import { BgCard } from "../BgCard"
import { createStyles, Typography } from "@material-ui/core"
import { User } from "../../types"
import { setAuthorization } from "../../utils/setAuthorization"
import axios, { AxiosResponse } from "axios"
import { PORT } from "../AppRouter"
//import bgAPI from "../../utils/bgAPI"
const styles = createStyles({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
})

interface Props {
  id?: string
  request?: () => Promise<AxiosResponse<Data>>
}

interface State {
  user: User
  boardgames: Boardgames[]
}

interface Boardgames {
  brdGameId: number
  name: string
  minPlayers: string
  maxPlayers?: string
  description: string
  category?: string
  minAge: string
  thumbnail?: string
  img?: string
}
export interface Data {
  result: Boardgames[]
}
export class Home extends React.Component<Props, State> {
  public state: State = {
    user: { name: "", activeUser: false },
    boardgames: [],
  }

  public componentDidMount() {
    setAuthorization(localStorage.jwtToken)
    if (this.props.request) {
      this.props
        .request()
        .then(res => {
          console.log("Axios =======>", res.data.result)
          this.setState({ boardgames: res.data.result })
        })
        .catch(error => {
          console.log("Error ", error)
        })
    } else {
      axios
        .get<Data>(`http://localhost:${PORT}/auth/home/${this.props.id}`)
        .then(res => {
          console.log("Axios =======>", res.data.result)
          this.setState({ boardgames: res.data.result })
        })
        .catch(error => {
          console.log("Error ", error)
        })
    }
  }
  public renderBgCards(boardgames: Boardgames[]) {
    if (boardgames.length > 0) {
      return boardgames.map(boardgame => {
        return <BgCard boardgames={boardgame} />
      })
    } else {
      return (
        <Typography variant="display2" align="center">
          Oh No! You have no boardgames in your collection
        </Typography>
      )
    }
  }
  public render() {
    return (
      <div style={styles.container}>
        <Typography variant="display2" align="center">
          Welcome!
        </Typography>
        <div style={styles.cards}>
          {this.renderBgCards(this.state.boardgames)}
        </div>
      </div>
    )
  }
}
