import React from "react"
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  createStyles,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core"

const styles = createStyles({
  card: {
    maxWidth: 345,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginButton: 10,
  },
  media: {
    height: 230,
    width: 240,
    flexGrow: 1,
  },
})

interface UrsBrd {
  rating: number
  isborrowed: boolean
  id: number
}
interface Props {
  boardgames: {
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
  key: number
  handleDelete?: (collectionID: number) => Promise<void>
}

export const BgCard = (props: Props) => {
  const { boardgames } = props
  const img = new Image()

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  if (boardgames.img) {
    img.src = boardgames.img
  }

  const deleteBoardgame = async (collectionID: number) => {
    if (props.handleDelete) {
      props.handleDelete(collectionID)
      handleClose()
    }
  }

  return (
    <div>
      <Card style={styles.card}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            style={styles.media}
            image={boardgames.img ? boardgames.img : "No Image"}
            title={boardgames.name}
          />
          <CardContent>
            <Typography gutterBottom variant="display1" component="h2">
              {boardgames.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {boardgames.description.substring(0, 200) + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleClickOpen}>
            More Details
          </Button>
        </CardActions>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={boardgames.name}
        aria-describedby={boardgames.description}
      >
        <DialogTitle>{boardgames.name}</DialogTitle>
        <DialogContent>
          {<img src={boardgames.thumbnail} alt={boardgames.name} />}
          Description: {boardgames.description}
          Max Category: {boardgames.category}
          Max Players: {boardgames.maxPlayers}
          Min Players: {boardgames.minPlayers}
          Min Age: {boardgames.minAge}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button
            size="small"
            style={{ backgroundColor: "red" }}
            onClick={() => deleteBoardgame(boardgames.UrsBrd[0].id)}
          >
            Remove from collection
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
