import { FormikActions } from "formik"
import Axios from "axios"
import { validateToken } from "../validateToken"
import xml, { ElementCompact } from "xml-js"

// Define

export const options = {
  compact: true,
  ignoreComment: true,
  alwaysChildren: true,
  ignoreDeclaration: true,
}

export interface Item {
  name: {
    _attributes: {
      value: string
    }
  }
  yearpublished: {
    _attributes: {
      value: string
    }
  }
  _attributes: {
    id: string
  }
}

export const ItemInit = [
  {
    name: {
      _attributes: {
        value: " ",
      },
    },
    yearpublished: {
      _attributes: {
        value: " ",
      },
    },
    _attributes: {
      id: " ",
    },
  },
]
export type SearchSubmit = (
  values: { search: string },
  actions: FormikActions<{ search: string }>,
) => Promise<void | Item[] | undefined>

// Implement
export async function searchSubmit(
  values: {
    search: string
  },
  actions: FormikActions<{
    search: string
  }>,
) {
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
      return results
    } else {
      setStatus(`No results found containing the name "${search}"`)
      setSubmitting(false)
      return null
    }
  } else {
    setStatus("Please login to add a game to your collection")
    setSubmitting(false)
    // props.history.push("/login")
    return null
  }
}
