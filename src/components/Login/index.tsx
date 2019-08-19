import React from "react"
import {
  TextField,
  Button,
  createStyles,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core"
import { ErrorMessage, FormikProps, withFormik, FormikValues } from "formik"
import * as yup from "yup"
import { setAuthorization } from "../../utils/setAuthorization"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { PORT } from "../../api/index"
import myAPI from "../../api/myAPI"

const styles = createStyles({
  dialogBox: {
    backgroundColor: "#f1c3b8",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
  },
  textfield: {
    marginTop: "3%",
  },

  btn: {
    marginTop: "4%",
  },
  error: {
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
  const [open, setOpen] = React.useState(true)

  // function handleClickOpen() {
  //   setOpen(true)
  // }

  function handleClose() {
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      style={styles.dialogBox}
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="form-dialog-title">Log in</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit} style={styles.form}>
          {status}
          <TextField
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            variant="standard"
            style={styles.textfield}
          />
          <div style={styles.error}>
            <ErrorMessage name="email" />
          </div>

          <TextField
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            variant="standard"
            style={styles.textfield}
          />

          <div style={styles.error}>
            <ErrorMessage name="password" />
          </div>
          <div>
            <Button
              type="submit"
              variant="contained"
              size="small"
              disabled={isSubmitting}
              style={styles.btn}
            >
              Login
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
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
