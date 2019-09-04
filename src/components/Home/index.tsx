import React from "react"
import { BgCard } from "../BgCard"
import { createStyles, Typography } from "@material-ui/core"
import { User } from "../../types"
import { setAuthorization } from "../../utils/setAuthorization"
import { AxiosResponse } from "axios"
import myAPI from "../../api/myAPI"

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

interface UrsBrd {
  rating: number
  isborrowed: boolean
  id: number
}
interface Boardgames {
  UrsBrd: UrsBrd[]
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
          this.setState({ boardgames: res.data.result })
        })
        .catch(error => {
          console.log("Error ", error)
        })
    } else {
      myAPI
        .get<Data>(`/auth/home/${localStorage.userId}`)
        .then(res => {
          this.setState({ boardgames: res.data.result })
          console.log("Users BG:", this.state.boardgames)
        })
        .catch(error => {
          console.log("Error ", error)
        })
    }
  }

  public handleDelete = async (collectionID: number) => {
    await myAPI.delete(`auth/delete/${collectionID}`)
    const updatedTable = this.state.boardgames.filter(boardgame => {
      return boardgame.UrsBrd[0].id !== collectionID
    })
    this.setState({ boardgames: updatedTable })
  }
  public renderBgCards(boardgames: Boardgames[]) {
    if (boardgames.length > 0) {
      return boardgames.map(boardgame => {
        return (
          <BgCard
            boardgames={boardgame}
            key={boardgame.brdGameId}
            handleDelete={this.handleDelete}
          />
        )
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
