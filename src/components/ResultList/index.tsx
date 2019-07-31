import React from "react"
import {
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  Button,
  createStyles,
} from "@material-ui/core"
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions"
import { Item } from "../../utils/searchSubmit"

const styles = createStyles({
  root: {
    width: "100%",
    marginTop: "3%",
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: "auto",
  },
})

interface Props {
  items: Item[]
}

export const ResultList = (props: Props) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const { items } = props
  // If search result comes back as one result or none there may be an error!
  const length = items.length ? items.length : 1
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, length - page * rowsPerPage)
  console.log("ResultList Comp Props =====>", items)
  function handleChangePage(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) {
    setPage(newPage)
    return event
  }

  function handleChangeRowsPerPage(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Paper style={styles.root}>
      <div style={styles.tableWrapper}>
        <Table style={styles.table}>
          <TableBody>
            {props.items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item: Item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {item.name._attributes.value}
                    </TableCell>
                    <TableCell align="right">
                      {item.yearpublished
                        ? item.yearpublished._attributes.value
                        : "N/A"}
                    </TableCell>
                    <TableCell align="right">
                      <Button>Add!</Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                count={length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Paper>
  )
}
