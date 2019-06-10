import axios from "axios"

// Define
type SetAuthorization = (token: string) => void

// Implement
export const setAuthorization: SetAuthorization = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common["Authorization"]
  }
}
