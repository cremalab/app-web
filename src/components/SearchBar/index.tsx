import React from "react"
import { Formik, ErrorMessage } from "formik"
import { TextField, Button, createStyles } from "@material-ui/core"
import * as yup from "yup"
import { SearchSubmit, searchSubmit } from "../../utils/searchSubmit"

const styles = createStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  searchConatiner: {
    display: "flex",
    justifyContent: "center",
    width: "75%",
    marginTop: "3%",
  },
  searchBar: {
    width: "75%",
  },
  button: {},

  error: {
    marginTop: "3%",
    color: "red",
  },
})

interface Prop {
  onsubmit?: SearchSubmit
}

export const SearchBar = (props: Prop) => {
  const validationSchema = yup.object().shape({
    search: yup
      .string()
      .required("Please enter the name of the boardgame you want to add"),
  })

  return (
    <div>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={props.onsubmit ? props.onsubmit : searchSubmit}
        validationSchema={validationSchema}
        render={props => (
          <div>
            <form onSubmit={props.handleSubmit} style={styles.form}>
              <div style={styles.error}>
                {props.status}
                <ErrorMessage name="search" />
              </div>
              <div style={styles.searchConatiner}>
                <TextField
                  type="text"
                  placeholder="Search for a new game"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.search}
                  name="search"
                  variant="outlined"
                  style={styles.searchBar}
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={props.isSubmitting}
                  style={styles.button}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        )}
      />
    </div>
  )
}
