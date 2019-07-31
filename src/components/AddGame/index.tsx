import React from "react"
import { SearchBar } from "../SearchBar"
import { ResultList } from "../ResultList"
import { Item, options } from "../../utils/searchSubmit"
import { FormikActions } from "formik"
import { validateToken } from "../../utils/validateToken"
import xml, { ElementCompact } from "xml-js"
import Axios from "axios"

interface State {
  items: Item[]
}

export type SearchSubmit = (
  values: { search: string },
  actions: FormikActions<{ search: string }>,
) => Promise<void | Item[] | undefined>

const defaultState: State = {
  items: [],
}

export class AddGame extends React.Component {
  public state = defaultState

  public onSearchSubmit = async (
    values: {
      search: string
    },
    actions: FormikActions<{
      search: string
    }>,
  ) => {
    const { setStatus, setSubmitting } = actions
    const { search } = values
    setStatus(null)
    //Set up await syntax
    if (validateToken(localStorage.jwtToken)) {
      const result = await Axios.get(
        `http://localhost:8080/https://www.boardgamegeek.com/xmlapi2/search?query=${search}&type=boardgame`,
      )
      const data: ElementCompact = xml.xml2js(result.data, options)

      if (data.items.item) {
        const results: Item[] = data.items.item.length
          ? data.items.item.map((game: Item) => game)
          : data.items.item
        setStatus("Done! Check console for results")
        setSubmitting(false)
        const length = results.length ? results.length : 1
        console.log(
          "Result====> SearchSubmit Utility...Length:",
          length,
          " Result!",
          results,
        )
        this.setState({ items: results })
      } else {
        setStatus(`No results found containing the name "${search}"`)
        setSubmitting(false)
      }
    } else {
      setStatus("Please login to add a game to your collection")
      setSubmitting(false)
      // props.history.push("/login")
    }
  }

  public render() {
    console.log("State Items!", this.state.items)
    return (
      <div>
        <SearchBar onsubmit={this.onSearchSubmit} />
        <h2>Found: {this.state.items.length} Games</h2>
        <ResultList items={this.state.items} />
      </div>
    )
  }
}
