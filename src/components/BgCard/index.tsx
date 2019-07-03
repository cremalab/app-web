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
} from "@material-ui/core"

const styles = createStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    width: 150,
  },
})

interface Props {
  boardgames: {
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
}

export function BgCardBase(props: Props) {
  const { boardgames } = props
  return (
    <Card style={styles.card}>
      <CardActionArea>
        <CardMedia
          style={styles.media}
          image={boardgames.img}
          title={boardgames.name}
        />
        <CardContent>
          <Typography gutterBottom variant="display1" component="h2">
            {boardgames.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {boardgames.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          More Details
        </Button>
      </CardActions>
    </Card>
  )
}
