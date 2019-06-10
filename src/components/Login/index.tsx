import React from "react"
import { TextField, Grid, Button, createStyles } from "@material-ui/core"
import { ErrorMessage, FormikProps, withFormik, FormikValues } from "formik"
import * as yup from "yup"
import axios from "axios"
import { setAuthorization } from "../../utils/setAuthorization"
import { withRouter, RouteComponentProps } from "react-router-dom"

const styles = createStyles({
  form: {
    display: "flex",
    minHeight: "100vh",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    color: "red",
  },
})

interface FormValues {
  email: string
  password: string
}

export const FormComp = (props: FormikProps<FormValues>) => {
  const { values, handleChange, handleBlur, isSubmitting, handleSubmit } = props

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <Grid container spacing={8} style={styles.grid} direction="column">
        <Grid item>
          <TextField
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <ErrorMessage name="email" />
        </Grid>
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

        <Grid item>
          <ErrorMessage name="password" />
        </Grid>
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

//export const LoginForm = withStyles(styles)(FormComp)

//TODO: Research purpose of this interface
interface MyFormProps extends RouteComponentProps {
  initPassword?: ""
  initEmail?: ""
}

export const LoginComponent = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    email: props.initEmail || "",
    password: props.initPassword || "",
  }),

  validationSchema: yup.object().shape({
    email: yup
      .string()
      .required("You must enter an email")
      .email(),
    password: yup.string().required("You must enter a  password"),
  }),

  handleSubmit(
    { email, password }: FormikValues,
    { setSubmitting, props, resetForm },
  ) {
    axios
      .post("http://localhost:5000/auth/login", {
        email,
        password,
      })
      .then(res => {
        localStorage.setItem("jwtToken", res.data.token)
        setAuthorization(res.data.token)
        alert(JSON.stringify(res.data.message, null, 2))
        setSubmitting(false)
        props.history.push("/home")
      })
      .catch(err => {
        alert(JSON.stringify(err.response.data.message, null, 2))
        resetForm()
        setSubmitting(false)
      })
  },
})(FormComp)

export const Login = withRouter(LoginComponent)

Login.displayName = "Login"
