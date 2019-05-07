import React from "react"
import {
  TextField,
  Grid,
  Button,
  withStyles,
  createStyles,
} from "@material-ui/core"
import { ErrorMessage, FormikProps, withFormik, FormikValues } from "formik"
import * as yup from "yup"

interface FormValues {
  login: string
  password: string
}

export const FormComp = (props: StyleProps & FormikProps<FormValues>) => {
  const {
    values,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    classes,
  } = props

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={8}
        className={classes.errors}
        direction="column"
        justify="center"
      >
        <Grid item>
          <TextField
            name="login"
            placeholder="Username"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.login}
            variant="outlined"
          />
        </Grid>
        <ErrorMessage name="login" />
        <Grid item>
          <TextField
            name="password"
            placeholder="Password"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            variant="outlined"
          />
        </Grid>
        <ErrorMessage name="password" />
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            size="small"
            disabled={isSubmitting}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

FormComp.displayName = "LoginForm"

interface StyleProps {
  classes: {
    errors: string
  }
}

const styles = createStyles({
  errors: {
    color: "red",
  },
})

export const LoginForm = withStyles(styles)(FormComp)

//TODO: Research purpose of this interface
interface MyFormProps {
  initlogin?: ""
}

export const Login = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    login: props.initlogin || "",
    password: "",
  }),

  validationSchema: yup.object().shape({
    login: yup.string().required("You must enter a login"),

    password: yup.string().required("You must enter a  password"),
  }),

  handleSubmit({ login, password }: FormikValues, { setSubmitting }) {
    console.log(login)
    alert(JSON.stringify({ login, password }, null, 2))
    //Potential asynchronous code here
    setSubmitting(false)
  },
})(LoginForm)
