import React from "react"
import axios from "axios"
import { BgCard } from "../BgCard"
import { createStyles, Typography } from "@material-ui/core"
import { User } from "../../types"
import { setAuthorization } from "../../utils/setAuthorization"
import { PORT } from "../AppRouter"

const styles = createStyles({
  container: {
    display: "flex",
    justifyContent: "center",
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
}

interface State {
  user: User
  boardgames: Boardgames[]
}

interface Boardgames {
  brdGameId?: number
  name: string
  numOfPlayers: string
  playTime?: number
  complexity?: number
  description: string
  category?: string
  artist?: string
  designer?: string
  img?: string
}
interface Data {
  result: Boardgames[]
}
export class Home extends React.Component<Props, State> {
  public state: State = {
    user: { name: "", activeUser: false },
    boardgames: [],
  }

  public componentDidMount() {
    setAuthorization(localStorage.jwtToken)
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
  public renderBgCards(boardgames: Boardgames[]) {
    if (boardgames.length > 0) {
      return boardgames.map(boardgame => {
        return <BgCard boardgames={boardgame} />
      })
    } else {
      return
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
