import React from "react"
import { Formik, FormikActions, ErrorMessage } from "formik"
import { TextField, Button, createStyles } from "@material-ui/core"

const styles = createStyles({})

type OnSubmit = (
  values: {
    search: string
  },
  formikActions: FormikActions<{
    search: string
  }>,
) => void

export function SearchBar() {
  const onsubmitForm: OnSubmit = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }, 1000)
  }
  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={onsubmitForm}
      render={props => (
        <form onSubmit={props.handleSubmit}>
          <ErrorMessage name="search" />
          <TextField
            type="text"
            placeholder="Search for a new game"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.search}
            name="search"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            disabled={props.isSubmitting}
          >
            Submit
          </Button>
        </form>
      )}
    />
  )
}
