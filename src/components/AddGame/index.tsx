import React from "react"
import { SearchBar } from "../SearchBar"
import { ResultList } from "../ResultList"
import { Item, options } from "../../utils/searchSubmit"
import { FormikActions } from "formik"
import { validateToken } from "../../utils/validateToken"
import xml, { ElementCompact } from "xml-js"
import bggAPI from "../../api/bggAPI"
interface State {
  items: Item[]
}

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
      const result = await bggAPI.get(`/search`, {
        params: {
          query: search,
          type: "boardgame",
        },
      })
      console.log(result)
      const data: ElementCompact = xml.xml2js(result.data, options)

      if (data.items.item) {
        const results: Item[] = data.items.item.length
          ? data.items.item.map((game: Item) => game)
          : [data.items.item]
        setStatus("Done! Check console for results")
        setSubmitting(false)
        this.setState({ items: results })
      } else {
        setStatus(`No results found containing the name "${search}"`)
        this.setState({ items: defaultState.items })
        setSubmitting(false)
      }
    } else {
      setStatus("Please login to add a game to your collection")
      setSubmitting(false)
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
