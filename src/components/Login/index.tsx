import React from "react"
import { TextField, Grid, Button, createStyles } from "@material-ui/core"
import { ErrorMessage, FormikProps, withFormik, FormikValues } from "formik"
import * as yup from "yup"
import { setAuthorization } from "../../utils/setAuthorization"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { PORT } from "../AppRouter"
import myAPI from "../../api/myAPI"

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
  showSnack: boolean
}

const FormComp = (props: FormikProps<FormValues>) => {
  const {
    values,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    status,
  } = props
  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form}>
        {status}
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
    </div>
  )
}

const LoginComponent = withFormik<RouteComponentProps, FormValues>({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    showSnack: false,
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
    { setSubmitting, props, resetForm, setStatus },
  ) {
    setStatus(null)
    myAPI
      .post(`/auth/login`, {
        email,
        password,
      })
      .then(res => {
        const token = res.data.token
        const userId = res.data.userId
        if (token) {
          localStorage.setItem("jwtToken", token)
          localStorage.setItem("userId", userId)
          setAuthorization(token)
          props.history.push(`/home/${localStorage.userId}`)
        }
        setSubmitting(false)
      })
      .catch((err: { response: { data: { message: string } } }) => {
        // tell user that they failed to login
        if (!err.response) {
          resetForm()
          setStatus(`Check to make sure your server is running on PORT ${PORT}`)
        } else {
          resetForm()
          setStatus(err.response.data.message)
          setSubmitting(false)
        }
      })
  },
})(FormComp)

export const Login = withRouter(LoginComponent)

Login.displayName = "Login"
