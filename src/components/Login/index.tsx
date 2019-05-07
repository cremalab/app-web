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

interface StyleProps {
  classes: {
    errors: string
  }
}

interface FormValues {
  login: string
  password: string
}

const styles = createStyles({
  errors: {
    color: "red",
  },
})

export const Login = withStyles(styles)(
  (props: StyleProps & FormikProps<FormValues>) => {
    const {
      values,
      handleChange,
      handleBlur,
      isSubmitting,
      handleSubmit,
      classes,
    } = props

    return (
      <div>
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
      </div>
    )
  },
)
//TODO: Research purpose of this interface
interface MyFormProps {
  initlogin?: ""
}

export const LoginWithFormik = withFormik<MyFormProps, FormValues>({
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
})(Login)
