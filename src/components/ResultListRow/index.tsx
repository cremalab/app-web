import React from "react"
import { TableRow, TableCell, Button } from "@material-ui/core"
import myAPI from "../../api/myAPI"

interface Props {
  name: string
  year: string
  bgGeekID: string
}

export function ResultListRow(props: Props) {
  const [added, setAdded] = React.useState(false)
  const { name, year, bgGeekID } = props
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{year}</TableCell>
      <TableCell align="right">
        <Button
          onClick={() => {
            myAPI
              .post("/auth/addgame", {
                userId: localStorage.userId,
                bgGeekID,
              })
              .then(() => {
                setAdded(true)
              })
              .catch(err => {
                console.log(err)
              })
          }}
          disabled={added}
        >
          Add
        </Button>
      </TableCell>
    </TableRow>
  )
}
