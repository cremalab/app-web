import React from "react"
import {
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  createStyles,
} from "@material-ui/core"
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions"
import { Item } from "../../utils/searchSubmit"
import { ResultListRow } from "../ResultListRow"

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

  const length = items.length ? items.length : 1
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, length - page * rowsPerPage)

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) => {
    setPage(newPage)
    return event
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Paper style={styles.root}>
      <div style={styles.tableWrapper}>
        <form>
          <Table style={styles.table}>
            <TableBody>
              {items
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item: Item) => {
                  const name = item.name._attributes.value
                  const year = item.yearpublished
                    ? item.yearpublished._attributes.value
                    : "N/A"
                  const bgGeekID = item._attributes.id
                  return (
                    <ResultListRow
                      name={name}
                      year={year}
                      bgGeekID={bgGeekID}
                      key={bgGeekID}
                    />
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
        </form>
      </div>
    </Paper>
  )
}
